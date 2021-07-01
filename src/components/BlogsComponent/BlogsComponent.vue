<template>
  <div class="blogs-component">
    <!-- <div class="col-md-12"> -->
      <!-- DATA TABLE -->
      <h3 class="title-5 m-b-35">Danh mục bài viết</h3>
      <div class="table-data__tool">
        <div class="table-data__tool-right">
          <router-link :to="{ name: 'PostComponent' }">
            <button class="btn btn-outline-primary">
              Thêm mới
            </button>
          </router-link>
        </div>
      </div>
      <div class="card mt-3">
        <table class="table">
          <thead>
          <tr>
            <th>#</th>
            <th>Tên loại</th>
            <th>Miêu tả</th>
            <th>Meta</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in allBlogs" :key="index">
            <td>{{  index + 1 }}</td>
            <td>{{ item.categoryName }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.meta }}</td>
            <td class="action">
              <router-link class="btn btn-edit" :to="{ name: 'UpdateComponent', params: {id: item.id} }">Sửa</router-link>
              <button class="btn btn-danger btn-delete" @click="deleteItem(item.id)">Xóa</button>
            </td>
          </tr>
          <tr class="spacer"></tr>
          </tbody>
        </table>
      </div>
      <!-- END DATA TABLE -->
  <!-- </div> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'BlogsComponent',
  computed: mapGetters(['allBlogs']),
  methods: {
    ...mapActions(['getBlogs', 'deleteBlog']),
    async deleteItem(id) {
      this.deleteBlog(id);
      setTimeout(() => {
        this.getBlogs();
      },100)
    }
  },
  created() {
    this.getBlogs();
  },
}
</script>

<style lang="scss" scope>
.card{
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px !important;
  table{
    tr{
      text-align: center;
    }
    .action{
      .btn-delete{
        margin: 0 5px;
      }
      .btn-edit{
        border: 1px solid #3387f5;
        &:hover{
          background-color: #1461c5;
          color: #fff;
        }
      }
    }
  }
}
</style>