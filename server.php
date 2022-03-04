<?php
$_POST = json_decode('{"foo":"bar"}', true);
echo var_dump($_POST);