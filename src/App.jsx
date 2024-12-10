import { useState } from 'react'
// import './App.css'
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./index.css"; // Cambiado "Index.css" por "index.css" (minúsculas)

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
    </>
  );
}

export default App;
