import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import About from "@/pages/About";
import PostsPage from "@/pages/PostsPage";
import PostIdPage from "@/pages/PostIdPage";
import PostPageWithStore from "@/pages/PostPageWithStore";
import PostPageCompositionApi from "@/pages/PostPageCompositionApi";


const routes = [
    { path: '/', component: Main },
    { path: '/posts', component: PostsPage },
    { path: '/about', component: About },
    { path: '/posts/:id', component: PostIdPage },
    { path: '/store', component: PostPageWithStore },
    { path: '/composition', component: PostPageCompositionApi },

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;