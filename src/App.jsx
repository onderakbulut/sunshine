import "./main.scss";
import HomePage from "./pages/index";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import BlogPage from "./pages/blog";
import BlogDetailPage from "./pages/blog-detail";
import AlbumsPage from "./pages/albums";
import AlbumDetailPage from "./pages/album-detail";
import Search from "./components/search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
      <Router>
        <div className="app">
          <Search/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/blog" element={<BlogPage/>}/>
            <Route path="/blog-detail" element={<BlogDetailPage/>}/>
            <Route path="/albums" element={<AlbumsPage/>}/>
            <Route path="/album-detail" element={<AlbumDetailPage/>}/>
          </Routes>
        </div>
      </Router>
    );
}

export default App;
