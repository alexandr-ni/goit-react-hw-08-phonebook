import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { List } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  const getVisibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {getVisibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </List>
  );
};
