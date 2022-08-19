import endorphin from 'endorphin';
import AppStore from './store';

// @ts-ignore
import * as MyComponent from './my-component/my-component.html';

const target = document.body;
const store = new AppStore({count: 0});

endorphin('my-component', MyComponent, { target, store });
