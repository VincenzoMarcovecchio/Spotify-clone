import React from 'react';
import './login.css';
import { accessUrl } from './spotify';
export default function Login() {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify"
      />
      <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}
