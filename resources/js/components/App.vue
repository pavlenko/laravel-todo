<template>
    <div class="wrapper">
        <layout-header></layout-header>
        <layout-sidebar></layout-sidebar>
        <router-view></router-view>
        <footer class="main-footer">
            <strong>Copyright &copy; 2022. All rights reserved.</strong>
        </footer>
    </div>
</template>

<script>
import LayoutHeader from "./LayoutHeader";
import LayoutSidebar from "./LayoutSidebar";
import Desks from "./Desks";

export default {
    name: "App",
    components: {LayoutHeader, LayoutSidebar, Desks}
}
</script>
