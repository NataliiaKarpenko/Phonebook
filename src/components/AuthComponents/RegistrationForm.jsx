import { useState } from 'react';
import { toast } from 'react-toastify';

import { handleRegistration } from 'APIServices.js/APIServices';
import { validateName } from 'utils/validateName';
import { validateEmail } from 'utils/validateEmail';
import { validatePassword } from 'utils/validatePassword';
import { useIsLoggedIn } from '../IsLoggedInContext';
import penRegisterPage from '../../images/penRegisterPage.png';
import AuthForm from './AuthForm';

export const RegistrationForm = () => {
  const { setIsLoggedIn, setIsRefreshing, setName } = useIsLoggedIn();

  const [errorStateName, setErrorStateName] = useState(false);
  const [helperTextName, setHelperTextName] = useState('');

  const [errorStateEmail, setErrorStateEmail] = useState(false);
  const [helperTextEmail, setHelperTextEmail] = useState('');

  const [errorStatePassword, setValidPassword] = useState(false);
  const [helperTextPassword, setHelperTextPassword] = useState(
    'Your password should contain more than 5 characters'
  );

  const fields = [
    {
      name: 'name',
      label: 'Username',
      type: 'text',
      errorState: errorStateName,
      helperText: helperTextName,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      errorState: errorStateEmail,
      helperText: helperTextEmail,
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      errorState: errorStatePassword,
      helperText: helperTextPassword,
    },
  ];

  const onSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    const userData = { name, email, password };

    const { nameHelperText, nameErrorState } = validateName(name);
    setHelperTextName(nameHelperText);
    setErrorStateName(nameErrorState);

    const { emailHelperText, emailErrorState } = validateEmail(email);
    setHelperTextEmail(emailHelperText);
    setErrorStateEmail(emailErrorState);

    const { passwordHelperText, passwordErrorState } =
      validatePassword(password);
    setHelperTextPassword(passwordHelperText);
    setValidPassword(passwordErrorState);

    if (!nameErrorState && !emailErrorState && !passwordErrorState) {
      signUpUser(userData);

      form.reset();
    }
  };

  async function signUpUser(userData) {
    setIsRefreshing(true);
    try {
      const response = await handleRegistration(userData);

      setIsRefreshing(true);
      if (response.status === 201) {
        const data = response.data;

        localStorage.setItem('token', data.token);

        setName(data.user.name);
        setIsLoggedIn(true);
        setIsRefreshing(false);
        toast.success('You have signed up successfully', {
          toastId: 'signupSuccess',
        });
      }
    } catch (error) {
      toast.error('Something went wrong. Try again, please!', {
        toastId: 'signupError',
      });
    } finally {
      setIsRefreshing(false);
    }
  }

  return (
    <AuthForm
      title="Sign up"
      onSubmit={onSubmit}
      fields={fields}
      src={penRegisterPage}
      className="penRegisterPage"
    />
  );
};
