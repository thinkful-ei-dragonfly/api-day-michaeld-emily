'use strict';

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/michael';

  function getItems() {
    let error;
    return fetch(BASE_URL + '/items') //should go to catch if fail
      .then(res => {
        if (!res.ok){
          error = {code: res.status};
        }
        return res.json();
      })
      .then(data => {
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
        return data;
      });
  }
  function createItem(name){
    const newItem = JSON.stringify( {name} );
  
    return fetch(BASE_URL + '/items', {
      method: 'POST',
      headers: new Headers({'Content-Type' : 'application/json'}),
      body: newItem,
    });
  }
  
  return {
    getItems,
    createItem,
  };

}());