import { User } from '@/app/services/getUsers';
interface TableProps {
  users: User[];
}

export default function Table({ users }: TableProps) {
  return (
    <div>
      <p>Table Component</p>
      <ul>
        {users.map((user) => (
          <li key={user.email}>
            {user.name} ({user.email}) - {user.company} - {user.added}
          </li>
        ))}
      </ul>
    </div>
  );
}
