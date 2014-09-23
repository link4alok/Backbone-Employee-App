'use strict';
var define = define;

define(
    [
        'jquery',
        'underscore',
        'backbone',
        'models/employee',
        'text!/js/templates/employee_view.html'

    ],
    function ($, _, Backbone, Employee, template) {
        var EmployeeView = Backbone.View.extend({
            tagName : 'tr',
            collection : Employee,
            events : {
                'click .delete' : 'del'
            },
            render : function () {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },
            initialize : function () {
                this.template = _.template(template);
                this.listenTo(this.model, 'change', this.render);
                this.listenTo(this.model, 'destroy', this.remove);
                return this;
            },
            del : function () {
                this.model.destroy();
            }
        });

        return EmployeeView;
    }
);