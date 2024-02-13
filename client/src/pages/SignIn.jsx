import { useState } from 'react';
import axios from 'axios';

function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  return (
    <div className="flex justify-center">
      <h2>Sign In</h2>
      <form >
        <label>
          Username:
          <input type="text" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;