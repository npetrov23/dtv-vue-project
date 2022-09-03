<template>
    <div>
        <h1>СТраница поста с ID = {{ $route.params.id }}</h1>
        {{ postInfo.title }} <br>
        {{ postInfo.description }}
    </div>
</template>
<script>
import db from '@/firebase.js';
export default {
    data() {
        return {
            id_post: Number(this.$route.params.id),
            postInfo: {
                title: '',
                description: '',
                content: '',
                comments: [],
            }
        }
    },
    mounted() {
        db.collection("/posts").where("id", "==", this.id_post).onSnapshot(ref => ref.docChanges().forEach(change => {
            const { i, j, doc, type} = change;
            this.postInfo.title = doc.data().title;
            this.postInfo.description = doc.data().description;
        })); 
    }
    
}
</script>
<style>
    
</style>