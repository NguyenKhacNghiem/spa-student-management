<?php
    header('Content-Type: application/json') ;
    require_once('../student_db.php') ;

    if($_SERVER['REQUEST_METHOD'] != 'GET')
        die(json_encode(array('code' => 1, 'error' => 'Get API is accept GET method only'))) ;

    $result = get() ;

    if($result == null)
        die(json_encode(array('code' => 0, 'message' => 'List of student is empty'))) ;

    die(json_encode(array('code' => 0, 'message' => 'Get student success.', 'data' => $result))) ;
?>