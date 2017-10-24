var VideoListEntryView = Backbone.View.extend({

  intialize: function() {
    this.render();
  },

  render: function(index) {

    // console.log('this', this);

    let obj = exampleVideoData[index];

    let myHtml = 
$(`<div class='video-list-entry media'>
  <div class='media-left'>
    <img class='media-object' src=${obj.snippet.thumbnails.default.url}
  </div>
  <div class='media-body'>
    <div class='video-list-entry-title'>${obj.snippet.title}</div>
    <div class='video-list-entry-detail'>${obj.snippet.description}</div>
  </div>
</div>`);



    // ${obj.snippet.title}
    this.$el.find(`.${obj.snippet.title}`);    


    this.$el.html(myHtml);
  
    $('.video-list-entry-title').on('click', () => {
      console.log('did it');
      console.log(this);
      console.log('did the second thign');
    });


    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')
});
