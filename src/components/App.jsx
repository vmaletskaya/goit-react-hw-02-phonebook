import css from './App.module.css';
import { Component } from 'react';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const shortid = require('shortid');

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  removeContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };
  addContact = data => {
  const { name, number } = data;
  const existingContact = this.state.contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase() ||
                contact.number === number
  );

  if (existingContact) {
    alert(`${name} is already in contacts`);
    return;
  }

  const contact = { id: shortid.generate(), name, number };
  this.setState(({ contacts }) => ({
    contacts: [contact, ...contacts],
  }));
};

  
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter } = this.state;
    const normalizeFilter = this.state.filter.toLowerCase();
    const foundContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
    return (
      <div className={css.app}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Find contacts</h2>
        <Filter onChange={this.changeFilter} filterValue={filter} />
        <ContactList list={foundContacts} removeCard={this.removeContact} />
      </div>
    );
  }
}