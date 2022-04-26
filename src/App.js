import "./App.css";
import movies from "./movies.json";
import Section from "./Section";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <img src={logo} className="logo" alt="netflix logo" />
      {movies.map((movie, index) => {
        // console.log(movies);
        return (
          <>
            <Section categorys={movie} key={movie.category} />
          </>
        );
      })}
    </div>
  );
}

export default App;
