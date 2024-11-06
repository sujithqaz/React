const AddMovie = () => {
  return (
    <div>
      <h2>Add Movie</h2>
      <form>
        <div>
          <label>Movie Name:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Movie Description:</label>
          <textarea required></textarea>
        </div>
        <div>
          <label>Movie Rating:</label>
          <input type="number" min="0" max="10" required />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};