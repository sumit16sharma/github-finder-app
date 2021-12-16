import React, { useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';

const UserResults = () => {
  const { loading, fetchUsers, users } = useContext(GithubContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user, index) => (
          <UserItem key={index} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default UserResults;
