import { useState } from "react";
import "./App.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Switch, Route, Link } from "react-router-dom";
import { AddColor } from "./AddColor";
import { Home } from "./Home";
import { Sample } from "./Sample";

export default function App() {
  let movies = [
    {
     
      movie: "Jai Bhim",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS_iVBAztnYSkxHkYwkLMX1mi1EDYr9D5Te4yHoMZmxQ5o6Qywotjtfbg-4KC8YyjGWuc&usqp=CAU",
      rating: "9.5",
      summary: "A pregnant woman from a primitive tribal community, searches desperately for her husband, who is missing from police custody. A High Court advocate rises in support to find her husband and seek justice for them. "
    },
    {     
      movie: "Doctor",
      poster: "https://www.sify.com/uploads/Doctor_6_vkgob2afjjahj.jpeg",
      rating: " 8.5",
      summary: "A military doctor embarks on a journey to track down his former fiancee's kidnapped niece. His mission then leads him to the heart of a human trafficking ring in Goa."
    },
    {
      movie: "Raya and the last Dragon",
      poster:"https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/6879/1036879-v-0c7332475e07",
         rating: "7.5",
      summary: "Raya, a warrior, sets out to track down Sisu, a dragon, who transferred all her powers into a magical gem which is now scattered all over the kingdom of Kumandra, dividing its people."
    },
    {  
      movie: "Teddy",
      poster:"https://m.media-amazon.com/images/M/MV5BODhlYTRhNGItZGJmMi00YjJmLWE2ZWYtNjBlNzQ2NjhjODc5XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg",
      rating: "8.5",
      summary: "Srividya, a young woman, is put in a coma by corrupt doctors. However, her spirit enters a teddy bear and seeks out a lonely man named Shiva to uncover medical crimes."
    },
    {
    movie: "Master",
      poster:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRfPemKBxZs8dFE4Z0Yib0i9fEiUVriLxqHj0JHsD6ICvSwLgEV",
      rating: "7.5",
      summary: "John Durairaj, an alcoholic professor, gets enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes."
    }
  ];
  const [movie,setMovie]=useState("");
   const [poster,setPoster]=useState("");
   const [rating,setRating]=useState("");
   const [summary,setSummary]=useState("");
   const [movieList,setMovieList]=useState(movies);
 return (
   <div>
  <li>
          {/* Change the url bar but dont refresh */}
          <Link to="/home">home</Link>
          </li>
          <li>  
            <Link to="/MovieList">MovieList</Link> 
        </li>
        <li>
          <Link to="/addcolor">AddColor</Link>
        </li>
        <Switch>

<Route path="/Movielist">
<div className="data">
    <h1 className="movie">Movie details</h1>
    <div className="adddata">
    <TextField value={movie}  label="movie name" onChange={(val)=>setMovie(val.target.value)}/> <br/>
    <TextField value={poster}   label="poster"  onChange={(val)=>setPoster(val.target.value)}/> <br/>
     <TextField value={rating}   label="ratings"  onChange={(val)=>setRating(val.target.value)}/> <br/> 
        <TextField value={summary}  label="summary" onChange={(val)=>setSummary(val.target.value)}/> <br/>
      
        <Button variant="contained" onClick={()=>{
        const newMovie ={
          movie: movie,
          poster:poster,
          rating:rating,
          summary:summary,
        };
         setMovieList([...movieList,newMovie]);
        }
      }
      >
      Add Movie

        </Button>
        <br/>
     
        </div>
  {/* <Routing/> */}
{/* <AddColor/> */}
  
       
      
    <div className="container">
      {movieList.map(({ movie, poster, rating, summary }) => (
        <Sample name={movie} url={poster} star={rating} sum={summary} />
      ))}
      {/* <GetData/> */}
      {/* <Counter/> */}
    </div>

    </div>
</Route>
<Route path="/home">
  <Home />
  </Route>
 
<Route path="/addcolor">
  <AddColor/>
</Route>

</Switch>
 
</div>
  );
}
