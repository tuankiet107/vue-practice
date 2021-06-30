<template>
    <div class="update-component">
        <div class="title">
            <h3>Cập nhật bài viết</h3>
        </div>
        <div class="card p-5">
            <div class="form-create">
                <div class="mb-3">
                    <label class="form-label">Tên loại</label>
                    <input type="text" class="form-control" v-model="categoryName">
                </div>
                <div class="mb-3">
                    <label class="form-label">Miêu tả</label>
                    <input type="text" class="form-control" v-model="description">
                </div>
                <div class="mb-3">
                    <label class="form-label">Metadata</label>
                    <input type="text" class="form-control" v-model="meta">
                </div>
                <div class="mb-3">
                    <button @click="updateBlog" class="btn btn-outline-primary">Lưu</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from "axios";
export default {
    name: "PostComponent",
    data: function(){
        return {
            categoryName: "",
            description: "",
            meta: "",
            id: Math.floor(Math.random() * 1000)
        }
    },
    methods: {
        updateBlog(e){
            e.preventDefault();
            // axios.update(`http://api.vndevhost.com/api/v1/admin/categories/update`, )
            console.log(this.categoryName)
        }
    }
}
</script>

<style>

</style>