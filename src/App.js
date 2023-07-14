import { v4 as uuidv4 } from 'uuid';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail';
import Header from './components/Header';
import React, { useState, useEffect} from 'react';
import { BrowserRouter , Route , Routes} from "react-router-dom";
import api from "./api/contacts";
import Navbar from './components/Navbar';


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  // Retrive Contacts
  const retriveContacts = async()=>{
    const response = await api.get("/contacts");
    return response.data;
  }

  const addContactHandler = async (contact) => {
    const request={
      id: uuidv4(),
      ...contact
    }
    const response = await api.post("/contacts", request)
    setContacts([...contacts, response.data]);
    // console.log(contact);
  };

  const updateContactHandler = async(contact)=>{
    const response = await api.put(`/contacts/${contact.id}`, contact)
  };

  const removeContactHandler = async(id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts)
    setContacts(retriveContacts);
  }, [])

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));

    const getAllContacts = async()=>{
      const allContacts = await retriveContacts();
      if(allContacts){
        setContacts(allContacts);
      }
    };
    getAllContacts();
  }, [contacts])

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Header />
        <div className=' ui container'>
          
        <Routes>
          <Route exact path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler} />}></Route>
          <Route exact path="/add-contact" element={<AddContact addContactHandler = {addContactHandler} />}></Route>
          <Route exact path='/contact/:id' element={<ContactDetail />}></Route>
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
