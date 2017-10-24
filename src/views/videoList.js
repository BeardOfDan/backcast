var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {

    this.$el.html(this.template());
    this.$el.children().detach();


    this.entries = [new VideoListEntryView({el: this.$el.append('<div>asdf</div>'), model: Video }), new VideoListEntryView({el: this.$el.append('<div>asdf</div>'), model: Video }), new VideoListEntryView({el: this.$el.append('<div>asdf</div>'), model: Video }), new VideoListEntryView({el: this.$el.append('<div>asdf</div>'), model: Video }), new VideoListEntryView({el: this.$el.append('<div>asdf</div>'), model: Video })];


    for (let i = 0; i < this.entries.length; i++) {
      // debugger;
      this.entries[i].render();
    }

    // debugger;
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
