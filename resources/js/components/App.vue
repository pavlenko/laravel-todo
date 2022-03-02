<template>
    <div>
        <router-view></router-view>
        <router-view name="modal"><!--TODO modal view--></router-view>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>
