import Vue from "vue";
import Router from "vue-router";
import BlogsComponent from "@/components/BlogsComponent/BlogsComponent";
import PostComponent from "@/components/PostComponent/PostComponent";
import UpdateComponent from "@/components/UpdateComponent/UpdateComponent";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "BlogsComponent",
      component: BlogsComponent,
    },
    {
      path: "/update/:id",
      name: "UpdateComponent",
      component: UpdateComponent,
    },
    {
      path: "/post",
      name: "PostComponent",
      component: PostComponent,
    },
    {
      path: "/details/:id",
      name: "BlogItemComponent",
      component: PostComponent,
    },
  ],
});
