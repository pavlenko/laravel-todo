<template>
    <div class="wrapper">
        <slot name="header">
            <layout-header></layout-header>
        </slot>
        <!--TODO header/footer/sidebar/content (maybe content+title+breadcrumbs)-->
    </div>
</template>

<script>
import LayoutHeader from "./LayoutHeader";

export default {
    name: "LayoutFull",
    components: {LayoutHeader}
}
</script>
