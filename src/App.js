import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import './App.css';
import Form from './components/form/Form'
import ContactTable from './components/table/ContactTable'
import {AddUser, UpdateUser} from './utils/functions'

const initialValues={username:'', phoneNumber:'', gender:'No'}

const App = () => {

  const [info, setInfo]=useState(initialValues);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("app js deki:", info);

    if(info.id){
      UpdateUser(info)
    }
    else{
      AddUser(info);
    }
    setInfo(initialValues)
  };

 const EditUser = (id, username, phoneNumber, gender) => {
   setInfo({ id, username, phoneNumber, gender });
   console.log('merhaba');
 };
  return (
    <div className="App">
      <Form info={info} setInfo={setInfo} handleSubmit={handleSubmit} />
      <ContactTable EditUser={EditUser}/>
      <ToastContainer/>
    </div>
  );
}

export default App