import { useState } from 'react';
import AddContactForm from './AddContactForm';
import Contacts from './Contacts';
import defaultContacts from "../static-data";
import '../stylesheets/App.css';

const sortAlphabetically = (contacts) => {
  return (contacts.sort((a, b) => {
    let c1 = a.name.toLowerCase();
    let c2 = b.name.toLowerCase();

    return (c1 < c2) ? -1 : (c1 > c2) ? 1 : 0;
  }))
}

function App() {
  const [contacts, setContacts] = useState(sortAlphabetically(defaultContacts));

  const onRemove = (idToRemove) => {
    let newContacts = contacts.filter((contact, i) => idToRemove !== contact.id);
    setContacts(newContacts);
  }

  const [contactId, setContactId] = useState(defaultContacts[0].id);
  const incrementID = () => setContactId(prev => prev + 1)

  const getContactId = (contact) => {
    setContactId(contact.id);
  }

  const [name, setName] = useState("");
  const handleNameChange = ({ target }) => {
    let newName = target.value;
    setName(newName);
  }

  const [email, setEmail] = useState("");
  const handleEmailChange = ({ target }) => {
    let newEmail = target.value;
    setEmail(newEmail);
  }

  const [phone, setPhone] = useState("");
  const handlePhoneChange = ({ target }) => {
    let newPhone = target.value;
    setPhone(newPhone);
  }

  const [address, setAddress] = useState("");
  const handleAddressChange = ({ target }) => {
    let newAddress = target.value;
    setAddress(newAddress);
  }

  const [city, setCity] = useState("");
  const handleCityChange = ({ target }) => {
    let newCity = target.value;
    setCity(newCity);
  }

  const [state, setState] = useState("");
  const handleStateChange = ({ target }) => {
    let newState = target.value;
    setState(newState);
  }

  const [zip, setZip] = useState("");
  const handleZipChange = ({ target }) => {
    let newZip = target.value;
    setZip(newZip);
  }

  const [onEdit, setOnEdit] = useState(false);
  const handleEditClick = (id) => {
    console.log("handle edit: " + id)
    let contactToEdit = contacts.filter((contact, i) => contact.id === id);
    setOnEdit(true)
    setName(contactToEdit[0].name);
    setEmail(contactToEdit[0].email);
    setPhone(contactToEdit[0].phone);
    setAddress(contactToEdit[0].address);
    setCity(contactToEdit[0].city);
    setState(contactToEdit[0].state);
    setZip(contactToEdit[0].zip);
  }

  const handleSubmit = (newContact) => {
    let sortContactsWithNew = sortAlphabetically([...contacts, newContact]);
    let sortContactsWithNewEdit = sortAlphabetically(contacts.map((contact, i) => contact.id === newContact.id ? contacts[i] = newContact : contact))

    onEdit ? setContacts(sortContactsWithNewEdit) : setContacts(sortContactsWithNew);
    console.log(sortContactsWithNewEdit)
    setName("")
    setEmail("")
    setPhone("")
    setAddress("")
    setCity("")
    setState("")
    setZip("")

  }

  return (
    <div className='App'>
      <main>
        <h1>Contacts</h1>
        <AddContactForm
          onSubmit={handleSubmit}
          name={name}
          email={email}
          phone={phone}
          address={address}
          city={city}
          state={state}
          zip={zip}
          onEdit={onEdit}
          id={contactId}
          incrementID={incrementID}
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          handlePhoneChange={handlePhoneChange}
          handleAddressChange={handleAddressChange}
          handleCityChange={handleCityChange}
          handleStateChange={handleStateChange}
          handleZipChange={handleZipChange}
        />
        <Contacts
          contacts={contacts}
          onRemove={onRemove}
          onEditClick={handleEditClick}
          getContactId={getContactId}
        />
      </main >
    </div>
  );
}

export default App;
