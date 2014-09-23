'use strict';
var define = define;

define(
    [
        'jquery',
        'underscore',
        'backbone',
        'models/employee',
        'collections/employeeCollection',
        'views/employeeView',
        'text!/js/templates/app_view.html'
    ],
    function ($, _, Backbone, Employee, EmployeeCollection, EmployeeView, template) {
        var AppView = Backbone.View.extend({
            collection : EmployeeCollection,
            tagName : 'div',
            id : 'employee-app',
            events : {
                'click #addEmp' : 'saveEmp',
                'click #empty' : 'emptyCollection'
            },
            render : function () {
                this.addAll();
                return this;
            },
            initialize : function () {
                this.template = _.template(template);

                this.$el.html(this.template);
                this.$form = this.$el.find('#employee-form');
                this.$table = this.$el.find('#employee-table');

                this.listenTo(this.collection, 'add', this.addOne);
                this.listenTo(this.collection, 'reset', this.addAll);

                return this;
            },
            addOne : function (emp) {
                var view = new EmployeeView({model : emp});
                this.$table.append(view.render().el);
            },
            addAll : function () {
                // add all employees
                var $tableHead = this.$el.find('.table-head');
                this.$table.html($tableHead);
                this.collection.each(this.addOne, this);
            },
            saveEmp : function () {
                var eid = parseInt(this.$('#emp-id').val(), 10),
                    empName = this.$('#emp-name').val(),
                    empDesig = this.$('#emp-desig').val();

                if (isNaN(eid) || empName.trim() === '' || empDesig.trim() === '') {
                    return;
                }

                this.collection.create(
                    {
                        eid: eid,
                        name : empName.trim(),
                        designation : empDesig.trim()
                    }
                );
            },
            emptyCollection : function () {
                if (this.collection.length > 0) {
                    this.collection.reset();
                }
            }
        });
        return AppView;
    }
);