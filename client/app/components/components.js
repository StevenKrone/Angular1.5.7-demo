import angular from 'angular';
    import SearchcomponentModule from './searchcomponent/searchcomponent.module';

const ComponentsModule = angular.module('app.components',[
       SearchcomponentModule.name 
]);

export default ComponentsModule;