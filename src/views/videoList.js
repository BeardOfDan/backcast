var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);  
  },

  render: function() {

    this.$el.html(this.template());
    this.$el.children().detach();

    this.entries = [new VideoListEntryView({el: this.$el.append('<div>asdf</div>'), model: Video }), new VideoListEntryView({el: this.$el.append('<div>asdf</div>'), model: Video }), new VideoListEntryView({el: this.$el.append('<div>asdf</div>'), model: Video }), new VideoListEntryView({el: this.$el.append('<div>asdf</div>'), model: Video }), new VideoListEntryView({el: this.$el.append('<div>asdf</div>'), model: Video })];

    for (let i = 0; i < this.entries.length; i++) {
      this.entries[i].render();
    }

    return this;
  },

  template: templateURL('src/templates/videoList.html')
});
