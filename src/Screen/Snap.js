import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
function Snap() {
  const location = useLocation();
  return (
    <div>
      <p>
        Capture <br /> your <br />
        {location.state.mode ? 'food' : 'fridge'}.
      </p>
    </div>
  );
}

export default Snap;
