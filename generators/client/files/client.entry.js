// Core react.
import { createElement } from 'react';
import { render } from 'react-dom';

// Base component.
import Root from 'index';
import state from 'client/state';

// Get the root element.
const root = document.getElementById('content');

// Build the app component.
const component = <Root {...state}/>;

// Mount the root component.
render(component, root);
