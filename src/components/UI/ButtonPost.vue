<template>
    <button v-if="!lockedForm"
        class="btn" 
    >
        <slot></slot>
    </button>
    <button v-else
        class="btn disable" 
        disabled
    >
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "button-post",
    props: {
        // title: {
        //     type: String
        // },
        lockedForm: {
            type: Boolean
        }
    },
    data() {
        return {
            isDisabled: true,
        }
    }
}
</script>
<style scoped>
.btn {
    min-width: 44px;
    height: 40px;
    font-size: 16px;
    border-radius: 8px;
    background-color: #4683d9;
    color: white;
    border: 0;
    cursor: pointer;
    padding-left: 15px;
    padding-right: 15px;
    /* margin-top: 10px; */
    box-shadow: 1px 4px 8px -4px rgba(34, 60, 80, 0.2);
}

.btn:hover {
    box-shadow: 1px 4px 16px -4px rgba(34, 60, 80, 0.2);
}

.disable {
    opacity: 0.5;
}
</style>