import { Component } from "react";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";

import { Div, H1, H2, P } from "./App.styled";

const LS_KEY = 'contacts_save';

export class App extends Component {

  state = {
    contacts: [],
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
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

  return filteredContacts; 
  };

  deleteContacts = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    if (localStorage.length === 0) {
      return this.state;
    }
    
    this.setState({
      contacts: JSON.parse(localStorage.getItem(LS_KEY))
    });
  }

  componentDidUpdate() {
    localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts)
    ); 
  }

  render() {
    const { filter } = this.state;
    const onHandleSubmit = this.handleSubmit;
    const onChangeFilter = this.changeFilter;
    const onFilteredContacts = this.filteredContacts();
    const onDeleteContacts = this.deleteContacts;
    const contactsListIsVisible = this.state.contacts.length;

  return (
    <Div>
      <H1>Phonebook</H1>
      <ContactForm onSubmit={onHandleSubmit}/>
      <H2>Contacts</H2>
      <Filter value={filter} onChange={onChangeFilter}/>
      {contactsListIsVisible !== 0 ? 
      <ContactList contacts={onFilteredContacts} onDeleteContact={onDeleteContacts} /> : 
      <P>There are no saved contacts!</P>}
    </Div>
  );
  }
};
