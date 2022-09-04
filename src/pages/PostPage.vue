<template>
  <div>
    <header-gui></header-gui>
    <spinner v-if="loader"></spinner>
    <feed-list 
      v-else
      :feeds="feeds
    "></feed-list>
  </div>
</template>
  
  <script>
import FeedList from '@/components/FeedList.vue';
import db from '@/firebase.js';

export default {
  components: {
    FeedList,
  },
  data() {
    return {
      feeds: [],
      file: '',
      loader: true,
    };
  },
  mounted() {
    db.collection('/posts').onSnapshot(ref => ref.docChanges().forEach(change => {
      const { i, j, doc, type } = change;
      this.feeds.unshift({
        id: doc.data().id,
        title: doc.data().title,
        description: doc.data().description,
        img: doc.data().img,
        rating: doc.data().rating,
        comments: doc.data().comments,
      });
        this.loader = false;
    }));
  }
}
</script>
  
  <style>
  </style>
  