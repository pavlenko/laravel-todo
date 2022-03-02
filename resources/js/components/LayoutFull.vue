<template>
    <div class="sidebar-mini wrapper d-flex flex-column">
        <slot name="header">
            <layout-header></layout-header>
        </slot>
        <slot name="sidebar">
            <layout-sidebar></layout-sidebar>
        </slot>
        <slot>
            <layout-content></layout-content>
        </slot>
        <slot name="sidebar">
            <layout-footer></layout-footer>
        </slot>
    </div>
</template>

<script>
import LayoutHeader from './LayoutHeader';
import LayoutSidebar from './LayoutSidebar';
import LayoutContent from './LayoutContent';
import LayoutFooter from './LayoutFooter';

export default {
    components: {LayoutHeader, LayoutSidebar, LayoutContent, LayoutFooter}
}
</script>
