import { useState } from 'react';
import { toast } from 'react-toastify';

import { handleSigningIn } from 'APIServices.js/APIServices';
import { useIsLoggedIn } from '../IsLoggedInContext';
import { validateEmail } from 'utils/validateEmail';
import { validatePassword } from 'utils/validatePassword';
import AuthForm from './AuthForm';
import penSigninPage from '../../images/penSigninPage.png';
import { Spinner } from 'components/Spinner';

export const SignInForm = () => {
  const { setIsLoggedIn, setIsRefreshing, isRefreshing, setName } =
    useIsLoggedIn();

  const [errorStateEmail, setErrorStateEmail] = useState(false);
  const [helperTextEmail, setHelperTextEmail] = useState('');

  const [errorStatePassword, setValidPassword] = useState(false);
  const [helperTextPassword, setHelperTextPassword] = useState(
    'Your password should contain more than 5 characters'
  );

  const fields = [
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

    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    const userData = { email, password };

    const { emailHelperText, emailErrorState } = validateEmail(email);
    setHelperTextEmail(emailHelperText);
    setErrorStateEmail(emailErrorState);

    const { passwordHelperText, passwordErrorState } =
      validatePassword(password);
    setHelperTextPassword(passwordHelperText);
    setValidPassword(passwordErrorState);

    if (!emailErrorState && !passwordErrorState) {
      signInUser(userData);

      form.reset();
    }
  };

  async function signInUser(userData) {
    setIsRefreshing(true);
    try {
      const response = await handleSigningIn(userData);

      if (response.status === 200) {
        const data = response.data;

        localStorage.setItem('token', data.token);

        setIsRefreshing(false);
        setName(data.user.name);
        setIsLoggedIn(true);
        setIsRefreshing(false);
        toast.success('You have signed in successfully!', {
          toastId: 'signinSuccess',
        });
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Try again, please!', {
        toastId: 'signinError',
      });
    } finally {
      setIsRefreshing(false);
    }
  }

  return isRefreshing ? (
    <Spinner />
  ) : (
    <AuthForm
      title="Sign in"
      onSubmit={onSubmit}
      fields={fields}
      src={penSigninPage}
      className="penSigninPage"
    />
  );
};
