
/* global shoppingList, store */

/* global shoppingList, $, Item, api ,store */

'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

api.getItems()
  .then(items => {
    items.forEach( items => store.addItem(item));
    shoppingList.render();
  })
  .catch(err => console.log(err));
});
  

// api.createItem('bananas')
//   .then(() => api.getItems())
//   .then(items => console.log(items));

