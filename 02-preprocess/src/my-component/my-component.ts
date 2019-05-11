import { Component } from 'endorphin';

// Interface for component props
interface MyComponentProps {
	foo: number;
	bar: string;
}

// Interface for component state
interface MyComponentState {
	count: number;
}

// Interface for component instance
type MyComponent = Component<MyComponentProps, MyComponentState>;

export function state(): MyComponentState {
	return { count: 0 }
}

export function didMount(component: MyComponent) {
	console.log('Mounted component %s with initial count %d', component.nodeName, component.state.count);
}

export function onClick(component: MyComponent) {
	component.setState({
		count: component.state.count + 1
	});
}