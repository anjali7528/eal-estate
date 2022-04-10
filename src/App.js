import Navbar from "./components/Navbar";
import GlobalStyle from "./GlobalStyles";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
    <Navbar/>
    <Hero />
    </div>
  );
}

export default App;
