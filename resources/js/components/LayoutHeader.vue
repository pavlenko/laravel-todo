<template>
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#" role="button">
                    <i class="fas fa-bars"></i>
                </a>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown user-menu">
                <a href="#" class="nav-link dropdown-toggle pr-0" data-toggle="dropdown">
                    <img src="/external/admin-lte/3.1.0/img/user2-160x160.jpg" class="user-image img-circle elevation-1"  alt="User Image">
                    <span class="d-none d-md-in-line">Alexander Pierce</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <li class="mx-3 my-2 d-flex align-items-center">
                        <img src="/external/admin-lte/3.1.0/img/user2-160x160.jpg" style="width: 3rem; height: auto" class="img-circle elevation-1" alt="User Image">
                        <div class="ml-3">
                            Alexander Pierce
                            <div class="text-muted text-xs">Web Developer</div>
                        </div>
                    </li>
                    <div class="dropdown-divider mx-2"></div>
                    <a class="dropdown-item" href="#">Log out</a>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "LayoutHeader"
}
</script>
