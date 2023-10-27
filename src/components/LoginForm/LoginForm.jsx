import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  StyledForm,
  Label,
  Title,
  FormField,
  ErrorMsg,
  Button,
} from './LoginForm.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(30, 'Too Long!'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );

    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions);
        }}
      >
        <StyledForm autoComplete="off">
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

          <Button type="submit">Log In</Button>
        </StyledForm>
      </Formik>
    </div>
  );
};
