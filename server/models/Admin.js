const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  },
  {
    collection: "Admin", // Exact table/collection name in DB
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
