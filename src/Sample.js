import { useState } from "react";
import Rating from '@mui/material/Rating';
import { Counter } from "./Counter";
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
export function Sample({ name, url, star, sum ,deleteButton}) {
  // conditional styling
  const styles = { color: star >= 8.5 ? "teal" : "red" };
  const [show, setShow] = useState(true);
  // const toggler =()=>{
  //   show ? setShow(false):setShow(true);
  // }
  return ( 
    // <div>
      <Card className="card">
        {/* <Card className="movie-container">  */}
        <CardContent>
        <img className="img-cls"src={url} alt={name} />
        <div className="movie-details">
          <h3><span className="mo">movie:</span>{name}</h3>
          <Rating name="customized-10" defaultValue={2} max={10} />
          <IconButton color="primary" aria-label="delete" onClick={() => setShow(!show)}>
          {show? <ExpandLessIcon/>:<ExpandMoreIcon/>}
          </IconButton>
          {show ? <h3>{sum}</h3> : false}
          </div>
          </CardContent>
          <CardActions>
          <div className="like-button">
          <Counter />
          {deleteButton}
          </div>
          </CardActions>
          
        {/* </div>
      </div> */}

   
     </Card>

  );
}
