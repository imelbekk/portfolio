import React from "react";
import Navbar from "./Components/navbar/navbar";
import styles from "../src/ui/app/app.module.css";
import { Route, Routes } from "react-router-dom";
import Projects from "./Components/projects/projects";
import Home from "./Components/home/home";
import Education from "./Components/education/education";

export default function App() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <Navbar />
      </nav>
     <div>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/education" element={<Education/>}/>
      </Routes>
     </div>
    </div>
  );
}
