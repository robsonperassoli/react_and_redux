import axios from 'axios';

export const FETCH_POSTS = 'fetch-posts';
export const CREATE_POST = 'create-post';
export const FETCH_POST = 'fetch-post';
export const DELETE_POST = 'delete-post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=GDSA7SFD5SFD8S7A9S87D0AD8FG7GH5DGSAS09';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  }
};

export function createPost(post, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, post)
    .then(() => callback());
  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(postId) {
  const request = axios.get(`${ROOT_URL}/posts/${postId}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(postId, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${postId}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: postId
  }
}
