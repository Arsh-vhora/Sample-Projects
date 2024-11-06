import logo from './logo.svg';
import './App.css';
//import './components/Item';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';

function App() {
  const response = [
    {
      ItemName: "Nirma",
      ItemDate: 20,
      ItemMonth:"July",
      ItemYear:1998
    },
    {
      ItemName: "Surfxcel",
      ItemDate: 6,
      ItemMonth:"March",
      ItemYear:1990
    },
    {
      ItemName: "555",
      ItemDate: 19,
      ItemMonth:"August",
      ItemYear:1985
    }
  ]
  const ItemTwoName = "Surfxcel";
  return (
    <div>
    {/*}
      <Item name="Nirma"></Item>
      <ItemDate day="20" month="july" year="1988"></ItemDate>

      <Item name= {ItemTwoName}></Item>
      <ItemDate day="6" month="March" year="1990"></ItemDate>

      <Item name="555"></Item>
      <ItemDate day="19" month="August" year="1985"></ItemDate>
      <div className="App"> Hello jee </div>
    */}
    {/*
      <Item name= {response[0].ItemName}>
        I Like This Brand
      </Item>
      <ItemDate day= {response[0].ItemDate} month={response[0].ItemMonth} year={response[0].ItemYear}></ItemDate>

      <Item name= {response[1].ItemName}></Item>
      <ItemDate day= {response[1].ItemDate} month={response[1].ItemMonth} year={response[1].ItemYear}></ItemDate>

      <Item name= {response[2].ItemName}></Item>
      <ItemDate day= {response[2].ItemDate} month={response[2].ItemMonth} year={response[2].ItemYear}></ItemDate>
      <div className="App"> Hello jee </div>
    */}
    <Card>
      <Item name= {response[0].ItemName}>
        I Like This Brand
      </Item>
      <ItemDate day= {response[0].ItemDate} month={response[0].ItemMonth} year={response[0].ItemYear}></ItemDate>

      <Item name= {response[1].ItemName}></Item>
      <ItemDate day= {response[1].ItemDate} month={response[1].ItemMonth} year={response[1].ItemYear}></ItemDate>

      <Item name= {response[2].ItemName}></Item>
      <ItemDate day= {response[2].ItemDate} month={response[2].ItemMonth} year={response[2].ItemYear}></ItemDate>
      <div className="App"> Hello jee </div>
    </Card>
    </div>
  );
}

export default App;
