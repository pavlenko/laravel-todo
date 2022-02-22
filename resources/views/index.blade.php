<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Hello, world!</title>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <link rel="stylesheet" href="{{ url('/external/admin-lte/3.1.0/css/adminlte.min.css') }}">
    <script>
        window.__baseURL = '{{ url('/') }}';
        window.__appLogo = '{{ url('/images/AdminLTELogo.png') }}';
    </script>
</head>
<body class="sidebar-mini layout-fixed">
    <div id="app"></div>
    <script src="{{ mix('js/manifest.js') }}"></script>
    <script src="{{ mix('js/vendor.js') }}"></script>
<!--    <script src="{{ url('/external/admin-lte/3.1.0/js/adminlte.min.js') }}"></script>-->
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
