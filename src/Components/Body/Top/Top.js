import React from 'react';
import {Link} from 'react-router-dom';
import "./Top.scss";
function Top() {
  return (
     <div className="Top center">
         <Link to="/Profile">Profile</Link>
         <Link to="/Graphics">Graphics</Link>
     </div>
  );
}

export default Top;