const api = {
  rapidApi: {
    url: ''
  },
  backend: {
    url: 'http://' + process.env.REACT_APP_BACKEND_URL || '',
    wss: 'ws://' + process.env.REACT_APP_BACKEND_URL || ''
  }
};

export default api;