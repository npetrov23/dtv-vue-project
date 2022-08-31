<template>
    <feed 
        v-for="feed in feeds"
        :feed="feed"
    ></feed>
</template>
<script>
import Feed from './Feed.vue';
export default {
    components: { Feed },
    props: {
        feeds: {
            type: Array,
            required: true,
        }
    }
}
</script>
<style>
    
</style>