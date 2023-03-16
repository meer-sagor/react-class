import React, { useEffect, useState } from 'react';

const person = {
  btnText: 'Button text here',
  type: 'primary',
  onClickHandler: (a, b) => a + b,
};

console.log(person.onClickHandler(5, 7));
const sum = (a, b) => a + b;

const storeSum = sum;

storeSum(5, 20);

export const Button = (props) => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => {
        console.log('error', error);
      });
  };

  useEffect(() => {
    console.log('render button component');
    if(toggle){
      fetchUsers();
    }
  }, [toggle]);

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Load User</button>
      {
        users.length ? (
          <div>
            {users.map(user => (
              <div key={user.name}>
                <h1 >{user.name}</h1>
              </div>
            ))}
          </div>
        ) : (
          <p> no user found </p>
        )
      }
    </>
  );
};
