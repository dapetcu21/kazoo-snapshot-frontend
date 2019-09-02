import io from 'socket.io-client'

export const API_URL = process.env.REACT_APP_API_URL || 'http://api.kazoo.ro'

export const socket = io(API_URL);

export function checkResponse(res) {
  if (!res.ok) {
    throw new Error('Response not ok');
  }
  return res;
}
