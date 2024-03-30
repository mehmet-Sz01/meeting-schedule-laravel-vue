<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Home',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/sys' }]
    },
    {
        label: 'Menu',
        items: [
            { label: 'Users', icon: 'pi pi-fw pi-user-plus', to: '/sys/users' },
            { label: 'Create Meeting', icon: 'pi pi-plus', to: '/sys/create-meeting' },
            { label: 'Scheduled Meetings', icon: 'pi pi-calendar', to: '/sys/scheduled-meetings' },


        ]
    },


]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>

    </ul>
</template>

<style lang="scss" scoped></style>
