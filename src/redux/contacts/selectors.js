import { createSelector } from '@reduxjs/toolkit';
import { selectFilterValue } from 'redux/filterSlice';

export const selectLoading = state => state.contacts.loading;

export const selectFilter = state => state.contacts.filter;

export const selectAllContacts = state => state.contacts.items;

export const selectVisibleContacts = createSelector(
  [selectAllContacts, selectFilterValue],
  (contacts, filterValue) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);
