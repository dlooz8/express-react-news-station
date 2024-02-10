import { useEffect, useState } from 'react';
import axios from 'axios';

function UserProfile() {


  const [user, setUser] = useState([]);

  const test = async () => {
    try {
      // console.log('FETCHING');
      const response = await axios.get('http://localhost:3033/users');
      setUser(response.data[0].name);
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <div className='text-center text-3xl'>{ user }</div>
  )
}

export default UserProfile