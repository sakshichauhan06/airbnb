import './App.css';
import './style.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card';

function App(props) {
  return (
    <div className="App">
      <Header />
      {/* <Hero /> */}
      <Card 
        img = "swim.png"
        rating = {5.8}
        reviewCount = {6}
        country = "USA"
        title = "Life lessons with Katie Zaferes"
        price = {136}
      />
    </div>
  );
}

export default App;
