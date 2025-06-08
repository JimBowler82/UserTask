import { useGetUsersQuery } from "./lib/queries/user";

function App() {
  const { data: users, isPending } = useGetUsersQuery({
    page: 1,
    pageSize: 10,
  });
  if (isPending) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h3>User Task</h3>
      {users?.map((user) => (
        <div key={user.id}>
          <p>
            {user.first_name} {user.last_name} - {user.email}
          </p>
        </div>
      ))}

      {users?.length === 0 && <p>No users found.</p>}
      <p>Total Users: {users?.length}</p>
      <p>Data fetched from: http://localhost:5253/api/users</p>
      <p>Data fetched at: {new Date().toLocaleTimeString()}</p>
      <p>Data fetched on: {new Date().toLocaleDateString()}</p>
      <p>Data fetched using Axios.</p>
      <p>Data fetched using TypeScript.</p>
      <p>Data fetched using React.</p>
    </>
  );
}

export default App;
