import template from './searchcomponent.component.html';
import controller from './searchcomponent.controller.js';
import './searchcomponent.component.scss';

let searchcomponentComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'searchcomponentController'
};
export default searchcomponentComponent;