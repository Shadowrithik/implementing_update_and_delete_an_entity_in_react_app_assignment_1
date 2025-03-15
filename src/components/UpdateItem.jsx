import { useState } from "react";

const UpdateItem = ({ item, API_URI }) => {
  // 1. Create state for form input and messages
  const [updatedValue, setUpdatedValue] = useState(item?.name || "");
  const [message, setMessage] = useState("");

  // 2. Handle input changes
  const handleChange = (e) => {
    setUpdatedValue(e.target.value);
  };

  // 3. Handle form submission
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URI}/${item.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: updatedValue }),
      });

      if (!response.ok) throw new Error("Failed to update item");

      setMessage("Item updated successfully!");
    } catch (error) {
      console.error("Error updating item:", error);
      setMessage("Error updating item. Please try again.");
    }
  };

  return (
    <div>
      <h2>Update Item</h2>
      <form onSubmit={handleUpdate}>
        <label>
          Name:
          <input type="text" value={updatedValue} onChange={handleChange} />
        </label>
        <button type="submit">Update</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateItem;
