var VideoListView = Backbone.View.extend({

  // initialize: function() {
  //   if (this.collection) {
  //     this.collection.on('sync', this.render, this);
  //   } else {
  //     this.render();
  //   } 


  //   return this;

  // },

  // // events: {
  // //   'click': 'handleTitleClick'
  // // },

  // // handleTitleClick: function(event) {
  // //   console.log('event', event);

    

  // //   console.log('THIS', this);
  // //   console.log('model', this.model);
  // // },

  // render: function() {

  //   this.$el.html(this.template());
  //   this.$el.children().detach();

  //   this.entries = [];

  //   const numVids = 5; // can change this later

  //   for (let i = 0; i < numVids; i++) {
  //     let el = $('<div>If you can see this, then I screwed up</div>');
  //     this.$el.append(el);
  //     // debugger;
  //     let thing = new VideoListEntryView({'el': el, 'model': Video});
  //     thing.render(i);
  //     this.entries.push(thing);
  //   }


  //   //console.log('this', this);

  //   // this.entries[0].$el.find('.video-list-entry-title').on('click', function() {
  //   //   // trigger a thing to do select
      
      

  //   //   this.trigger('select');
  //   // });


  //   // for (let i = 0; i < this.entries.length; i++) {
  //   // this.entries[0].$el.find('.video-list-entry-title').on('click', (event) => {
  //   //   console.log('event', event);

  //   //   console.log('thing', event.currentTarget);

  //   //   console.log('did it');
  //   //   console.log(this);
  //   //   // this.select();
  //   //   console.log('did the second thign');
  //   // });
  //   // }


  //   return this;
  // },

  // template: templateURL('src/templates/videoList.html')
});
