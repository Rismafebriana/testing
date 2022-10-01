import { Route, Routes } from "react-router-dom";
import PostPage from "./components/PostPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;