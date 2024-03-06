export const validateEmail = email => {
  const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
  const emailHelperText = isEmailValid
    ? ''
    : email
    ? 'Enter a valid email'
    : 'Required';

  return {
    emailHelperText,
    emailErrorState: !isEmailValid,
  };
};
