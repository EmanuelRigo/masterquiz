import { useState } from "react";
import AppRouter from "./components/AppRouter";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./questionsDB.json";

function App() {
  console.log(data);

  return (
    <div className="App">
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
