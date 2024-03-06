export const validateTelephone = tel => {
  const isTelValid = /^\+\s\d{2}\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/.test(tel);

  const telHelperText = isTelValid
    ? ''
    : tel
    ? "Telephone number doesn't meet the requested format"
    : 'Required';

  return {
    telHelperText,
    telErrorState: !isTelValid,
  };
};
