<?php
    header('Content-Type: application/json') ;
    require_once('../student_db.php') ;

    if($_SERVER['REQUEST_METHOD'] != 'DELETE')
        die(json_encode(array('code' => 1, 'error' => 'Delete API is accept DELETE method only'))) ;
    
    $raw = file_get_contents('php://input') ;  
    $json = json_decode($raw) ;  

    if($json->id == null)
        die(json_encode(array('code' => 2, 'error' => 'id is empty'))) ;
    
    $id = $json->id ;
    $result = delete($id) ;

    if(!$result)
        die(json_encode(array('code' => 0, 'message' => 'id not found !'))) ;
      
    die(json_encode(array('code' => 0, 'message' => 'Delete student success'))) ;
?>