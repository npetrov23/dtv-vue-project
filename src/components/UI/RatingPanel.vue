<template lang="">
    <div class="feed__bottom-counter">
        <rating-down 
            :class="pressedArrowDown"
            @click="ratingDown()">
        </rating-down>
        <span :class="colorRating">{{ feed.rating }}</span>
        <rating-up 
            :class="pressedArrowUp"
            @click="ratingUp()">
        </rating-up>
    </div>
</template>
<script>
export default {
    name: "rating-panel",
    props: {
        feed: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            actionCounterUp: false,
            actionCounterDown: false,
        }
    },
    methods: {
        ratingUp() {
            
            if(!this.actionCounterDown) {
                this.actionCounterUp = !this.actionCounterUp;
                this.actionCounterUp ? this.feed.rating++ : this.feed.rating--;
            }
        },
        ratingDown() {
            
            if(!this.actionCounterUp) {
                this.actionCounterDown = !this.actionCounterDown;
                this.actionCounterDown ? this.feed.rating-- : this.feed.rating++;
            }
        }
    },
    computed: {
        colorRating() {
            if (this.feed.rating < 0) {
                return {
                    lessZero: true,
                }
            }
            else {
                return {
                    aboveZero: true,
                }
            }
        },
        pressedArrowUp() {
            if(this.actionCounterUp) {
                return {
                    pressUp: true
                }
            }
            else {
                return {
                    pressUp: false
                }
            }
        },
        pressedArrowDown() {
            if(this.actionCounterDown) {
                return {
                    pressDown: true
                }
            }
            else {
                return {
                    pressDown: false
                }
            }
        }
    }
}

</script>
<style scoped>
    .aboveZero {
    color: #2ea83a;
}

.lessZero {
    color: red;

}

.pressUp {
    color: #2ea83a;
}

.pressDown {
    color: red;
}
</style>