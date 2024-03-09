const cloudinary = require('cloudinary').v2;

const cloudinaryConfig = () => {
    cloudinary.config({
        cloud_name: 'dqzgyyab3',
        api_key: '726769892967862',
        api_secret: 'gAf-CP7RAz9O-SPTJ3QDja99StM',
    })
}
    

async function handleUpload(file) {
    cloudinaryConfig();
    const res = await cloudinary.uploader.upload(file, {
    resource_type: "image",
    transformation: [
        { width: 1600, height: 900, crop: 'fill' },
        { format: 'webp' }
    ]
    });
    return res;
}

module.exports = { handleUpload };