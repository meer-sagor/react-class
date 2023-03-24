import { useState, useEffect, useMemo, useRef, createContext } from 'react';
import { Button } from './Button';
import { Card } from './Card';

export const userContext = createContext(null);
export const sumContext = createContext(null);
const App = () => {
  // useState
  const [user, setUser] = useState({ username: 'meer', age: 20 });

  const [sum, setSum] = useState(100);

  // const buttonEl = useRef();

  // useMemo
  // const userState = useMemo(() => {
  //   return {
  //     userName: 'meer',
  //   };
  // }, [user]);

  // const clickMeHandler = () => {
  //   setUser((preState) => {
  //     return {
  //       ...preState,
  //       username: 'Meer Sagor',
  //     };
  //   });
  //   buttonEl.current.style.color= 'red'
  // };

  // const featchUser = ()=>{
  //   setUser((preState) => {
  //     return {
  //       ...preState,
  //       username: 'Meer Sagor',
  //     };
  //   });
  // }

  // useEffect
  // useEffect(() => {
  //   // APi Call
  //   featchUser()
  //   console.log('render');
  //   return () => {
  //     console.log('clean cash');
  //     setUser({})
  //   };
  // }, [user]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Hooks </h1>
      </header>
      <userContext.Provider value={user}>
        <sumContext.Provider value={sum}>
          <Button />
          <Card />
        </sumContext.Provider>
      </userContext.Provider>
    </div>
  );
};

export default App;
