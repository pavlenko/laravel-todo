<template>
    <div class="wrapper">
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                </li>
            </ul>
        </nav>
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <span class="brand-link">
                <span class="brand-text font-weight-light">Laravel VUE</span>
            </span>
            <div class="sidebar">
                <nav class="mt-2 nav-compact nav-flat">
                    <ul class="nav nav-pills nav-sidebar flex-column" role="menu" data-accordion="false">
                        <router-link :to="{ name: 'home'}" exact v-slot="{ href, navigate, isExactActive }">
                            <li class="nav-item">
                                <a :href="href" class="nav-link" :class="[isExactActive && 'active']" @click="navigate">
                                    <i class="nav-icon fas fa-home"></i>
                                    Home
                                </a>
                            </li>
                        </router-link>
                        <router-link :to="{ name: 'desks'}" v-slot="{ href, navigate, isActive }">
                            <li class="nav-item">
                                <a :href="href" class="nav-link" :class="[isActive && 'active']" @click="navigate">
                                    <i class="nav-icon fas fa-columns"></i>
                                    Desks
                                </a>
                            </li>
                        </router-link>
                    </ul>
                </nav>
            </div>
        </aside>
        <router-view></router-view>
        <footer class="main-footer">
            <strong>Copyright &copy; 2022. All rights reserved.</strong>
        </footer>
    </div>
</template>

<script>
import Desks from "./Desks";

export default {
    name: "App",
    components: {Desks},
    mounted() {
        setTimeout(() => {
            console.log($('[data-widget="pushmenu"]').PushMenu);
            //$('[data-widget="pushmenu"]').PushMenu({});
        }, 1000)
    }
}
</script>
