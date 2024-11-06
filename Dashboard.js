const Dashboard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://dummyapi.online/api/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the movies!', error);
      });
  }, []);

  return (
    <div>
      <h2>Movie Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Movie Name</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.moviename}</td>
              <td>{movie.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};