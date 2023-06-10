import React from "react";
import { Route, Routes} from "react-router-dom";
import "./App.css"
import Home from "./Components/Home.js";
import 'bootstrap/dist/css/bootstrap.css';
import UserProvider from "./UserProvider.js";
import ListBook from "./Components/tables/Listbook";
import Editbook from "./Components/forms/Editbook";
import Addbook from "./Components/forms/Addbook";

const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  exact path="/view" element={
            <ListBook
            />}/>
        <Route exact path="/edit" element={
            <Editbook/>
            }/>
        <Route exact path="/add" element={
            <Addbook/>
            }/>
      </Routes>
    </UserProvider>
  );
};

export default App;