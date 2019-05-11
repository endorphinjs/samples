import endorphin from 'endorphin';

// @ts-ignore
import * as MyComponent from './my-component/my-component.html';

endorphin('my-component', MyComponent, {
	target: document.body
});