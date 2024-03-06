import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const handleRegistration = async userData => {
  try {
    const response = await axios.post('/users/signup', userData);

    setAuthHeader(response.data.token);

    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const handleSigningIn = async userData => {
  try {
    const response = await axios.post('/users/login', userData);

    setAuthHeader(response.data.token);

    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getUserInfo = async () => {
  const persistedToken = localStorage.getItem('token');

  try {
    setAuthHeader(persistedToken);
    const response = await axios.get('/users/current');

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handleLogOut = async () => {
  try {
    const response = await axios.post('/users/logout');

    clearAuthHeader();

    return response;
  } catch (error) {
    console.log(error);
  }
};

// ========================CONTACTS=========================

export const getContacts = async () => {
  try {
    const response = await axios.get('/contacts');
    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const addContact = async contactData => {
  try {
    const response = await axios.post('/contacts', contactData);
    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const deleteContact = async contactId => {
  try {
    const response = await axios.delete(`/contacts/${contactId}`);

    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const editContact = async (contactId, contactData) => {
  try {
    const response = await axios.patch(`/contacts/${contactId}`, contactData);

    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
