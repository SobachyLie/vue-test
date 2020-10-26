import { createWebHistory, createRouter } from "vue-router";
import List from "@/view/List";
import Trash from "@/view/Trash";

const routes = [
    {
        path: "/",
        name: "Home",
        component: List,
    },
    {
        path: "/trash",
        name: "About",
        component: Trash,
    },
];

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes,
});
export default router;