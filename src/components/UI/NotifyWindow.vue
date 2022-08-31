<template>
    <transition name="slide-fade">
        <div class="notification-window" v-if="show" >
            <i class="fa-solid fa-circle-check"></i>
            <slot></slot>
            <i class="fa-solid fa-xmark" @click="close"></i>
        </div>
    </transition>
</template>
<script>
export default {
    name: "notification",
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        close() {
            this.$emit("update:show", false)
        }
    },
}
</script>
<style scoped>
.notification-window {
    background: white;
    border-radius: 8px;
    padding: 13px;
    display: flex;
    width: 40vh;
    position: fixed;
    top: 70px;
    right: 20px;
    box-shadow: 1px 4px 8px -4px rgba(34, 60, 80, 0.2);
    font-weight: 300;
}
.fa-circle-check {
    padding-right: 10px;
    color: #2ea83a;
    font-size: 1.2em;
}
.fa-xmark {
    opacity: 0.2;
    margin-left: auto;
    font-size: 1.1em;
    cursor: pointer;
}
.slide-fade-enter-active {
  transition: all 0.7s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>