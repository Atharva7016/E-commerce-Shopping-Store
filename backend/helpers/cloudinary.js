const path = require("path");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new multer.memoryStorage();

function isCloudinaryConfigured() {
  const name = process.env.CLOUDINARY_CLOUD_NAME || "";
  const key = process.env.CLOUDINARY_API_KEY || "";
  const secret = process.env.CLOUDINARY_API_SECRET || "";
  return (
    name &&
    key &&
    secret &&
    !name.includes("your_") &&
    !key.includes("your_") &&
    !secret.includes("your_")
  );
}

async function ImageUploadUtil(file) {
  if (isCloudinaryConfigured()) {
    return cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });
  }

  const uploadsDir = path.join(__dirname, "..", "uploads");
  fs.mkdirSync(uploadsDir, { recursive: true });

  const match = String(file).match(/^data:(.+);base64,(.+)$/);
  if (!match) {
    throw new Error("Invalid image data");
  }

  const ext = (match[1].split("/")[1] || "png").replace("+xml", "");
  const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}.${ext}`;
  fs.writeFileSync(path.join(uploadsDir, filename), Buffer.from(match[2], "base64"));

  const port = process.env.PORT || 5000;
  return {
    url: `http://localhost:${port}/uploads/${filename}`,
  };
}

const upload = multer({ storage });
module.exports = { upload, ImageUploadUtil };
