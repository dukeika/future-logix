// Blog posts data
let blogPosts = [
  {
    id: 1,
    title: "The Future of Cloud Computing in Nigeria",
    excerpt: "Exploring how cloud adoption is transforming businesses across West Africa and what it means for the future of enterprise technology.",
    content: "Cloud computing is revolutionizing the way businesses operate across Nigeria and West Africa. As organizations seek to modernize their IT infrastructure, cloud adoption has become a critical component of digital transformation strategies...",
    date: "2024-12-15",
    author: "Future Logix Team",
    category: "Cloud Computing",
    readTime: "5 min read",
    color: "blue",
    published: true
  },
  {
    id: 2,
    title: "Cybersecurity Best Practices for Small Businesses",
    excerpt: "Essential security measures every Nigerian SME should implement to protect against cyber threats and data breaches.",
    content: "In today's digital landscape, cybersecurity is no longer a luxury but a necessity for businesses of all sizes. Small and medium enterprises (SMEs) in Nigeria face unique challenges when it comes to protecting their digital assets...",
    date: "2024-12-10",
    author: "Future Logix Team",
    category: "Cybersecurity",
    readTime: "7 min read",
    color: "green",
    published: true
  },
  {
    id: 3,
    title: "Business Process Automation: A Game Changer",
    excerpt: "How automation is revolutionizing workflows and increasing efficiency for businesses in Lagos and beyond.",
    content: "Business process automation (BPA) is transforming how companies operate, reducing manual work, minimizing errors, and increasing overall efficiency. For businesses in Lagos and across Nigeria, automation represents a significant opportunity...",
    date: "2024-12-05",
    author: "Future Logix Team",
    category: "Automation",
    readTime: "6 min read",
    color: "purple",
    published: true
  },
  {
    id: 4,
    title: "Building Scalable Web Applications",
    excerpt: "Best practices for developing robust, scalable web applications that can grow with your business needs.",
    content: "Creating scalable web applications is crucial for businesses that expect to grow. Whether you're building an e-commerce platform, a SaaS product, or an enterprise application, scalability should be a core consideration from the start...",
    date: "2024-11-28",
    author: "Future Logix Team",
    category: "Development",
    readTime: "8 min read",
    color: "orange",
    published: true
  }
];

const categories = [
  { name: "Cloud Computing", color: "blue" },
  { name: "Cybersecurity", color: "green" },
  { name: "Automation", color: "purple" },
  { name: "Development", color: "orange" }
];

// Helper functions for managing blog posts
export const getBlogPosts = () => blogPosts;

export const getBlogPost = (id) => blogPosts.find(post => post.id === parseInt(id));

export const addBlogPost = (post) => {
  const newId = Math.max(...blogPosts.map(p => p.id)) + 1;
  const newPost = {
    ...post,
    id: newId,
    date: new Date().toISOString().split('T')[0],
    published: false
  };
  blogPosts.push(newPost);
  return newPost;
};

export const updateBlogPost = (id, updatedPost) => {
  const index = blogPosts.findIndex(post => post.id === parseInt(id));
  if (index !== -1) {
    blogPosts[index] = { ...blogPosts[index], ...updatedPost };
    return blogPosts[index];
  }
  return null;
};

export const deleteBlogPost = (id) => {
  const index = blogPosts.findIndex(post => post.id === parseInt(id));
  if (index !== -1) {
    const deletedPost = blogPosts.splice(index, 1)[0];
    return deletedPost;
  }
  return null;
};

export const getCategories = () => categories;

export default blogPosts;