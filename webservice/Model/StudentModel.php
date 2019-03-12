<?php
require_once("BaseModel.php");
class studentModel extends BaseModel{
    
     
    function __construct(){
        if(!static::$db){
            static::$db = mysqli_connect($this->host, $this->username, $this->password, $this->db_name);
            mysqli_set_charset(static::$db,"utf8");
        }
    }

    function getData59TO(){

        $sql  = 'SELECT
        *
    FROM
        student
    LEFT JOIN
        branch
    ON
        student.Branchcode = branch.Branchcode
    LEFT JOIN
        faculty
    ON
        student.FacultyCode = faculty.Facultycode
    LEFT JOIN
        course
    ON
        student.Coursecode = course.Coursecode
    LEFT JOIN
        advisors
    ON
        student.Teachercode = advisors.Teachercode
        LEFT JOIN
        studygroup
    ON
        studygroup.Coursecode = course.Coursecode 
        WHERE  studygroup.Groupcode = 59231 AND student.AcademicYear = 2559
        GROUP BY student.ID';
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            $data = [];
            while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
                $data[] = $row;
            }
            $result->close();
            return $data;
        }
    }

    function getData60TO(){

        $sql  = 'SELECT
        *
    FROM
        student
    LEFT JOIN
        branch
    ON
        student.Branchcode = branch.Branchcode
    LEFT JOIN
        faculty
    ON
        student.FacultyCode = faculty.Facultycode
    LEFT JOIN
        course
    ON
        student.Coursecode = course.Coursecode
    LEFT JOIN
        advisors
    ON
        student.Teachercode = advisors.Teachercode
        LEFT JOIN
        studygroup
    ON
        studygroup.Coursecode = course.Coursecode 
        WHERE  studygroup.Groupcode = 60231 AND student.AcademicYear = 2560
        GROUP BY student.ID';
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            $data = [];
            while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
                $data[] = $row;
            }
            $result->close();
            return $data;
        }
    }

    function getData61TO(){

        $sql  = 'SELECT
        *
    FROM
        student
    LEFT JOIN
        branch
    ON
        student.Branchcode = branch.Branchcode
    LEFT JOIN
        faculty
    ON
        student.FacultyCode = faculty.Facultycode
    LEFT JOIN
        course
    ON
        student.Coursecode = course.Coursecode
    LEFT JOIN
        advisors
    ON
        student.Teachercode = advisors.Teachercode
        LEFT JOIN
        studygroup
    ON
        studygroup.Coursecode = course.Coursecode 
        WHERE  studygroup.Groupcode = 61231 AND student.AcademicYear = 2561
        GROUP BY student.ID';
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            $data = [];
            while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
                $data[] = $row;
            }
            $result->close();
            return $data;
        }
    }
    function getData59(){

        $sql  = 'SELECT
        *
    FROM
        student
    LEFT JOIN
        branch
    ON
        student.Branchcode = branch.Branchcode
    LEFT JOIN
        faculty
    ON
        student.FacultyCode = faculty.Facultycode
    LEFT JOIN
        course
    ON
        student.Coursecode = course.Coursecode
    LEFT JOIN
        advisors
    ON
        student.Teachercode = advisors.Teachercode
        LEFT JOIN
        studygroup
    ON
        studygroup.Coursecode = course.Coursecode 
        WHERE  studygroup.Groupcode = 59241 AND student.AcademicYear = 2559
        GROUP BY student.ID ';
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            $data = [];
            while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
                $data[] = $row;
            }
            $result->close();
            return $data;
        }
    }
    function getData60(){

        $sql  = 'SELECT
        *
    FROM
        student
    LEFT JOIN
        branch
    ON
        student.Branchcode = branch.Branchcode
    LEFT JOIN
        faculty
    ON
        student.FacultyCode = faculty.Facultycode
    LEFT JOIN
        course
    ON
        student.Coursecode = course.Coursecode
    LEFT JOIN
        advisors
    ON
        student.Teachercode = advisors.Teachercode
        LEFT JOIN
        studygroup
    ON
        studygroup.Coursecode = course.Coursecode 
        WHERE  studygroup.Groupcode = 60241 AND student.AcademicYear = 2560
        GROUP BY student.ID';
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            $data = [];
            while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
                $data[] = $row;
            }
            $result->close();
            return $data;
        }
    }
    function getData61(){

        $sql  = 'SELECT
        *
    FROM
        student
    LEFT JOIN
        branch
    ON
        student.Branchcode = branch.Branchcode
    LEFT JOIN
        faculty
    ON
        student.FacultyCode = faculty.Facultycode
    LEFT JOIN
        course
    ON
        student.Coursecode = course.Coursecode
    LEFT JOIN
        advisors
    ON
        student.Teachercode = advisors.Teachercode
        LEFT JOIN
        studygroup
    ON
        studygroup.Coursecode = course.Coursecode 
        WHERE  studygroup.Groupcode = 61241 AND student.AcademicYear = 2561
        GROUP BY student.ID';
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            $data = [];
            while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
                $data[] = $row;
            }
            $result->close();
            return $data;
        }
    }
   
    function getDataBY($ID){ 
        $PP = "$ID";
        $sql  = "SELECT
        *
    FROM
        student
    LEFT JOIN
        branch
    ON
        student.Branchcode = branch.Branchcode
    LEFT JOIN
        faculty
    ON
        student.FacultyCode = faculty.Facultycode
    LEFT JOIN
        course
    ON
        student.Coursecode = course.Coursecode
    LEFT JOIN
        advisors
    ON
        student.Teachercode = advisors.Teachercode
        LEFT JOIN
        studygroup
    ON
        studygroup.Coursecode = course.Coursecode 
        WHERE student.ID = '$ID'
        GROUP BY student.ID
        ";
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            $data = [];
            while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
                $data[] = $row;
            }
            $result->close();
            return $data;
        }
    }



    function getData(){ 

        $sql  = 'SELECT
        *
    FROM
        student
    LEFT JOIN
        branch
    ON
        student.Branchcode = branch.Branchcode
    LEFT JOIN
        faculty
    ON
        student.FacultyCode = faculty.Facultycode
    LEFT JOIN
        course
    ON
        student.Coursecode = course.Coursecode
    LEFT JOIN
        advisors
    ON
        student.Teachercode = advisors.Teachercode
        LEFT JOIN
        studygroup
    ON
        studygroup.Coursecode = course.Coursecode 
        GROUP BY student.ID';
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            $data = [];
            while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
                $data[] = $row;
            }
            $result->close();
            return $data;
        }
    }

}
  
