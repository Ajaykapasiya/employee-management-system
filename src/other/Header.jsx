import React, { useState, useEffect } from 'react';

const Header = ({ data, changeUser }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (!data) {
      setUserName('Admin');
    } else {
      setUserName(data.firstname);
    }
  }, [data]);

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    changeUser('');
  };

  return (
    <div className='flex items-end justify-between '>
      <h1 className='text-2xl px-8 py-3 font-medium'>
        Hello <br /> <span className='text-3xl font-semibold'>{userName}</span> 👋🏻
      </h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-lg'>
        Log out
      </button>
    </div>
  );
};

export default Header;