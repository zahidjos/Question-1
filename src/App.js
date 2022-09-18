import logo from './logo.svg';
import './App.css';
import Information from './component/Information/Information';

function App() {
  const data=[{
    name:"Zahid",
    email:"zahidhasanjos90@gmail.com",
    number:"01785478384"
    },
    {
      name:"Joy",
      email:"sohanur@gmail.com",
      number:"01743698155"
      },
      {
        name:"Emon",
        email:"arobiemon@gmail.com",
        number:"01768445468"
        },
        {
          name:"Sanoar",
          email:"sanoar180@gmail.com",
          number:"01685478384"
          }]
  return (
    <div className="App">
     {data.map((singleData, index)=><Information key={index} singleData={singleData} ></Information>)}
    </div>
  );
}

export default App;
