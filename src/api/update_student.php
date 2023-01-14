<?php
    header('Content-Type: application/json') ;
    require_once('../student_db.php') ;

    if($_SERVER['REQUEST_METHOD'] != 'PUT')
        die(json_encode(array('code' => 1, 'error' => 'Update API is accept PUT method only'))) ;
    
    $raw = file_get_contents('php://input') ;
    $json = json_decode($raw) ;

    if($json->old_id == null || $json->new_id == null || $json->fullname == null || $json->email == null
    || $json->faculty == null || $json->dob == null || $json->phone == null)
        die(json_encode(array('code' => 2, 'error' => 'Please enter full information'))) ;
    
    $old_id = $json->old_id ;
    $new_id = $json->new_id ;
    $fullname = $json->fullname ;
    $email = $json->email ;
    $faculty = $json->faculty ;
    $dob = $json->dob ;
    $phone = $json->phone ;
    
    $result = update($old_id, $new_id, $fullname, $email, $faculty, $dob, $phone) ;

    if(!$result)
        die(json_encode(array('code' => 0, 'message' => 'id not found'))) ;
    
    die(json_encode(array('code' => 0, 'message' => 'Update student success'))) ;
?>