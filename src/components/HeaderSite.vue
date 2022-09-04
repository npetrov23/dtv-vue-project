<template>
    <header class="header">
        <nav class="navbar">
            <div class="navbar__logo">
                <a href="/">DTV</a>
            </div>
            <div class="navbar__btn-create">
                <button-site @click="showWindowCreatePost">+ Создать</button-site>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    methods: {
        showWindowCreatePost() {
            this.$emit('show', true)
        },
    },
}
</script>

<style scoped>
.header {
    width: 100%;
    height: 60px;
    background-color: #d9f5ff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

.navbar__logo a {
    color: black;
    text-decoration: none;
    font-family: Tahoma;
    font-weight: 800;
    font-size: 40px;
}

.navbar__logo {
    margin-top: 5px;
    margin-left: 20px;
    margin-right: 50px;
}

.navbar {
    display: flex;
}
</style>