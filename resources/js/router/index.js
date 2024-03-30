import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from "@/layout/AppLayout.vue";
import HomeView from "@/views/HomeView.vue";
import Login from "@/pages/Login.vue";
import AppScheduledMeetings from "@/views/AppScheduledMeetings.vue";
import Users from "@/views/AppUsers.vue";
import store from "../store/index.js";
import AppCreateMeeting from "@/views/AppCreateMeeting.vue";

const routes = [

    {
        path : '/sys',
        component :AppLayout,
        children :  [
            {
                path : '/sys',
                component :HomeView
            },

            {
                path: '/sys/users',
                name: 'users',
                component:Users
            },
            {
                path: '/sys/scheduled-meetings',
                component: AppScheduledMeetings,
                name: 'scheduled-meetings'
            },
            {
                path: '/sys/create-meeting',
                component: AppCreateMeeting,
                name: 'create-meeting'
            }

        ]
    },
    {
        path: '/login',
        component:Login,
        name : 'login',

    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
    try {
        await store.dispatch('authenticate');
        if (store.getters.authenticated || to.name === 'login') {
            next();
        } else {
            next({ name: 'login' });
        }
    } catch (error) {
        console.error('Authentication error:', error);
        next({ name: 'login' });
    }
});

export default router;
