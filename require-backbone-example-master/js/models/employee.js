'use strict';
var define = define;

define(['backbone'], function (Backbone) {
    var Employee = Backbone.Model.extend({
        defaults : {
            eid : 101,
            name : 'John Doe',
            designation : 'Developer'
        },
        initialize : function () {
            console.log('A new employee created');
        }
    });

    return Employee;
});