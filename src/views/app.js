var AppView = Backbone.View.extend({

  // hard coding the initial start point
  el: '#app',

  initialize: function() {
    // this is the collection
    this.videos = new Videos(exampleVideoData);

    this.render();  
  },

  render() {
    this.$el.html(this.template());

    // pass in not only what it will append to, but what collection it is a part of
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();

    new VideoPlayerView({
      el: this.$('.player'),
      model: this.videos.at(0)
    });

    return this;
  },

  template: templateURL('src/templates/app.html')
});
