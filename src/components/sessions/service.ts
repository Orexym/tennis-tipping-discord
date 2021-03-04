import axios from 'axios';
import { authRef } from '../../firebase';
import api from '../../api';

export const createToken = async () => {
  const user = authRef.currentUser;
  const token = user && (await user.getIdToken());
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  };
};

export const getPhonebookEntries = async () => {
  const header = await createToken();
  try {
    const res = await axios.get(api.rapidApi.url, header);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

/*export const addToPhonebook = async (payload: any) => {
  const header = await createToken();
  try {
    const res = await axios.post(rapidApi.url, payload, header);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};*/

export const registerNotifications = async () => {
  const header = await createToken();
  try {
    // const ws = new WebSocket(api.backend.wss);
    // const res = await axios.post(api.backend.url, payload, header);
    // return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const saveLastNotificationCheck = async () => {

}