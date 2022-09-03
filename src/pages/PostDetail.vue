<template>
    <div>
        <header-site 
          @create="createPost" 
          @show="showWindowCreatePost"
          ></header-site>

        <div class="container">
            <div class="feed-detail">
                <div class="feed-detail__title">{{ postInfo.title }}</div>
                <div class="feed-detail__description">{{ postInfo.description }}</div>
                <div class="feed-detail__img">
                    <img class="feed-detail__img" :src="postInfo.img" alt="">
                </div>
                <div class="feed-detail__content">{{ postInfo.content }}</div>
                <div class="feed-detail__bottom">
                    <p class="feed__bottom-comments">
                        <i class="fa-regular fa-comment"></i> {{ postInfo.comments.length }}
                    </p>
                    <div class="feed__bottom-counter">
                        <rating-down @click="ratingDown"></rating-down>
                        <span :class="colorRating">{{ postInfo.rating }}</span> 
                        <rating-up @click="ratingUp"></rating-up>
                    </div>
                </div>
            </div>


                <!-- <div class="feed-detail__bottom">
                        <i class="fa-regular fa-comment"></i> {{ comments }}
                        <rating-down @click="ratingDown"></rating-down>
                        <span :class="colorRating">{{ rating }}</span> 
                        <rating-up @click="ratingUp"></rating-up>
                </div> -->
            </div>
        </div>
    <!-- </div> -->
</template>
<script>
    import HeaderSite from '@/components/HeaderSite.vue';
import db from '@/firebase.js';
export default {
    components: {
      HeaderSite,
    },
    data() {
        return {
            id_post: Number(this.$route.params.id),
            postInfo: {
                title: '',
                description: '',
                content: '',
                comments: ["some"],
                img: "",
                rating: 0,
            }
        }
    },
    mounted() {
        db.collection("/posts").where("id", "==", this.id_post).onSnapshot(ref => ref.docChanges().forEach(change => {
            const { i, j, doc, type} = change;
            this.postInfo.title = doc.data().title;
            this.postInfo.description = doc.data().description;
            this.postInfo.img = doc.data().img;
            this.postInfo.content = doc.data().content;
        })); 
    }
    
}
</script>
<style scoped>
.container {
    background-color: #F0F0F0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.feed-detail {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    max-width: 1000px;
    background-color: white;
    line-height: 30px;
}
.feed-detail__img {
    width: 100%;
}
.feed-detail__title,
.feed-detail__content,
.feed-detail__bottom,
.feed-detail__description {
    width: 600px;
    margin: 0 auto;
    margin-bottom: 12px;
}
.feed-detail__title {
    padding-top: 80px;
    font-size: 22px;
    font-weight: 500;
    
}
.feed-detail__content,
.feed-detail__description {
    font-size: 17px;
    line-height: 26px;
    font-weight: 300;
    font-family: Tahoma;
}
.feed-detail__bottom {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    color: gray;
}
</style>