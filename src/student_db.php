<?php
    require_once('db.php') ;

    function add($id, $fullname, $email, $faculty, $dob, $phone)
    {      
        $connect = openConnection() ;

        $stm = $connect->prepare('insert into students(id, fullname, email, faculty, dob, phone) values(?, ?, ?, ?, ?, ?)') ;
        $stm->bind_param('ssssss', $id, $fullname, $email, $faculty, $dob, $phone) ;

        $stm->execute();

        return $stm->affected_rows == 1 ;
    }

    function get()
    {
        $connect = openConnection() ;

        $result = $connect->query('select * from students') ; 
        
        $students = array() ;

        while($row = $result->fetch_assoc())
            $students[] = $row ;
        
        return $students ;
    }

    function delete($id)
    {
        $connect = openConnection() ;

        $stm = $connect->prepare('delete from students where id = ?') ;
        $stm->bind_param('s', $id) ;

        $stm->execute() ;

        return $stm->affected_rows == 1 ; // delete success or fail
    }

    function update($old_id, $new_id, $fullname, $email, $faculty, $dob, $phone)
    {
        $connect = openConnection() ;

        $stm = $connect->prepare('update students set id = ?, fullname = ?, email = ?, faculty = ?, dob = ?, phone = ? where id = ?') ;
        $stm->bind_param('sssssss', $new_id, $fullname, $email, $faculty, $dob, $phone, $old_id) ;

        $stm->execute() ;

        return $stm->affected_rows == 1 ;
    }
?>