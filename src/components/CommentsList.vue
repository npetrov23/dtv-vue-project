<template>
    <div class="comments">
        <div class="comments__title">
            <p>Комментарии</p>
        </div>
        <div class="comments__textarea">
            <textarea class="comments__textarea" cols="30" rows="10" v-model="comments"></textarea>

        </div>
        <div class="comment__btn">
            <button-post @click="addComment">Отправить</button-post>
        </div>
        <ul class="comments__list" v-for="comment in commentsList">
            <li class="comments__item">
                <p class="comments__item-author">
                    <img 
                    class="comments__item-author-img" 
                    src="https://firebasestorage.googleapis.com/v0/b/dtv-db.appspot.com/o/images%2Ficon.webp?alt=media&token=ff081943-5555-43a5-85d2-a79bc23b7092"
                    alt="">
                    <p class="comments__item-author-name">Имя пользователя</p>
                </p>
                <p class="comments__item-content">{{ comment }}</p> 
            </li>
        </ul>
    </div>
</template>

<script>
import db from '@/firebase.js';
   
export default {
    props: {
        id_post: {
            type: Number,
            required: true,
        }
    },
    data() {
        return {
            comments: '',
            commentsList: [],
        }
    },
    methods: {
        addComment() {
            console.log(this.commentsList)
            this.commentsList.push(this.comments);
            this.updateInFirebase();
            this.comments = '';
        },
        updateInFirebase() {
            db.collection("/posts").doc(String(this.id_post)).update({comments: this.commentsList})
        }
    },
    mounted() {
        db.collection("/posts").where("id", "==", this.id_post).onSnapshot(ref => ref.docChanges().forEach(change => {
            const { i, j, doc, type } = change;
            this.commentsList = doc.data().comments;
        }));
    }
}
</script>

<style>
.comments {
    margin-bottom: 60px;
}
.comments__title {
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4em;
    padding-bottom: 32px;
}

.comments__textarea textarea {
    border: 1px solid rgba(0, 0, 0, .03);
    resize: none;
    line-height: 1.6em;
    background-color: #f7f7f7;
    padding: 12px 11px 11px;
    border-radius: 10px;
    height: 80px;
    min-width: 600px;
}

.comments__textarea {
    margin-left: auto;
    margin-right: auto;
}

.comment__btn {
    margin-left: auto;
    margin-right: 200px;
    margin-top: 10px;
}

.comments__list {
    margin-bottom: 20px;
}
.comments__item {
    list-style: none;
    margin-left: auto;
    margin-right: auto;
    margin-top: 32px;
    width: 600px;
}
.comments__item-content {
    font-size: 16px;
    font-weight: 300;
    font-family: Tahoma;
}
.comments__item-author {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}
.comments__item-author-img {
    width: 32px;
    height: 32px;
    border-radius: 15px;
    margin-right: 10px;
}
</style>