import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import {
  Button,
  ErrorMsg,
  FormField,
  StyledForm,
} from './ContactEditor.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { selectAllContacts } from 'redux/contacts/selectors';

const ContactSchema = Yup.object().shape({
  text: Yup.string().min(3, 'Too Short!').max(30, 'Too Long!'),
});

export const ContactEditor = () => {
  const dispatch = useDispatch();
  const getContacts = useSelector(selectAllContacts);

  const handleSubmit = (values, actions) => {
    const checkContact = () => {
      for (const contact of getContacts) {
        if (contact.name.toLowerCase() === values.text.toLowerCase()) {
          alert(`${values.text} is already in contacts.`);
          return true;
        }
      }
    };

    if (checkContact() === undefined) {
      dispatch(addContact({ name: values.text, number: values.number }));
      actions.resetForm();

      return;
    }
    return;
  };

  return (
    <Formik
      initialValues={{ text: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions);
      }}
    >
      <StyledForm autoComplete="off">
        <label>
          <FormField type="text" name="text" required />
          <ErrorMsg name="text" component="div" />
        </label>
        <label>
          <FormField type="text" name="number" required />
          <ErrorMsg name="number" component="div" />
        </label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
