'use client';
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

  const handleAddUser = (newUser: User) => {
    setUsers((prevUsers: User[]) => [...prevUsers, newUser]);
  };

  const handleDeleteUser = (email: string) => {
    setUsers((prevUsers: User[]) =>
      prevUsers.filter((user) => user.email !== email),
    );
  };

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>An error has occurred: {error.message}</p>;

  return (
    <UsersTable
      users={users}
      onAddUser={handleAddUser}
      onDeleteUser={handleDeleteUser}
    />
  );
}
