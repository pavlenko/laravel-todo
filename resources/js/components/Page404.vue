<template>
    <layout-mini>
    <div class="d-flex justify-content-center align-items-center bg-light min-vh-100">
        <section class="content flex-grow-1">
            <div class="error-page my-0 d-flex align-items-center">
                <h2 class="headline text-warning mr-5"> 404</h2>
                <div class="error-content m-0">
                    <h3><i class="fas fa-exclamation-triangle text-warning"></i> Oops! Page not found.</h3>
                    <p class="m-0">
                        We could not find the page you were looking for.
                        Meanwhile, you may return to
                        <router-link :to="{ name: 'home'}">dashboard</router-link>.
                    </p>
                </div>
            </div>
        </section>
    </div>
    </layout-mini>
</template>

<script>
import LayoutMini from "./LayoutMini";
export default {
    components: {LayoutMini}
}
</script>
