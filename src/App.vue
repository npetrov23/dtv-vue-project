

<template>
    <div>
      <notification v-model:show="notificationCreateVisible">Материал опубликован</notification>
      <header-site 
          @create="createPost" 
          @show="showWindowCreatePost"
          ></header-site>
      <modal-window v-model:show="windowCreateVisible">
        <feed-create @create="createPost"></feed-create>
      </modal-window>
      <feed-list :feeds="feeds" ></feed-list>
    </div>
  </template>
  
  <script>
  import FeedList from './components/FeedList.vue';
  import HeaderSite from './components/HeaderSite.vue';
  import FeedCreate from './components/FeedCreate.vue';
  import db from '@/firebase.js';

  export default {
      components: {
      FeedList,
      HeaderSite,
      FeedCreate,
  },
      data() {
          return {
              feeds: [],
              windowCreateVisible: false,
              notificationCreateVisible: false,
              file: '',
              url2: ''
          };
      },
      methods: {

          createPost(post) {
              this.addPostFirebase(post);
              this.feeds.unshift(post);
              this.windowCreateVisible = false;
              this.notificationCreateVisible = true;
              setTimeout(() => {
                  this.notificationCreateVisible = false
              }, 1500)
          },
          showWindowCreatePost() {
              this.windowCreateVisible = true;
          },
          addPostFirebase(post) {
               db.collection("posts").add(post);
          }
      },
      mounted() {
        db.collection('/posts').onSnapshot(ref => ref.docChanges().forEach(change => {
            const { i, j, doc, type} = change;
            this.feeds.push({
                title: doc.data().title,
                description: doc.data().description,
                img: doc.data().img,
            });
        }));
      }
  }
  </script>
  
  <style>
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
      
  }
  body {
      padding-top: 60px;
  }
  </style>
  