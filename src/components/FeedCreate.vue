<template>
    <div class="form-create">

        <input 
        v-model="post.title" 
        @click.stop class="form-create__create-title"
        :maxlength="limit"
        type="text" 
        placeholder="Заголовок"
        >

        <textarea 
        v-model="post.content" 
        @click.stop class="form-create__create-content" 
        type="text" 
        placeholder="Основной текст"
        ></textarea>

        <div class="form-button">
            <button-post 
            @click="createPost"
            v-model:title="post.title"
            >Опубликовать</button-post>
        </div>

    </div>


</template>
<script>
export default {
    data() {
        return {
            post: {
                title: '',
                content: '',
                img: 'pic.jpg'
            },
            limit: 90
        }
    },
    methods: {
        createPost() {
            let description = this.post.content.slice(0, 300);
            if (description.length < this.post.content.length) {
                description += '...';
            }

            let newPost = {
                title: this.post.title,
                description: description,
                img: this.post.img,
            }
            this.$emit('create', newPost);
            this.$emit('update:show', false)
            this.post = {
                title: '',
                description: '',
                content: '',
                img: ''
            }
        }
    }
}
</script>
<style>
.form-create {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
}
.form-create__create-title,
.form-create__create-descr,
.form-create__create-content {
    border: none;
    line-height: 1.6em;
}
.form-create__create-title {
    font-size: 36px;
    font-weight: 500;
    width: 80%;
}
.form-create__create-descr,
.form-create__create-content {
    font-size: 18px;
    font-weight: 300;
    width: 80%; 
    resize: none;
}
.form-create__create-descr {
    height: 100px;
}
.form-create__create-content {
    height: 400px;
}
:active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
}
::placeholder {
    opacity: 0.3;
}
.form-button {
    margin-top: 113px;
    margin-right: auto;
    margin-left: 91px;
}
</style>