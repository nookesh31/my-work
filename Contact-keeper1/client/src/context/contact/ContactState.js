import React,{ useReducer } from 'react';
import * as uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [{
           id: 1,
           name: 'pallavi',
           email: 'pallavi@gmail.com',
           phone:'123456789',
           type: 'professional'

        },
        {
            id: 2,
            name: 'nookesh',
            email: 'nookesh@gmail.com',
            phone:'234567891',
            type: 'personal'
 
         },
         {
            id: 3,
            name: 'yamuna',
            email: 'yamuna@gmail.com',
            phone:'234567891',
            type: 'personal'
 
         },
         {
            id: 4,
            name: 'prasad',
            email: 'prasad@gmail.com',
            phone:'234156789',
            type: 'professional'
 
         }
        ],
        current: null,
        filtered: null
    
    };
    const [state, dispatch ] = useReducer(contactReducer, initialState);
    // add contact
    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({ type: ADD_CONTACT,payload: contact });

    }
    // delete contact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT,payload: id});
    }
    // set current
    const setCurrent = contact=> {
        dispatch({ type: SET_CURRENT,payload: contact});
    }
    // clear current
    const clearCurrent = ()=> {
        dispatch({ type: CLEAR_CURRENT});
    }
    // update contact
    const updateContact = contact=> {
        dispatch({ type: UPDATE_CONTACT,payload: contact});
    }
    // filter contacts
    const filterContacts = text=> {
        dispatch({ type: FILTER_CONTACTS,payload: text });
    }
    // clear contacts
    const clearFilter = ()=> {
        dispatch({ type: CLEAR_FILTER });
    }
    // set alert
    // remove alert

return (
    <ContactContext.Provider value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter

    }}>
        { props.children}
    </ContactContext.Provider>
)
};
export default ContactState;
