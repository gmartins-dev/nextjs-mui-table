'use client';
import Search from '@/app/components/search/Search';
import Table from '@/app/components/table/Table';
import { User, getUsers } from '@/app/services/getUsers';
import { useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown | any>(null);

  getUsers(setUsers, setIsLoading, setError);

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>An error has occurred: {error.message}</p>;

  return (
    <div>
      <h1>Users Page</h1>
      <Search />
      <Table users={users} />
    </div>
  );
}
