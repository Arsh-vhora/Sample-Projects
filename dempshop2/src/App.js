import logo from './logo.svg';
import './App.css';
import Product from './components/Product'
import NewProduct from './components/NewProduct';

const App = (props) => {
  const products = [
    {
      id:'p1',
      title:'Nirma',
      amount: 100,
      date: new Date(2021,8,10)
    },
    {
      id:'p2',
      title:'Surf Excel',
      amount: 200,
      date: new Date(2021,2,2)
    },
    {
      id:'p3',
      title:'Tide',
      amount: 130,
      date: new Date(2021,12,28)
    },
    {
      id:'p4',
      title:'Maggie',
      amount: 450,
      date: new Date(2021,5,5)
    }
  ]

  function printProductData(data){
    console.log("i am inside App.js")
    console.log(data);
  }
  return (
    <div>
    <NewProduct Arsh = {printProductData}/>
      <Product items = {products}/>
    </div>
  );
}
export default App;
