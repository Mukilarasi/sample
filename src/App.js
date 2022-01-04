import { useState } from "react";
import "./App.css";


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
  return (
    <div className="container">
      {movies.map(({ movie, poster, rating, summary }) => (
        <Sample name={movie} url={poster} star={rating} sum={summary} />
        
      ))}
      {/* <Counter/> */}
    </div>
  );
}
function Counter(){
  // let like=0;
  // console.log(like)
  const[like, setLike]=useState(10);
  const[dislike,setDislike]=useState(10);
  return(
    <div className="btn"><button onClick={()=>setLike(like + 1)}>👍{like}</button>
    <button onClick={()=>setDislike(dislike+1)}>👎{dislike}</button>
    {/* <h3><button onClick={()=>setShow(!show)}className="sum">summary:</button></h3> */}
         
    
    {/* <h3>{like}</h3>
    <h3>{like}</h3>
    <h3>{like}</h3>
    <h3>{like}</h3> */}
    </div>
  )
}
// function Clicked({

// })
function Sample({ name, url, star, sum }) {
  const styles ={color: star>=8.5? "teal":"red"};
  const[show,setShow]=useState(false);
  return (
    <div>
        <div className="card">
        <img src={url} alt={name} />
        <div className="movie-details">
          <h3><span className="mo">movie:</span>{name}</h3>
          <h3 style={styles}><span className="rat">rating:</span> {star}</h3>
          <Counter/>
          <button onClick={()=>setShow(!show)}>Summary</button>
         {show?<h3>{sum}</h3>:null}
          
          </div>
        </div>
      </div>
  );
}
// export default App;
