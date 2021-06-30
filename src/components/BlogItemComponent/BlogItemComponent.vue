 <template>
  <div class="blog-item"></div>
</template>

<script>
import axios from "axios";
export default {
    data: function(){
    return {
      blogs: [],
    }
  },
  created() {
    // axios.get(`http://api.vndevhost.com/api/v1/admin/categories/details/${}`)
    // .then(response => {
    //   this.blogs = response.data.data;
    //   console.log(this.blogs)
    // })
    // .catch(e => {
    //   console.log(e)
    // })
    console.log(this.$router.params.id)
  },
}
</script>

<style>

</style>