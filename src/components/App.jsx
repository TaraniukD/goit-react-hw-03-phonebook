import { Component } from "react";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";

import { Div, H1, H2 } from "./App.styled";

export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    ],
    filter: '',
  }

  handleSubmit = data => {
   this.setState(({contacts}) => 
   contacts.find(contact => contact.name === data.name)
    ? alert(`${data.name} is already in contacts`)
     : { contacts: [...contacts, data]});
  };

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value});
  };
  
  filteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

  return (contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),
  )) 
  };

  deleteContacts = ( contactId ) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const onHandleSubmit = this.handleSubmit;
    const onChangeFilter = this.changeFilter;
    const onFilteredContacts = this.filteredContacts();
    const onDeleteContacts = this.deleteContacts;

  return (
    <Div>
      <H1>Phonebook</H1>
      <ContactForm onSubmit={onHandleSubmit}/>
      <H2>Contacts</H2>
      <Filter value={filter} onChange={onChangeFilter}/>
      <ContactList contacts={onFilteredContacts} onDeleteContact={onDeleteContacts}/>
    </Div>
  );
  }
};
