export interface User {
  name: string;
  email: string;
  company: string;
  added: string;
}

export async function getUsers(
  setUsers: (users: User[]) => void,
  setIsLoading: (isLoading: boolean) => void,
  setError: (error: any) => void,
): Promise<void> {
  const apiUrl = 'https://zglinski.com/trex/users.json';
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: User[] = await response.json();
    setUsers(data);
    setIsLoading(false);
  } catch (error) {
    setError(error);
    setIsLoading(false);
  }
}
