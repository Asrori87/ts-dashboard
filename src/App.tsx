import useFetch from "./hooks/useFetch";

const Dashboard = () => {
  const { data, loading, error } = useFetch("/products");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Render data dashboard */}
      {data?.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
