import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import MovieCard from "./components/MovieCard/MovieCard";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <div class="banner"></div>
        <div class="movie_list">
          <MovieCard />
          <MovieCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
