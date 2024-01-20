import './App.css';
import Card from './components/Card';
import themeCard from '../src/components/themeCard.module.css'


import data from './data.json';

function App() {
  return (

    <div className="cards">
      <Card theme={themeCard.cardGreen} name={data.tariffs[0].name} price={data.tariffs[0].price} speed={data.tariffs[0].speed} comment={data.tariffs[0].comment}></Card>
      <Card theme={themeCard.cardRed} name={data.tariffs[1].name} price={data.tariffs[1].price} speed={data.tariffs[1].speed} comment={data.tariffs[1].comment}></Card>
      <Card theme={themeCard.cardYellow} name={data.tariffs[2].name} price={data.tariffs[2].price} speed={data.tariffs[2].speed} comment={data.tariffs[2].comment}></Card>
      <Card theme={themeCard.cardBlue} name={data.tariffs[3].name} price={data.tariffs[3].price} speed={data.tariffs[3].speed} comment={data.tariffs[3].comment}></Card>

    </div >
  );
}

export default App;
