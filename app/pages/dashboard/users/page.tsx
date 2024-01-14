'use client';
import Search from '@/app/components/Search/Search';
import UsersTable from '@/app/components/UsersTable/UsersTable';

import { User, getUsers } from '@/app/services/getUsers';
import { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown | any>(null);

  useEffect(() => {
    getUsers(setUsers, setIsLoading, setError);
  }, []);

  const addUser = (newUser: User) => {
    const userToAdd = { ...newUser, added: new Date().toISOString() };
    console.log('Adding user:', userToAdd);
    setUsers((prevUsers: User[]) => {
      console.log('Current users:', prevUsers);
      const updatedUsers = [...prevUsers, userToAdd];
      console.log('Updated users:', updatedUsers);
      return updatedUsers;
    });
  };

  const deleteUser = (index: number) => {
    setUsers((prevUsers) => prevUsers.filter((user, i) => i !== index));
  };

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>An error has occurred: {error.message}</p>;

  return (
    <div>
      <h1>Users Page</h1>
      <Search />
      <UsersTable users={users} addUser={addUser} deleteUser={deleteUser} />
    </div>
  );
}
