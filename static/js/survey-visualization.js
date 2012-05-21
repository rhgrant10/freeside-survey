var App = {};

App.Response = Backbone.Model.extend({});
App.ResponseSelector = Backbone.Model.extend({});

App.UIView = Backbone.View.extend({});
App.GridView = Backbone.View.extend({});
App.DayView = Backbone.View.extend({});
App.TimeView = Backbone.View.extend({});


// Make the selector at the top come alive.
$('#ContentSelector a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
})