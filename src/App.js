import React from "react";
import { Routes, Route } from "react-router";

import Orders from "./components/pages/Orders";
import Menu from "./components/pages/Menu";
import NewDish from "./components/pages/NewDish";
import Sidebar from "./components/ui/Sidebar";

function App() {
  return (
    //when we are in a medium size apply flex
    <div className="md:flex min-h-screen">
      <Sidebar />
      <div className='md:w-3/5 xl:w-4/5 p-6'>

        <Routes >
          {/* we add the component so it returns the content */}
          <Route path="/" element={<Orders />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/newdish" element={<NewDish />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
