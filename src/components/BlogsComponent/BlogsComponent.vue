<template>
  <div class="blogs-component">
    <!-- <div class="col-md-12"> -->
      <!-- DATA TABLE -->
      <h3 class="title-5 m-b-35">Danh mục bài viết</h3>
      <div class="table-data__tool">
        <div class="table-data__tool-right">
          <button class="btn btn-outline-primary">
            <i class="zmdi zmdi-plus"></i>Thêm mới</button>
        </div>
      </div>
      <div class="table-responsive table-responsive-data2">
        <table class="table table-data2 table-responsive">
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
            <tr v-for="(item, index) in blogs" :key="index">
            <td>{{  index + 1 }}</td>
            <td>{{ item.categoryName }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.meta }}</td>
            <td class="action">
              <router-link class="btn btn-edit" :to="{ name: 'UpdateComponent' }">Sửa</router-link>
              <button class="btn btn-danger btn-delete" @click="deleteItem(item.id)">Xóa</button>
              <button class="btn btn-outline-primary btn-detail">Chi tiết</button>
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
import axios from 'axios';
export default {
  name: 'Blog',
  data: function(){
    return {
      blogs: [],
    }
  },
  created() {
    axios.get("http://api.vndevhost.com/api/v1/admin/categories/get")
    .then(response => {
      this.blogs = response.data.data;
      console.log(this.blogs)
    })
    .catch(e => {
      console.log(e)
    })
  },
  methods: {
    deleteItem(id) {
      // axios.delete(`http://api.vndevhost.com/api/v1/admin/categories/delete/${id}`)
      // .then(res => {
      //   console.log(res.data);
      // })
      console.log(id)
    }
  }
}
</script>

<style lang="scss" scope>
  table{
    tr{
      text-align: center;
    }
    .action{
      .btn-delete{
        margin: 0 5px;
      }
    }
  }
</style>