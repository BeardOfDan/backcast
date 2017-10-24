var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.render(); 
  },

  render: function() {
    this.$el.html(this.template());
    this.videoPlayer = new VideoPlayerView({el: this.$('.player'), model: Video });
    this.videoListView = new VideoListView({el: this.$('.list'), model: Video});
    this.SearchView = new SearchView({el: this.$('.search'), model: Video});
    return this;
  },

  template: templateURL('src/templates/app.html')

});
