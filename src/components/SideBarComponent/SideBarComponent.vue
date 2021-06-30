<template>
  <div class="sidebar-component">
    <h5>Administrator</h5>
    <ul>
      <li>
        <router-link to="/">Blog</router-link>
      </li>
      <li>
        <router-link to="/">Danh mục bài viết</router-link>
      </li>
      <li>
        <router-link to="/">Bài viết</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideBarComponent"
}
</script>

<style lang="scss" scope>
.sidebar-component{
  padding: 20px 0;
  height: 100vh;
  h5{
    text-transform: uppercase;
    text-align: center;
    color: #fff;
  }
  ul{
    padding: 0;
    li{
      list-style: none;
      cursor: pointer;
      &:hover{
        background-color: #205a8a;
      }
      a{
        color: #fff;
        text-decoration: none;
        display: block;
        padding: 10px 0 10px 25px;
      }
    }
  }
}
</style>