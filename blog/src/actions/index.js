import axios from 'axios';

export const FETCH_POSTS = 'fetch-posts';
export const CREATE_POST = 'reate-post';
export const FETCH_POST = 'fetch-post';
export const DELETE_POST = 'delete-post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=F78H6GF6H5A8DF87G6D9FDGJH5J7';

export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: DELETE_POST,
    payload: request
  }
}
