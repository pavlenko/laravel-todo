<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <div class="brand-link">
            <img src="/external/admin-lte/3.1.0/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
            <span class="brand-text font-weight-light">Laravel VUE</span>
        </div>
        <div class="sidebar">
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar nav-compact nav-flat flex-column" role="menu" data-accordion="false">
                    <!--TODO extract menu config somewhere-->
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
</template>

<script>
export default {
    name: "LayoutSidebar"
}
</script>
