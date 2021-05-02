import axios, { AxiosResponse } from 'axios';
import api from '../api';
import { authRef } from '../firebase';

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

export const getTennisEvents = async (): Promise<AxiosResponse> => {
  const header = await createToken();
  console.log(api);
  return axios.get(`${api.backend.url}/events`, header);
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

export const registerNotifications = async (socket: WebSocket) => {
  const header = await createToken();
  try {
    return new Promise<any>((resolve, reject) => {
      console.log("Help");
      if (socket.readyState == WebSocket.OPEN) {
        socket.send('Hello Server!');
        resolve(true);
      }
    });

  } catch (e) {
    console.error(e);
  }
};

export const saveLastNotificationCheck = async () => {

}