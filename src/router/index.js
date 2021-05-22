import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Jobs from "../views/jobs/Jobs.vue";
import JobDetail from "../views/jobs/JobDetail.vue";
import NotFound from '../views/NotFound.vue';
import Details from "../components/Detail.vue";
import Create from "../components/Create.vue";
import Tag from "../views/Tag.vue";
import ReTag from '../views/ReTag.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetail,
    props:true
  },
  {
    path:"/reTags/:tag",
    name:'reTag',
    component:ReTag
  },
  {
    path:'/posts/:id',
    name:'Details',
    component:Details,
    props:true
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/tags/:tag',
    name: 'Tag',
    component: Tag
  },
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component:NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
