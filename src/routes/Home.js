import { useState, useEffect } from 'react';
import Movie from '../components/Movie';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  // 내 component가 시작할 때만 어떠한 코드를 딱 한 번 실행시키고 싶다. =>useEffect
  useEffect(() => {
    getMovies();
  }, []);

  //   useEffect(() => {
  //     fetch(
  //       `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
  //     )
  //       .then((response) => response.json())
  //       .then((json) => {
  //         // console.log(movies);
  //         setMovies(json.data.movies);
  //         setLoading(false);
  //       });
  //   }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((item) => (
            <Movie
              key={item.id}
              id={item.id}
              coverImg={item.medium_cover_image}
              title={item.title}
              summary={item.summary}
              genres={item.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
