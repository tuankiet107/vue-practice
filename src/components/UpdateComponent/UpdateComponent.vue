<template>
    <div class="update-component">
        <div class="title">
            <h3>Cập nhật bài viết</h3>
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
                    <button @click="updateBlog" class="btn btn-outline-primary">Lưu</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "UpdateComponent",
    data: function(){
      return {
        blog: {
          id: 0,
          categoryName: "",
          description: "",
          meta: "",
        },
      }
    },
    created(){
      // this.blog.id = this.$route.params.id;
      // axios.get(`http://api.vndevhost.com/api/v1/admin/categories/details`, {id: this.$route.params.id})
      // .then(res => {
      //   console.log(res.data);
      // }).catch(error => console.log(error))
    },
    methods: {
        updateBlog(e){
            e.preventDefault();
            axios.put(`http://api.vndevhost.com/api/v1/admin/categories/update`, this.blog)
            .then(() => {
              this.$router.push({ name: 'BlogsComponent', query: { redirect: '/' } });
            }).catch(error => {
                console.log(error);
            })
        }
    }
}
</script>

<style>

</style>