import React from 'react';
import { useParams } from 'react-router-dom';

type UserDetailsParams = {
  id: string;
}

const UserDetails = () => {
  const params = useParams<UserDetailsParams>();
  // const { id } = useParams<UserDetailsParams>();
  return (
    <div>
      Details about Users {params.id}
      {/*Details about Users {id}*/}
    </div>
  );
};

export default UserDetails;