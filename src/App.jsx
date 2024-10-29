import { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import "./App.css";

function App() {
  const [contactList, setContactList] = useState([]);

  const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    const getContacts = async() => {
      const response = await fetch(`${BASE_URL}`);
      const allContacts= await response.json();
      setContactList(allContacts);
    }
    getContacts();
  }, []);

  return (
    <>
      <ContactList contactList={contactList} />
    </>
  )
}

export default App
