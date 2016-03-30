import Ember from 'ember';

export default Ember.Component.extend({
  updateArticleForm: false,
  actions: {
    updateArticleForm(){
      this.set('updateArticleForm', true);
    },
    update(article){
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        time: this.get('time'),
        category: this.get('category'),
        image: this.get('image'),
        story: this.get('story'),
      };
      this.set('updateArticleForm', false);
      this.sendAction('update', article, params);
    }
  }
});

// added story within params to match attribute in model
