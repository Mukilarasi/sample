import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovie({ movieList, setMovieList }) {
  const [movie, setMovie] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  //  const [movieList,setMovieList]=useState(movies);
  return (
    <>
      <div className="data">
        <h1 className="movie">Movie details</h1>
        <div className="adddata">
          <TextField value={movie} label="movie name" onChange={(val) => setMovie(val.target.value)} /> <br />
          <TextField value={poster} label="poster" onChange={(val) => setPoster(val.target.value)} /> <br />
          <TextField value={rating} label="ratings" onChange={(val) => setRating(val.target.value)} /> <br />
          <TextField value={summary} label="summary" onChange={(val) => setSummary(val.target.value)} /> <br />

          <Button variant="contained" onClick={() => {
            const newMovie = {
              movie: movie,
              poster: poster,
              rating: rating,
              summary: summary,
            };
            setMovieList([...movieList, newMovie]);
          }}
          >
            Add Movie

          </Button>
          <br />

        </div>
        {/* <Routing/> */}
        {/* <AddColor/> */}


        
        {/* <GetData/> */}
        {/* <Counter/> */}
        

      </div>

    </>
  );
}
