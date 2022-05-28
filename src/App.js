import './App.css';
import './style.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card';
import data from './data';

function App(props) {
  const cardElements = data.map(item => {
    return (
        <Card 
              key = {item.id}
              {...item}
          />
    )
  })


  return (
    <div className="App">
      <Header />
      <Hero />
      <section className='card-list'>
        {cardElements}
      </section>
    </div>
  );
}

export default App;


