export const validatePassword = password => {
  const isPasswordValid = password.length >= 6 && !/\s/.test(password);
  const passwordHelperText = isPasswordValid
    ? 'Your password should contain more than 5 characters'
    : password
    ? getPasswordErrorMessage()
    : 'Required';

  function getPasswordErrorMessage() {
    return password.length < 6
      ? 'Your password is too short'
      : 'Your password must contain no spaces';
  }
  return {
    passwordHelperText,
    passwordErrorState: !isPasswordValid,
  };
};
