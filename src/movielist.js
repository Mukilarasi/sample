import { Sample } from "./Sample";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
export function MovieList({ movieList,setMovieList }) {
    return(
  <div className="container">
    {movieList.map(({ movie, poster, rating, summary },index) => (
      <Sample name={movie} url={poster} star={rating} sum={summary} 
    // {/* <GetData/> */}
    // {/* <Counter/> */}
    deleteButton = {
        <IconButton aria-label="delete" color="error" onClick={()=>{
            console.log(index)
            const copyMovieList=[...movieList];
            copyMovieList.splice(index,1);
            setMovieList(copyMovieList);
        }}
        >
      

        {/* </button> */}
        <DeleteIcon />
        </IconButton>
    }id={index}
    />
    ))}
  </div> 
    );
}