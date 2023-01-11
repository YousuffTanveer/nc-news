import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Articles from "./Components/Articles";
import SinlgeArticle from "./Components/SingleArticle";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Nav /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Articles />} />
          {/* <Route path="/article/:article_id" element={<SinlgeArticle />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
