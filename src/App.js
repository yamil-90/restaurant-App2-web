import React from "react";
import { Routes, Route } from "react-router";

import Orders from "./css/components/pages/Orders";

function App() {
  return (
    <div>
      <Routes>
        {/* we add the component so it returns the content */}
        <Route path="/" element={<Orders/>} />
        <Route path="/" element={<Orders/>} />
        <Route path="/" element={<Orders/>} />
        <Route path="/" element={<Orders/>} />
        <Route path="/" element={<Orders/>} />
        <Route path="/" element={<Orders/>} />
      </Routes>
    </div>
  );
}

export default App;
