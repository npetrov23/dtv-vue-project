import Main from "@/pages/Main"
import PostPage from "@/pages/PostPage"
import PostDetail from "@/pages/PostDetail"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/feed',
        component: PostPage
    },
    {
        path: '/feed/:id',
        component: PostDetail
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;