import axios from 'axios';

export const writePost = ( {title,body,tags,category} ) => axios.post('/api/posts',{title, body, tags,category});
export const getList = (tag='', page ) => axios.get(`/api/posts?page=${page}&tag=${tag}`);
export const getSearchList = (keyword) =>axios.get(`/api/posts/search/${keyword}`);
export const deletePost = (id) => axios.delete(`/api/posts/${id}`);
export const getPost = (id) => axios.get(`/api/posts/${id}`);
export const editPost = ({id, title, body, tags}) => axios.patch(`/api/posts/${id}`,{id,title,body,tags});

export const login = (password) => axios.post('/api/auth/login',{password});
export const loginCheck = () => axios.get('/api/auth/check');
export const logout = () => axios.post('/api/auth/logout');

/// 

//rest의 가장 기본적인 특징
/*

axios.post('/api/board)
axios.get('/api/board)
axios.get('/api/baord/1)

1. http URI로 해당 자원에 대한 명세

bbs
axios.get('/api/get/bbs/all)

axios.get('/api/board')
axios.post('/api/board')

http request
body
{ 
  "title": "SDfsdf",
  "name" : "dfdfdf"
}

2. http method로 자원에 대한 행위 표현

axios.post Create
axios.get Read
axios.put Update
axios.delete Delete
4개 -> HTTP Method
*/

