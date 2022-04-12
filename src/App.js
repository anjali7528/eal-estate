import Navbar from "./components/Navbar";
import GlobalStyle from "./GlobalStyles";
import Hero from "./components/Hero";
import {SliderData} from './Data/SliderData';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
    <Navbar/>
    <Hero slides={SliderData}/>
    </div>
  );
}

export default App;
