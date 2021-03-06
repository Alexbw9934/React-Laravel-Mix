<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- mix stylesheet -->
    <link rel="stylesheet" href="{{ mix('/dist/css/app.css') }}">
    <!-- end mix stylesheet -->
    
    <!-- mix include -->
    <script src="{{ mix('/dist/js/index.js') }}" defer></script>
    <script src="{{ mix('/dist/js/manifest.js') }}" defer></script>
    <script src="{{ mix('/dist/js/vendor.js') }}" defer></script>
    <!-- end mix include -->
</head>
<body>
    <div id="root"></div>
</body>
</html>

