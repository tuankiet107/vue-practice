<template>
    <div class="post-component">
        <div class="title">
            <h3>Tạo bài viết</h3>
        </div>
        <div class="card p-5">
            <div class="form-create">
                <div class="mb-3">
                    <label class="form-label">Tên loại</label>
                    <input type="text" class="form-control" v-model="blog.categoryName">
                </div>
                <div class="mb-3">
                    <label class="form-label">Miêu tả</label>
                    <input type="text" class="form-control" v-model="blog.description">
                </div>
                <div class="mb-3">
                    <label class="form-label">Metadata</label>
                    <input type="text" class="form-control" v-model="blog.meta">
                </div>
                <div class="mb-3">
                    <button @click="createBlog" class="btn btn-outline-primary">Tạo</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from "axios";
import { mapActions } from 'vuex';
export default {
    name: "PostComponent",
    data: function(){
        return {
            blog: {
                categoryName: "",
                description: "",
                meta: "",
                // id: Math.floor(Math.random() * 1000)
            }
        }
    },
    methods: {
        ...mapActions(['postBlog']),
        createBlog(){
            this.postBlog(this.blog);
            setTimeout(() => {
                this.$router.push({ name: 'BlogsComponent', query: { redirect: '/' } });    
            },100)
        }
    }
}
</script>

<style>

</style>