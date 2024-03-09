const cloudinary = require('cloudinary').v2;

const cloudinaryConfig = () => config({
    cloud_name: 'dqzgyyab3',
    api_key: '726769892967862',
    api_secret: 'gAf-CP7RAz9O-SPTJ3QDja99StM',
});

async function handleUpload(file) {
    const res = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });
    return res;
  }