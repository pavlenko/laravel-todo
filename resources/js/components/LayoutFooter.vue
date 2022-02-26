<template>
    <footer class="main-footer">
        <strong>{{ copy }}</strong>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            copy: 'Copyright &copy; __YEAR__. All rights reserved.'.replace('__YEAR__', new Date().getFullYear())
        };
    }
}
</script>
