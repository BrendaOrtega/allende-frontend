import {apiUrl} from './apiUrl';

export const getDists = () => {
    return fetch(apiUrl + '/distribuidores')
        .then(r => r.json())
};

export const newDist =(url,obj)=> () =>
fetch(apiUrl + '/new-dist',{
  method:'POST',
  body:JSON.stringify(obj),
  headers: new Headers({'Content-type':'application/json'})
}).then(v => v.json())
.then(r => {
  if(r.error){
    return Promise.reject(r.validation);
  }
  return r;
});