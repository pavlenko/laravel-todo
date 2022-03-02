<template>
    <layout-full>
        <layout-content>
            <template #content-title>Welcome</template>
        </layout-content>
    <!--<div class="content-wrapper flex-grow-1 d-flex flex-column">
        <section class="content-header">
            <div class="container-fluid">
                <div class="pb-1 mt-0 mb-0 border-bottom">
                    <h1>We-lcome</h1>
                </div>
            </div>
        </section>
    </div>-->
    </layout-full>
</template>

<script>
import LayoutFull from "./LayoutFull";
import LayoutContent from "./LayoutContent";
export default {
    components: {LayoutFull, LayoutContent}
}
</script>
