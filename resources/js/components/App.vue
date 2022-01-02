<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <router-link :to="{ name: 'home'}" exact v-slot="{ href, navigate, isExactActive }">
                        <li class="nav-item" :class="[isExactActive && 'active']">
                            <a class="nav-link" :href="href" @click="navigate">Home</a>
                        </li>
                    </router-link>
                    <router-link :to="{ name: 'desks'}" v-slot="{ href, navigate, isActive }">
                        <li class="nav-item" :class="[isActive && 'active']">
                            <a class="nav-link" :href="href" @click="navigate">Desks</a>
                        </li>
                    </router-link>
                </ul>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
import Desks from "./Desks";

export default {
    name: "App",
    components: {Desks}
}
</script>
