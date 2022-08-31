<template>
    <transition name="fade">
        <div class="dialog" v-if="show" @click="closeWindow">
            <div @click.stop class="dialog__content">
                <slot></slot>
            </div>
        </div> 
    </transition>
</template>
<script>
export default {
    name: 'modal-window',
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        closeWindow() {
            this.$emit('update:show', false)
        }
    }
}
</script>
<style scoped>
.dialog {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}

.dialog__content {
    margin: auto;
    background: white;
    border-radius: 8px;
    min-height: 88vh;
    min-width: 110vh;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>