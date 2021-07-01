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
                    <button @click="onClick" class="btn btn-outline-primary">Lưu</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "UpdateComponent",
    data: function(){
      return {
        blog: {
          id: this.$route.params.id,
          categoryName: "",
          description: "",
          meta: "",
        },
      }
    },
    computed: mapGetters(['blogItem']),
    methods: {
        ...mapActions(['updateBlog', 'getBlog']),
        onClick(){
            this.updateBlog(this.blog);
            setTimeout(() => {
                this.$router.push({ name: 'BlogsComponent'});
            },100)

        }
    },
    created(){
        this.getBlog(this.blog.id);
        setTimeout(() => {
            this.blog.categoryName = this.blogItem.categoryName;
            this.blog.description = this.blogItem.description;
            this.blog.meta = this.blogItem.meta;
        },100)
    }
}
</script>

<style>

</style>