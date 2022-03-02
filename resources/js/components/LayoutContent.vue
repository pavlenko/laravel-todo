<template>
    <div class="content-wrapper flex-grow-1 d-flex flex-column">
        <!--TODO allow set classes to wrapper-->
        <section class="content-header">
            <div class="container-fluid">
                <div class="pb-1 mt-0 mb-0 border-bottom">
                    <h1><slot name="content-title"></slot></h1>
                </div>
                <!--TODO title-->
                <!--TODO breadcrumbs-->
            </div>
        </section>
        <section class="content">
            <!--TODO content-->
        </section>
    </div>
</template>

<script>
export default {
    //TODO subcomponents or move full markup to parent component
}
</script>
