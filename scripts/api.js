'use strict';

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/michael';

  function getItems() {
    return fetch(`${BASE_URL}/items`);
  }

  return {
    getItems,
  };

}());