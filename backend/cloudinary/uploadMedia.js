const dotenv = require('dotenv');
const cloudinary = require('cloudinary').v2;

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const uploadImage = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file, {
      upload_preset: 'club_agronomia_central',
    });
    return result;
  } catch (error) {
    console.error(error.message);
  }
};

const uploadVideo = async (file) => {
  try {
    const result = await cloudinary.uploader.upload_large(file, {
      upload_preset: 'club_agronomia_central',
      resource_type: 'video',
      chunk_size: 6000000,
    });
    return result;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { uploadImage, uploadVideo };
