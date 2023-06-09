import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";

import { ThemeContext } from "./Context/ThemeContext";
import Home from "./pages/Home";
// import ThemeContext from './Context/ThemeContext'
//export const ThemeContext = createContext('dark');

function App() {

  const [theme, setTheme] = useState("light");
  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} ${theme == "dark" ? "bg-[#121212]" : null}`}>
        <Header />
        <Home/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
