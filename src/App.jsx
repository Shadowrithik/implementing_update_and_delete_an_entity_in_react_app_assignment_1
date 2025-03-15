import { useState, useEffect } from "react";
import UpdateItem from "./components/UpdateItem";

const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URI}/1`) 
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching item:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Update Door</h1>
      {loading ? <p>Loading...</p> : <UpdateItem item={item} API_URI={API_URI} />}
    </div>
  );
}

export default App;
