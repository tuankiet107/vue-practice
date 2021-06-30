<template>
  <div id="app">
    <div class="row">
      <div class="col col-lg-2">
        <SideBarComponent />
      </div>
      <div class="col col-lg-10">
        <div class="container">
          <router-view/>
        </div>
      </div>
    
    </div>
  </div>
</template>

<script>
import SideBarComponent from "./components/SideBarComponent/SideBarComponent.vue";

export default {
  name: 'App',
  components: {
    SideBarComponent,
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app{
  .row{
    padding: 0;
    margin: 0;
    .col{
      padding: 0;
    }
    .col-lg-2{
      background-color: #5c9ccf;
    }
    .col-lg-10{
      padding-top: 15px;
    }
  }
}
</style>
