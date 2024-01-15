'use client';
import { User } from '@/app/services/getUsers';
import { getInitials } from '@/app/utils/getInitials';
import { getComparator } from '@/app/utils/getSort';
import {
  Avatar,
  Box,
  Button,
  Card,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

interface UsersTableProps {
  users: User[];
  onAddUser: (newUser: User) => void;
  onDeleteUser: (email: string) => void;
}

export default function UsersTable({
  users,
  onAddUser,
  onDeleteUser,
}: UsersTableProps) {
  const [newUser, setNewUser] = useState<User>({
    name: '',
    email: '',
    company: '',
    added: '',
  });

  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState<keyof User | ''>('');

  const sortedUsers = [...users].sort(
    getComparator(order, orderBy as keyof User),
  );

  const createSortHandler =
    (property: keyof User) => (event: React.MouseEvent<unknown>) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };

  const addUser = () => {
    const userToAdd = {
      ...newUser,
      added: new Date().toISOString().split('T')[0],
    };
    onAddUser(userToAdd);
    setNewUser({ name: '', email: '', company: '', added: '' });
  };

  return (
    <Card>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'name'}
                  direction={order}
                  onClick={createSortHandler('name')}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'email'}
                  direction={order}
                  onClick={createSortHandler('email')}
                >
                  Email
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'company'}
                  direction={order}
                  onClick={createSortHandler('company')}
                >
                  Company
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'added'}
                  direction={order}
                  onClick={createSortHandler('added')}
                >
                  Signed Up
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedUsers.map((user, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Stack alignItems='center' direction='row' spacing={2}>
                    <Avatar className='mr-2'>{getInitials(user.name)}</Avatar>
                    <Typography variant='subtitle2'>{user.name}</Typography>
                  </Stack>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.company}</TableCell>
                <TableCell>{user.added}</TableCell>
                <TableCell>
                  <Button
                    variant='contained'
                    color='secondary'
                    onClick={() => onDeleteUser(user.email)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>
                <TextField
                  id='name'
                  label='Name'
                  variant='outlined'
                  value={newUser.name}
                  onChange={(e) =>
                    setNewUser({ ...newUser, name: e.target.value })
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  id='email'
                  label='Email'
                  variant='outlined'
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  id='company'
                  label='Company'
                  variant='outlined'
                  value={newUser.company}
                  onChange={(e) =>
                    setNewUser({ ...newUser, company: e.target.value })
                  }
                />
              </TableCell>
              <TableCell></TableCell>
              <TableCell>
                <Button variant='contained' color='primary' onClick={addUser}>
                  Add User
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
}
