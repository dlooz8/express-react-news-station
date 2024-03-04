import { useState } from 'react';
import { Image } from 'cloudinary-react';

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState('');

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ваш_предварительный_загрузка');

    const response = await fetch('https://api.cloudinary.com/v1_1/dqzgyyab3/image/upload', {
      method: 'POST',
      body: formData
    });
    const data = await response.json();
    console.log(data.secure_url);
  }

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      {imageUrl && <Image cloudName="dqzgyyab3" publicId={imageUrl} />}
    </div>
  );
}

export default ImageUpload;