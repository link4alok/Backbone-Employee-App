// indent = 0 used for all js files

'use strict';
var define = define;

require.config({
    shim : {
        underscore : {
            exports: '_'
        },
        backbone : {
            deps : [ 'underscore', 'jquery' ],
            exports : 'Backbone'
        },
        backboneLocalstorage : {
            deps : [ 'backbone' ],
            exports : 'Store'
        }
    },
    paths : {
        jquery : '../lib/jquery',   // follows define pattern
        underscore : '../lib/underscore',
        backbone : '../lib/backbone',
        backboneLocalstorage : '../lib/backbone.localStorage',
        text : '../lib/text'        // follows define pattern
    }
});

require(
    [
        'jquery',
        'backbone',
        'collections/employeeCollection',
        'views/app'
    ],
    function ($, Backbone, EmployeeCollection, AppView) {
        var employeeCollection = new EmployeeCollection();

        var app = new AppView({ collection : employeeCollection });
        app.render().$el.appendTo($('#wrapper'));

        //employeeCollection.create({eid : 201, name: 'adi', designation : 'dev'});
        //employeeCollection.create();
    }
);