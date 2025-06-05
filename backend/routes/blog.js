// backend/routes/blog.js
const express = require("express");
const router = express.Router();
const prisma = require("../utils/prisma");

// GET /api/blog/posts - Get all blog posts (with basic pagination)
router.get("/blog/posts", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const posts = await prisma.blogPost.findMany({
      skip: skip,
      take: limit,
      orderBy: {
        publishDate: "desc", // Order by most recent first
      },
      select: {
        // Select specific fields to return, avoid sending full content in list view
        id: true,
        slug: true,
        title: true,
        summary: true,
        imageUrl: true,
        author: true,
        publishDate: true,
        category: true,
        tags: true,
        isFeatured: true,
      },
    });

    const totalPosts = await prisma.blogPost.count(); // Get total count for pagination info

    res.status(200).json({
      posts,
      currentPage: page,
      totalPages: Math.ceil(totalPosts / limit),
      totalPosts,
    });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    res.status(500).json({ error: "Failed to retrieve blog posts." });
  }
});

// GET /api/blog/posts/:slug - Get a single blog post by slug
router.get("/blog/posts/:slug", async (req, res) => {
  const { slug } = req.params; // Get slug from URL parameters

  try {
    const post = await prisma.blogPost.findUnique({
      where: {
        slug: slug,
      },
    });

    if (!post) {
      return res.status(404).json({ error: "Blog post not found." });
    }

    res.status(200).json(post);
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    res.status(500).json({ error: "Failed to retrieve blog post." });
  }
});

// --- Admin-only routes (will be protected with authentication later) ---
// POST /api/admin/blog/posts - Create a new blog post
router.post("/admin/blog/posts", async (req, res) => {
  const {
    slug,
    title,
    summary,
    content,
    imageUrl,
    author,
    category,
    tags,
    isFeatured,
  } = req.body;

  if (!slug || !title || !content) {
    return res
      .status(400)
      .json({ error: "Missing required fields: slug, title, content." });
  }

  try {
    const newPost = await prisma.blogPost.create({
      data: {
        slug,
        title,
        summary,
        content,
        imageUrl,
        author,
        category,
        tags,
        isFeatured: isFeatured || false,
        publishDate: new Date(), // Set publish date explicitly on creation
      },
    });
    res
      .status(201)
      .json({ message: "Blog post created successfully!", post: newPost });
  } catch (error) {
    if (error.code === "P2002" && error.meta?.target?.includes("slug")) {
      return res
        .status(409)
        .json({ error: "Slug already exists. Please choose a different one." });
    }
    console.error("Error creating blog post:", error);
    res.status(500).json({ error: "Failed to create blog post." });
  }
});

// PUT /api/admin/blog/posts/:slug - Update an existing blog post
router.put("/admin/blog/posts/:slug", async (req, res) => {
  const { slug } = req.params;
  const {
    title,
    summary,
    content,
    imageUrl,
    author,
    category,
    tags,
    isFeatured,
  } = req.body;

  try {
    const updatedPost = await prisma.blogPost.update({
      where: { slug: slug },
      data: {
        title,
        summary,
        content,
        imageUrl,
        author,
        category,
        tags,
        isFeatured,
      },
    });
    res
      .status(200)
      .json({ message: "Blog post updated successfully!", post: updatedPost });
  } catch (error) {
    if (error.code === "P2025") {
      // Prisma error code for record not found
      return res.status(404).json({ error: "Blog post not found." });
    }
    console.error("Error updating blog post:", error);
    res.status(500).json({ error: "Failed to update blog post." });
  }
});

// DELETE /api/admin/blog/posts/:slug - Delete a blog post
router.delete("/admin/blog/posts/:slug", async (req, res) => {
  const { slug } = req.params;

  try {
    await prisma.blogPost.delete({
      where: { slug: slug },
    });
    res.status(200).json({ message: "Blog post deleted successfully!" });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Blog post not found." });
    }
    console.error("Error deleting blog post:", error);
    res.status(500).json({ error: "Failed to delete blog post." });
  }
});

module.exports = router;
