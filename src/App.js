import React,{useState} from 'react';
import './App.css';
import Shop from './e-comm/shop';
import Display from './e-comm/Display';

function App() {
  const[usersList, setUsersList] =useState([]);
  const dataHandler = (PID,PPrice,PName,PCategory) => {
    setUsersList((prevData) => {
      return [
        ...prevData,{
          id: PID,
          name: PName,
          price: PPrice,
          category: PCategory,
          key: Math.random().toString(),

        },
      ];
    });
  };

  const deleteProduct = (productId) => {
    setUsersList(usersList.filter((product)=> product.id !== productId));
  };
  return (
    <div className='App'>
    
     <Shop onSaveData={dataHandler}/>
     <Display users={usersList} onDeleteProduct={deleteProduct}
      />
    </div>
   
  );
}

export default App;
