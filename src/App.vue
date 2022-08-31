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
export default {
    components: {
    FeedList,
    HeaderSite,
    FeedCreate
},
    data() {
        return {
            feeds: [
                {
                    title: "Студия Hangar 13 подтвердила, что работает над следующей Mafia",
                    description: "«До релиза всё ещё несколько лет».",
                    img: "pic.jpg"
                },
                {
                    title: "Студия Hangar 13 подтвердила, что работает над следующей Mafia",
                    description: "«До релиза всё ещё несколько лет».",
                    img: "pic.jpg"
                },
            ],
            windowCreateVisible: false,
            notificationCreateVisible: false,
        };
    },
    methods: {
        createPost(post) {
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
    },
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
