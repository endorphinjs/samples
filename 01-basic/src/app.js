import endorphin from 'endorphin';
import * as MyComponent from './my-component.html';

endorphin('my-component', MyComponent, {
	target: document.body
});