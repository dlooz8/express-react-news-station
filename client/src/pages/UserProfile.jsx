import { useEffect, useState } from 'react';
import axios from 'axios';

function UserProfile() {


  const [user, setUser] = useState([]);

  const test = async () => {
    try {
      const response = await axios.get('/profile');
      setUser(response.data);
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <div className='text-center text-3xl'>{ user.name }</div>
  )
}

export default UserProfile