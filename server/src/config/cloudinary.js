const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv').config();

const cloudinaryConfig = () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    })
}

async function handleUpload(file) {
    cloudinaryConfig();
    const response = await cloudinary.uploader.upload(file, {
    resource_type: "image",
    transformation: [
        { width: 1600, height: 900, crop: 'fill' },
        { format: 'webp' }
    ]
    });
    return response;
}

async function handleDelete(url) {
    cloudinaryConfig();
    const imageName = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.'));
    const imageId = imageName.split('_').pop();
    const response = await cloudinary.uploader.destroy(imageId);
    return response;
}

module.exports = { 
    handleUpload, 
    handleDelete 
};