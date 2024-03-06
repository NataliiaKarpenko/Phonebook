export const validateName = name => {
  const isNameValid =
    name.length >= 3 && /^[a-zA-Zа-яА-яіІїЇєЄ0-9'-\s]+$/.test(name);
  const nameHelperText = isNameValid
    ? ''
    : name
    ? getNameErrorMessage()
    : 'Required';

  function getNameErrorMessage() {
    return name.length < 3
      ? 'Your name is too short'
      : 'Name may contain only letters, digits, apostrophes, hyphens and spaces.';
  }

  return {
    nameHelperText,
    nameErrorState: !isNameValid,
  };
};
