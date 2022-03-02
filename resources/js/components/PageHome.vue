<template>
    <layout-full>
        <layout-content>
            <template #content-title>Welcome</template>
        </layout-content>
    </layout-full>
</template>

<script>
import LayoutFull from "./LayoutFull";
import LayoutContent from "./LayoutContent";
export default {
    components: {LayoutFull, LayoutContent}
}
</script>
