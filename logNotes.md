First add action type to perform using redux toolkit.
So added type in action-type.js file.
then set product action using action type in productAction.js file.
then we r going to create reducer in this file. So reducer always take initial state in the Action.
After that combine all the reducers in index.js file using "combineReducers";
Then set store.

**** to connect react application with redux store then use main react - index.js file.


### Dispatch DATA From API And added to the redux server ###

First fetch API using Axios then dispatch data using set Action type ==> dispatch(setProducts(response.data));
Then it will go to the action in productAction.js ==> setProducts() and return the object of dispatched data. 
After that this object will be taken by reducer. ===> productReducer.js