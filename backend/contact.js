const pool = require("./db");

module.exports.handler = async (event) => {
  const { fullName, email, phone, subject, message } = JSON.parse(event.body);

  try {
    await pool.query(
      "INSERT INTO contact_messages(full_name, email, phone, subject, message) VALUES($1, $2, $3, $4, $5)",
      [fullName, email, phone, subject, message]
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message sent successfully!" }),
    };
  } catch (err) {
    console.error("DB error", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to save message" }),
    };
  }
};
