<template>
<section class="container">
    <div class="feed" @click="$router.push(`/feed/${feed.id}`)">
      <div class="feed__top">
        <h1 class="feed__title">{{ feed.title }}</h1>
          <p class="feed__descr">{{ feed.description }}</p>
        </div>
        <div class="feed__img">
          <img class="feed__img" :src="feed.img" alt="">
        </div>
        <div class="feed__bottom">
            <p class="feed__bottom-comments">
                <i class="fa-regular fa-comment"></i> {{ comments }}
            </p>
            <div class="feed__bottom-counter">
                <rating-down @click="ratingDown"></rating-down>
                <span :class="colorRating">{{ rating }}</span> 
                <rating-up @click="ratingUp"></rating-up>
            </div>
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
    data() {
        return {
            rating: 0,
            comments: 0,
            actionCounterUp: false,
            actionCounterDown: false,
        }
    },
    methods: {
        ratingUp() {
            if(!this.actionCounterUp && this.actionCounterDown) {
                this.rating++;
                this.actionCounterDown = false;
                this.actionCounterUp = false;
            }
            else if(!this.actionCounterUp && !this.actionCounterDown) {
                this.rating++;
                this.actionCounterUp = true;
            }

            
        },
        ratingDown() {
            if(!this.actionCounterDown && this.actionCounterUp) {
                this.rating--;
                this.actionCounterDown = false;
                this.actionCounterUp = false;
            }
            else if(!this.actionCounterDown && !this.actionCounterUp) {
                this.rating--;
                this.actionCounterDown = true;
            }
            
            
        }
    },
    computed: {
        colorRating() {
            if(this.rating < 0) {
                return {
                    lessZero: true,
                }
            }
            else {
                return {
                    aboveZero: true,
                }
            }
        }
    }
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
.aboveZero  {
    color: #2ea83a;
}
.lessZero {
    color: red;
    
}
.feed {
    max-width: 700px;
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
    /* height: 5px; */
}

.feed__title,
.feed__descr {
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
</style>