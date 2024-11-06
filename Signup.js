const Signup = () => {
  return (
    <div>
      <h2>Signup</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="tel" required />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};