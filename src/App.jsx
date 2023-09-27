import { useState } from 'react'
import './App.css'
import AddRandomContact from './components/AddRandomContact'
import Contacts from './components/Contacts'
import contactsJSON from './contacts.json'

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5))
  const [isSortedByName, setIsSortedByName] = useState(false)
  const [isSortedByPopularity, setIsSortedByPopularity] = useState(false)

  const addRandomContact = () => {
    const remainingContacts = contactsJSON.filter(
      currentContactJSON =>
        !contacts.some(currentContact => currentContact.id === currentContactJSON.id)
    )
    console.log(remainingContacts)
    const newContact = remainingContacts[Math.round(Math.random() * (remainingContacts.length - 1))]
    if (newContact) {
      setContacts([...contacts, newContact])
    }
  }

  const removeContact = contactId => {
    setContacts(contacts.filter(currentContact => currentContact.id !== contactId))
  }

  return (
    <div className='App'>
      <h1>LAB | React IronContacts</h1>
      <AddRandomContact addRandomContact={addRandomContact} />
      <button
        type='button'
        onClick={() => {
          if (isSortedByPopularity) {
            setIsSortedByPopularity(false)
          }
          setIsSortedByName(!isSortedByName)
        }}
      >
        Sort by Name
      </button>
      <button
        type='button'
        onClick={() => {
          if (isSortedByName) {
            setIsSortedByName(false)
          }
          setIsSortedByPopularity(!isSortedByPopularity)
        }}
      >
        Sort by Popularity
      </button>
      <Contacts
        contacts={contacts}
        isSortedByName={isSortedByName}
        isSortedByPopularity={isSortedByPopularity}
        removeContact={removeContact}
      />
    </div>
  )
}

export default App
