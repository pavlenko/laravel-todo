<template>
    <div class="wrapper">
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                </li>
            </ul>
        </nav>
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <span class="brand-link">
                <span class="brand-text font-weight-light">Laravel VUE</span>
            </span>
            <div class="sidebar">
                <nav class="mt-2 nav-compact nav-flat">
                    <ul class="nav nav-pills nav-sidebar flex-column" role="menu" data-accordion="false">
                        <router-link :to="{ name: 'home'}" exact v-slot="{ href, navigate, isExactActive }">
                            <li class="nav-item">
                                <a :href="href" class="nav-link" :class="[isExactActive && 'active']" @click="navigate">
                                    <i class="nav-icon fas fa-home"></i>
                                    Home
                                </a>
                            </li>
                        </router-link>
                        <router-link :to="{ name: 'desks'}" v-slot="{ href, navigate, isActive }">
                            <li class="nav-item">
                                <a :href="href" class="nav-link" :class="[isActive && 'active']" @click="navigate">
                                    <i class="nav-icon fas fa-columns"></i>
                                    Desks
                                </a>
                            </li>
                        </router-link>
                    </ul>
                </nav>
            </div>
        </aside>
        <router-view></router-view>
        <footer class="main-footer">
            <strong>Copyright &copy; 2022. All rights reserved.</strong>
        </footer>
    </div>
</template>

<script>
import Desks from "./Desks";

export default {
    name: "App",
    components: {Desks},
    mounted() {
        var events = {
                // Element is chosen
                onChoose: function (/**Event*/evt) {
                    console.log('onChoose', evt);  // element index within parent
                },

                // Element dragging started
                onStart: function (/**Event*/evt) {
                    console.log('onStart', evt);  // element index within parent
                },

                // Element dragging ended
                onEnd: function (/**Event*/evt) {
                    console.log('onEnd', evt);
                    var itemEl = evt.item;  // dragged HTMLElement
                    evt.to;    // target list
                    evt.from;  // previous list
                    evt.oldIndex;  // element's old index within old parent
                    evt.newIndex;  // element's new index within new parent
                },

                // Element is dropped into the list from another list
                onAdd: function (/**Event*/evt) {
                    console.log('onAdd', evt)
                },

                // Changed sorting within list
                onUpdate: function (/**Event*/evt) {
                    console.log('onUpdate', evt)
                },

                // Called by any change to the list (add / update / remove)
                onSort: function (/**Event*/evt) {
                    //console.log('onSort', evt)
                },

                // Element is removed from the list into another list
                onRemove: function (/**Event*/evt) {
                    console.log('onRemove', evt)
                },

                // Attempt to drag a filtered element
                onFilter: function (/**Event*/evt) {
                    var itemEl = evt.item;  // HTMLElement receiving the `mousedown|tapstart` event.
                },

                // Event when you move an item in the list or between lists
                onMove: function (/**Event*/evt, /**Event*/originalEvent) {
                    // Example: http://jsbin.com/tuyafe/1/edit?js,output
                    evt.dragged; // dragged HTMLElement
                    evt.draggedRect; // TextRectangle {left, top, right и bottom}
                    evt.related; // HTMLElement on which have guided
                    evt.relatedRect; // TextRectangle
                    originalEvent.clientY; // mouse position
                    // return false; — for cancel
                },

                // Called when creating a clone of element
                onClone: function (/**Event*/evt) {
                    var origEl = evt.item;
                    var cloneEl = evt.clone;
                }
            };
    }
}
</script>
