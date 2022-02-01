import { useState } from "react";
// import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { Counter } from "./Counter";
import IconButton from '@mui/material/IconButton';
// import { IconButton } from '@mui/material';
// import IconButton from '@material-ui/core/IconButton'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export function Sample({ name, url, star, sum }) {
  // conditional styling
  const styles = { color: star >= 8.5 ? "teal" : "red" };
  const [show, setShow] = useState(false);
  // const toggler =()=>{
  //   show ? setShow(false):setShow(true);
  // }
  return (
    <div>
      <div className="card">
        <img src={url} alt={name} />
        <div className="movie-details">
          <h3><span className="mo">movie:</span>{name}</h3>
          <Rating name="customized-10" defaultValue={2} max={10} />
          <IconButton color="primary" aria-label="delete" onClick={() => setShow(!show)}>
          {show? <ExpandLessIcon/>:<ExpandMoreIcon/>}
          </IconButton>
          {show ? <h3>{sum}</h3> : false}
          <Counter />

        </div>
      </div>

    </div>
  );
}
