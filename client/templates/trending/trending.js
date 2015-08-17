Template.trending.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('products');
  }.bind(this));
};

Template.trending.rendered = function () {
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
};

Template.trending.helpers({
  products: function () {
    return Products.find({}, {sort: {numberOfVotes: -1, name: -1}});
  }
});

var title = new ReactiveVar();
var url = new ReactiveVar();
Template.gameModal.onCreated(function(){
    title.set(this.data.title);
    url.set(this.data.url);
})

Template.gameModal.helpers({
    title:function(){
        return title.get();
    },
    url:function(){
        return url.get();
    }
})
