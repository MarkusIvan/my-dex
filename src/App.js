import logo from './logo.svg';
import './App.css';

const Header = () => {
  return <h2>Whale Swap!</h2>
}

const Field = () => {
  const holder = 'Enter here'
  const staleField = {
    width: '300px'
  }
  return <input placeholder={holder} 
                type='text' 
                style={staleField}/>
}

const Input = () => {
  const yourName = 'Enter your name'
  const styleName = {
    width: '100px'
  }
  return <input placeholder='yourName'
                type='text'
                style={styleName}
                />
}

const BtnTwo = () => {
  // const text = 'Log in'

  const login = () => {
    return 'Lon in man!'
  }
  const bool = false
  const styleBtnTwo = {
    width: '200px'
  }

  return <button style={styleBtnTwo}>{bool ? 'Welcome to me!' : login()}</button>

}

function Btn() {
  // const text = 'Connect'

  const res = () => {
    return 'Connect Wallet'
  } 
  const connect = false;

  const p = <p>Conncet</p>
  return <button>{connect ? 'Balance' : res()}</button>
}  


function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
      <Input/>
      <BtnTwo/>
    </div>
  );
}

export default App;
