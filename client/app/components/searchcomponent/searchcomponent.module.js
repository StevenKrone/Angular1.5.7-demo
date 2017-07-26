import angular from 'angular';
import searchcomponentComponent from './searchcomponent.component';

const searchcomponentModule = angular.module('searchcomponent', [])
  .component('searchcomponent', searchcomponentComponent);
export default searchcomponentModule;