import { useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';
import { List } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </List>
  );
};
