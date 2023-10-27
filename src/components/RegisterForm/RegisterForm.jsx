import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  Button,
  ErrorMsg,
  FormField,
  Label,
  StyledForm,
  Title,
} from './RegisterForm.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(8, 'Too Short!').max(30, 'Too Long!'),
  email: Yup.string().min(8, 'Too Short!').max(30, 'Too Long!'),
  password: Yup.string().min(7, 'Too Short!').max(30, 'Too Long!'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions);
      }}
    >
      <StyledForm autoComplete="off">
        <Label>
          <Title>Username</Title>
          <FormField type="text" name="name" required />
          <ErrorMsg name="name" component="div" />
        </Label>
        <Label>
          <Title>Email</Title>
          <FormField type="email" name="email" required />
          <ErrorMsg name="email" component="div" />
        </Label>
        <Label>
          <Title>Password</Title>
          <FormField type="password" name="password" required />
          <ErrorMsg name="password" component="div" />
        </Label>

        <Button type="submit">Register</Button>
      </StyledForm>
    </Formik>
  );
};
