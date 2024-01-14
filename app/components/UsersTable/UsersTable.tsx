import { User } from '@/app/services/getUsers';
import { getInitials } from '@/app/utils/getInitials';
import {
  Avatar,
  Box,
  Card,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

interface UsersTableProps {
  users: User[];
}

export default function UsersTable({ users }: UsersTableProps) {
  return (
    <Card>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Signed Up</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.email}>
                <TableCell>
                  <Stack alignItems='center' direction='row' spacing={2}>
                    <Avatar className='mr-2'>{getInitials(user.name)}</Avatar>
                    <Typography variant='subtitle2'>{user.name}</Typography>
                  </Stack>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.company}</TableCell>
                <TableCell>{user.added}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
}
