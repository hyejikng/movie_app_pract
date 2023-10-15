import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  //   console.log(id);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setDetails(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  //객체구조분해
  // const x = useParams();
  // console.log(x); / {id: 1111}
  // const {id}  = useParmas();
  // console.log(id); /1111
  return (
    <div>
      <h1>Detail</h1>
      <h2>{details.year}</h2>
    </div>
  );
}
export default Detail;
