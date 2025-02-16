const { Sequelize } = require("sequelize");
require("dotenv").config(); // Load environment variables

// Initialize Sequelize with environment variables
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "postgres", // Change to 'mysql' if using MySQL
  logging: false, // Disable SQL logging
});

// Function to connect to the database
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully!");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
};

// Correct module export
module.exports = { sequelize, connectDB };
