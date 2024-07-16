import React from 'react';
import Drawe from "./altbar";
import ResponsiveDrawer from "./bar";
import Counter from "./Countbar";
import { Box } from "@mui/material";
import "./App.css"; // Assuming you have an App.css for styling

function App() {
  return (
    <div className="app">
      <ResponsiveDrawer />
      <Drawe />
      <Box className="centered-content">
        <Counter />
      </Box>
    </div>
  );
}

export default App;
