<?php
    header('Content-Type: application/json') ;
    require_once('../student_db.php') ;

    if($_SERVER['REQUEST_METHOD'] != 'POST')
        die(json_encode(array('code' => 1, 'error' => 'Add API is accept POST method only'))) ;
    else if(isset($_POST['id']) && isset($_POST['fullname']) && isset($_POST['email'])
         && isset($_POST['faculty']) && isset($_POST['dob']) && isset($_POST['phone']))
    {
        $id = $_POST['id'] ;
        $fullname = $_POST['fullname'] ;
        $email = $_POST['email'] ;
        $faculty = $_POST['faculty'] ;
        $dob = $_POST['dob'] ;
        $phone = $_POST['phone'] ;

        if(empty($id) || empty($fullname) || empty($email)
        || empty($faculty) || empty($dob) || empty($phone))
            die(json_encode(array('code' => 2, 'error' => 'Please enter full information'))) ;
        else
        {
            $result = add($id, $fullname, $email, $faculty, $dob, $phone) ;

            if($result != -1)
                die(json_encode(array('code' => 0, 'message' => 'Add student success'))) ;
            else
                die(json_encode(array('code' => 4, 'error' => 'Something is wrong. Please try again.'))) ;
        }
    }
    else
        die(json_encode(array('code' => 3, 'error' => 'One of the information is not sent'))) ;
?>