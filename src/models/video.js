var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
    this.on('click', function() {
      console.log('asdf');
    });

  },

  select: function() {
    this.trigger('select', this);
  }

});
