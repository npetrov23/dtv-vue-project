<template>
    <div>
        <header-gui></header-gui>
        <div class="container">
            <div class="feed-detail">
                <div class="feed-detail__top">
                    <div class="feed-detail__top-category-icon">
                        <img class="feed-detail__top-category-icon"
                            src="https://firebasestorage.googleapis.com/v0/b/dtv-db.appspot.com/o/images%2Ficon.webp?alt=media&token=ff081943-5555-43a5-85d2-a79bc23b7092"
                            alt="">
                    </div>
                    <div class="feed-detail__top-category-name">
                        <p>Игры</p>
                    </div>
                    <div class="feed-detail__top-author">
                        <p>Имя автора</p>
                    </div>
                </div>
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
                    <rating-panel :feed="postInfo"></rating-panel>
                </div>
            </div>
            <comments-list :id_post="id_post"></comments-list>
        </div>
    </div>
</template>
<script>
import db from '@/firebase.js';
import CommentsList from '@/components/CommentsList.vue';
export default {
    data() {
        return {
            id_post: Number(this.$route.params.id),
            postInfo: {
                title: "",
                description: "",
                content: "",
                comments: [],
                img: "",
                rating: 0,
            },
        };
    },
    mounted() {
        db.collection("/posts").where("id", "==", this.id_post).onSnapshot(ref => ref.docChanges().forEach(change => {
            const { i, j, doc, type } = change;
            this.postInfo.title = doc.data().title;
            this.postInfo.description = doc.data().description;
            this.postInfo.img = doc.data().img;
            this.postInfo.content = doc.data().content;
            this.postInfo.rating = doc.data().rating;
            this.postInfo.comments = doc.data().comments;
        }));
    },
    computed: {
        colorRating() {
            if (this.rating < 0) {
                return {
                    lessZero: true,
                };
            }
            else {
                return {
                    aboveZero: true,
                };
            }
        }
    },
    components: { CommentsList }
}
</script>
<style scoped>
.container {
    background-color: #F0F0F0;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.comments {
    display: flex;
    flex-direction: column;
    min-width: 1000px;
    background-color: white;
    margin-top: 32px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    padding-top: 32px;
}

.feed-detail {
    display: flex;
    flex-direction: column;
    min-width: 1000px;
    background-color: white;
    line-height: 30px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}

.feed-detail__img {
    max-width: 1000px;
    text-align: center;
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

.feed-detail__top {
    display: flex;
    font-size: 15px;
    line-height: 22px;
    align-items: center;
    width: 600px;
    margin: 0 auto;
    margin-bottom: 12px;
    margin-top: 32px;
}

.feed-detail__top-category-icon {
    width: 22px;
    height: 22px;
    border-radius: 8px;
}

.feed-detail__top-category-name {
    padding-right: 20px;
    padding-left: 10px;
}

.feed-detail__top-author {
    font-weight: 300;
}

.aboveZero {
    color: #2ea83a;
}

.lessZero {
    color: red;

}
</style>