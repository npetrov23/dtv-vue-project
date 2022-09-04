<template>
        <notification v-model:show="notificationCreateVisible">Материал опубликован</notification>
        <header-site @create="createPost" @show="showWindowCreatePost"></header-site>
        <modal-window v-model:show="windowCreateVisible">
            <feed-create @create="createPost"></feed-create>
        </modal-window>
</template>
<script>
import HeaderSite from '@/components/HeaderSite.vue';
import FeedCreate from '@/components/FeedCreate.vue';
import db from '@/firebase.js';
export default {
    name: "header-gui",
    components: {
        HeaderSite,
        FeedCreate,
    },
    data() {
        return {
            windowCreateVisible: false,
            notificationCreateVisible: false,
        }
    },
    methods: {
        createPost(post) {
            this.addPostFirebase(post);
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
            db.collection("posts").doc(String(post.id)).set(post);
        }
    },
}
</script>
<style>
    
</style>