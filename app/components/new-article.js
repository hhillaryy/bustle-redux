import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow(){
      this.set('addNewArticle', true);
    },
    save1(){
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        time: this.get('time'),
        category: this.get('category'),
        image: this.get('image'),
        story: this.get('story')
      };
      this.set('addNewArticle', false);
      this.sendAction('save2', params);
    }
  }
});

// added story parameter to match attribute in model
