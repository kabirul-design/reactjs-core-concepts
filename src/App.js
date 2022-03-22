import logo from './logo.svg';
import './App.css';

const nayoks = ['manna', 'razzak', 'rubel', 'eleash kanchon'];
const nayoks1 = [
  {name: 'peter shyamol', job:'Maasranga Television'},
  {name: 'abu bakar Siddiqui', job: 'Maasranga TeleVison'}, 
  {name : 'Mehedi Hasan', job: 'Cameraman'}

];

function App() {
  return (
    <div className='app'>
      {
        nayoks.map(nayok => <li>Name : {nayok}</li>)
      }
      {/* {
       nayoks.map(nayok => <Person name={nayok}></Person>) 
      } */}
      {
        nayoks1.map(nayok => <Person name={nayok.name}></Person>)
      }
      
      {/* <Person name={nayoks[0]}></Person>
      <Person name={nayoks[1]}></Person>
      <Person name={nayoks[2]}></Person> */}
       <Person name={nayoks[3]} nayka="dithi"></Person>
       <h5>How Are Yoy React </h5>
       <Friend name="Tareq Jamil" home="Khulna"></Friend>
       <Friend name="Elesh" home="Bramon Bariya"></Friend>
       <Friend name="Hasan" home="Khulna"></Friend>
    </div>
  )
}

function Person(props){
  console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>Nayka : {props.nayka}</p>
    </div>
  );
}

function Friend(props){
  console.log(props);
  return(
    <div className='person'>
      <h3>{props.name}</h3>
      <p>Home District : {props.home}</p>
    </div>
  );
}

export default App;
