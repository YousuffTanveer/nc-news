import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Articles from "./Components/Articles";
import SinlgeArticle from "./Components/SingleArticle";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/:articleId" element={<SinlgeArticle />} />
        <Route path="/topic/:topic_slug" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
