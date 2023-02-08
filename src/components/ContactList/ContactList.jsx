import React from "react";
import PropTypes from "prop-types";

import { ListUl, ListLi, Span, ListP, Button } from "./ContactsList.styled";

export const ContactList = ({contacts, onDeleteContact}) => {
    return (
        <ListUl>
            { 
            contacts.map(({id, name, number}) => {
                return (
                    <ListLi key={id}>
                    <Span>{name}:</Span> 
                    <ListP>{number}</ListP>
                    <Button type='button' onClick={() => onDeleteContact(id)}>Delete</Button>
                    </ListLi>
                )
            })}
        </ListUl>
    )}

    ContactList.propTypes = { 
        contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        }).isRequired
        ).isRequired,
        onDeleteContact: PropTypes.func.isRequired,
    };