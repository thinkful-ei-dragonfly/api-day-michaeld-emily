
/* global shoppingList, store */

/* global shoppingList, $, Item, api ,store */

'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

api.getItems()
  .then((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  })
  .catch(err => console.log(err));

  

api.createItem('pears')
  .then(res => res.json())
  .then((newItem) => {
    return api.getItems();
  })
  .then((items) => {
    console.log(items);
  });

