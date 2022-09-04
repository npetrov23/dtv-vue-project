<template>
    <div class="form-create">

        <input 
        v-model="post.title" 
        @click.stop class="form-create__create-title"
        :maxlength="limit"
        type="text" 
        placeholder="Заголовок"
        >

        <input @click.stop class="inputfile" name="file" id="file" type="file" ref="imageFile" @change="handlerFile()" accept="image/jpeg,image/png"> 
        <label for="file">Загрузите изображение</label>

        <textarea 
        v-model="post.content" 
        @click.stop class="form-create__create-content" 
        type="text" 
        placeholder="Основной текст"
        ></textarea>

        <div class="form-button">
            <button-post 
            @click="createPost"
            v-model:lockedForm="lockCreatedPost"
            >Опубликовать</button-post>
            <div class="loading" v-if="onloadImg">Загрузка фотографии...</div>
        </div>  
    </div>


</template>
<script>
import { getDownloadURL, getStorage, ref, uploadBytes } from '@firebase/storage';


export default {

    data() {
        return {
            post: {
                id: '',
                title: '',
                content: '',
                img: ''
            },
            limit: 90,
            file: "",
            uploadImg: false,
            onloadImg: false,
        }
    },
    methods: {
        createPost() {
            let description = this.post.content.slice(0, 300);
            if (description.length < this.post.content.length) {
                description += '...';
            }

            let newPost = {
                id: Date.now(),
                title: this.post.title,
                description: description,
                img: this.post.img,
                content: this.post.content,
            }
            
            this.$emit('create', newPost);
            this.$emit('update:show', false)
            this.post = {
                title: '',
                description: '',
                content: '',
                img: ''
            };
        },

        handlerFile(){
            this.file = this.$refs.imageFile.files[0];
            this.uploadFileFirebase();
        },

        async uploadFileFirebase() {
            this.onloadImg = true;
            let storage = getStorage();
            const storageRef = await ref(storage, "images/" + this.file.name);
 
            await uploadBytes(storageRef, this.file);
            await function () {
                var newFileRef = push(databaseReference);
            
                set(newFileRef, {
                    "name": this.file.name
                });
            }

            this.post.img = await getDownloadURL(storageRef);
            this.onloadImg = false;
        },

  },
  computed: {
    lockCreatedPost() {
        if(this.post.img !== "" && this.post.title !== "") {
            return false;
        }
        else {
            return true;
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
    /* margin-top: 60px; */
    position: relative;
    /* margin-bottom: 50px; */
}
.inputfile {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}
.inputfile + label {
    color: white;
    background-color: rgba(70,131,217,0.05);
    display: inline-block;
    padding: 40px 25px;
    width: 80%;
    /* opacity: 0.2; */
    font-size: 20px;
    border-radius: 8px;
    text-align: center;
    color: #4683d9;
    font-weight: 400;
    font-family: Tahoma;
}

.inputfile:focus + label,
.inputfile + label:hover {
    background-color: rgba(70,131,217,0.10);
}
.inputfile + label {
	cursor: pointer; /* "hand" cursor */
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
    padding-top: 20px;
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
    margin-top: 100px;
    margin-right: auto;
    margin-left: 91px;
    padding-bottom: 30px;
}

 
.input__file-button-text {
  line-height: 1;
  margin-top: 1px;
}
 
.input__file-button {
  width: 100%;
  max-width: 290px;
  height: 60px;
  background: #1bbc9b;
  color: #fff;
  font-size: 1.125rem;
  font-weight: 700;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  border-radius: 3px;
  cursor: pointer;
  margin: 0 auto;
}
</style>