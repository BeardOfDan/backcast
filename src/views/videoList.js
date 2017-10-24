var VideoListView = Backbone.View.extend({

  initialize: function() {
    if (this.collection) {
      this.collection.on('sync', this.render, this);
    } else {
      this.render();
    } 
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
