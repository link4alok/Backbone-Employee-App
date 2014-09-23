'use strict';
var define = define;

define(
    [
        'backbone',
        'models/employee',
        'backboneLocalstorage'
    ],
    function (Backbone, Employee, Store) {
        var EmployeeCollection = Backbone.Collection.extend({
            model: Employee,
            localStorage: new Store('Employee-Store')
        });
        return EmployeeCollection;
    }
);