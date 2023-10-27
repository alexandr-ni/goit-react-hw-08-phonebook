import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Text, Wrapper, Button } from './Contact.styled';
import { BiUser } from 'react-icons/bi';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Wrapper>
      <BiUser />
      <Text>{`${name} : ${number}`}</Text>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </Wrapper>
  );
};
