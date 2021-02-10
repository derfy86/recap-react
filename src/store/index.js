import { createStore } from 'redux';

import reducer from './reducer';
// Un reducer est une fonction qui return mon state attendu
// Je donne mon reducer à createStore pour qu'il sache
// à quoi doit ressembler mon state initial

const store = createStore(
  reducer,
  // La ligne suivante permet de relier notre store à l'extension redux-dev-tools
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(
    { trace: true },
  ),
);
export default store;
