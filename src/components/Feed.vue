<template>
    <section class="container">
        <div class="feed">
            <div class="feed__top">
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
                <div @click="$router.push(`/feed/${feed.id}`)" class="feed__content">
                    <h1 class="feed__title">{{ feed.title }}</h1>
                    <p class="feed__descr">{{ feed.description }}</p>
                </div>
                <div class="feed__img">
                    <img class="feed__img" :src="feed.img" alt="">
                </div>
            </div>

            <div class="feed__bottom">
                <p class="feed__bottom-comments">
                    <i class="fa-regular fa-comment"></i> {{ feed.comments.length }}
                </p>
                <rating-panel :feed="feed"></rating-panel>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        feed: {
            type: Object,
            required: true,
        }
    },
}
</script>

<style scoped>
.container {
    padding-top: 30px;
    background-color: #F0F0F0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.feed__bottom {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    color: gray;
}

.feed {
    width: 700px;
    background-color: #fff;
    border-radius: 8px;
    margin-bottom: 20px;
    cursor: pointer;
}

.feed__title {
    font-weight: 500;

}

.feed__descr {
    font-weight: 300;
}

.feed__title,
.feed__descr,
.feed-detail__top {
    padding-top: 15px;
    padding-right: 15px;
    padding-left: 15px;

}

.feed__descr {
    padding-bottom: 15px;
    line-height: 26px;
    font-size: 17px;
    font-family: Tahoma;
}

.feed__img {
    width: 100%;
}

.feed-detail__top {
    display: flex;
    font-size: 15px;
    line-height: 22px;
    align-items: center;
    width: 600px;
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

</style>