import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-clone-3f8eb.cloudfunctions.net/api",
});

export default instance;
