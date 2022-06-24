import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import About from "@/pages/About";
import PostsPage from "@/pages/PostsPage";
import PostIdPage from "@/pages/PostIdPage";


const routes = [
    { path: '/', component: Main },
    { path: '/posts', component: PostsPage },
    { path: '/about', component: About },
    { path: '/posts/:id', component: PostIdPage },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;