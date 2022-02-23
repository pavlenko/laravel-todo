<template>
    <div class="wrapper">
        <layout-header></layout-header>
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <span class="brand-link">
                <img src="/external/admin-lte/3.1.0/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
                <span class="brand-text font-weight-light">Laravel VUE</span>
            </span>
            <div class="sidebar">
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar nav-compact nav-flat flex-column" role="menu" data-accordion="false">
                        <router-link :to="{ name: 'home'}" exact v-slot="{ href, navigate, isExactActive }">
                            <li class="nav-item">
                                <a :href="href" class="nav-link" :class="[isExactActive && 'active']" @click="navigate">
                                    <i class="nav-icon fas fa-home"></i>
                                    <p>Home</p>
                                </a>
                            </li>
                        </router-link>
                        <router-link :to="{ name: 'desks'}" v-slot="{ href, navigate, isActive }">
                            <li class="nav-item">
                                <a :href="href" class="nav-link" :class="[isActive && 'active']" @click="navigate">
                                    <i class="nav-icon fas fa-columns"></i>
                                    <p>Desks</p>
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
import LayoutHeader from "./LayoutHeader";
import Desks from "./Desks";

export default {
    name: "App",
    components: {LayoutHeader, Desks}
}
</script>
