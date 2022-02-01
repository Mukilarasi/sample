import { useState } from "react";
import Badge from '@mui/material/Badge';
import { IconButton } from '@mui/material';
// import  IconButton  from '@mui/material/IconButton';

export function Counter() {
  // let like=0;
  // console.log(like)
  const [like, setLike] = useState(10);
  const [dislike, setDislike] = useState(10);
  return (
    <div className="btn"><IconButton variant="contained" onClick={() => setLike(like + 1)}>
      <Badge badgeContent={like} color="primary">

        👍
      </Badge>
    </IconButton>
      {/* <button onClick={()=>setDislike(dislike+1)}>{dislike}</button> */}
      <IconButton variant="contained" color="error" onClick={() => setDislike(dislike + 1)}>
        <Badge badgeContent={dislike} color="error">👎</Badge>

      </IconButton>
      {/* <h3>{like}</h3>
         <h3>{like}</h3>
         <h3>{like}</h3>
         <h3>{like}</h3> */}
    </div>
  );
}
