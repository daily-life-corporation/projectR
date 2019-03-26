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


    function getDatasara(){

        $sql  = 'SELECT
        COUNT(student.Schoolname)  AS countschool,  student.Schoolname 
    FROM
        student 
        WHERE student.Schoolname LIKE "%วิทยาลัย%"
        GROUP BY student.Schoolname 
        ORDER BY countschool  DESC LIMIT 5';
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
   

    function getDatakom(){

        $sql  = 'SELECT
        Student.GraduationBranch ,COUNT(student.GraduationBranch)  AS COUNTBranch,student.Schoolname
    FROM
        Student
    GROUP BY student.Schoolname  
    ORDER BY  student.GraduationBranch  DESC';
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

    // ส่งค่ามาแล้วไปค้นหา
    function search($ID){
      $sql = "SELECT
      *
  FROM
      `student`
  WHERE
      ID LIKE '%$ID%' OR FirstnameTH LIKE '%$ID%' 
      OR FirstnameEN LIKE '%$ID%' 
      OR LastnameTH LIKE '%$ID%' 
      OR LastnameEN LIKE '%$ID%'
      OR Idcard LIKE '%$ID%'
       ";
         if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
          $data = [];
          while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
              $data[] = $row;
          }
          $result->close();
          return $data;
      }

    }
    
    function deleteStudent($ID) {
        $sql = "DELETE FROM `student` WHERE `student`.`ID` = '$ID'
        ";
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
       
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return mysqli_insert_id(static::$db);
        }else {
            return 0;
        }
    }
    
    
    function updateStudent($data) {
      
        $sql = "UPDATE `student` SET `ID` = '".$data['id']."', `Prefix` = '".$data['Prefix']."', `FirstnameTH` = '".$data['First']."',
         `LastnameTH` = '".$data['Last']."', `FirstnameEN` = '".$data['FirstEN']."',
         `LastnameEN` = '".$data['LastEN']."', `Nickname` = '".$data['Nickname']."',
         `Idcard` = '".$data['IDcad']."', `Birthday` = '".$data['Date']."',
         `Blood` = '".$data['Blood']."', `Cell` = '".$data['Cell']."', `GraduationBranch` = '".$data['GraduationBranch']."',
         `GraduationDegree` = '".$data['GraduationDegree']."', `GPA` = '".$data['GPA']."', `Schoolname` = '".$data['Schoolname']."', 
         `Housenumber` = '".$data['Housenumber']."', `Subdistrict` = '".$data['Subdistrict']."', `District` = '".$data['District']."',
         `province` = '".$data['Province']."', `Zipcode` = '".$data['Zipcode']."', `Groupcode` = '".$data['Course']."', 
         `Branchcode` = '".$data['Branch']."',`FacultyCode` = '".$data['Faculty']."', 
         `Teachercode` = '".$data['Advisorsname']."', `AcademicYear` = '".$data['AcademicYear']."' WHERE `student`.`ID` = '".$data['id']."';
        ";
        
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return 1;
        }else {
            return 0;
        }
    }

    function insertStudent($data = []) {
        $sql = "INSERT INTO `student` (`ID`, `Prefix`, `FirstnameTH`, `LastnameTH`, `FirstnameEN`, `LastnameEN`, `Nickname`, `Idcard`, `Birthday`, `Blood`, `Cell`, `GraduationBranch`, `GraduationDegree`, `GPA`, `Schoolname`, `Housenumber`, `Subdistrict`, `District`, `province`, `Zipcode`, `Coursecode`,`Groupcode`, `Schoolcode`, `Branchcode`, `FacultyCode`, `Subdistrictcode`, `Districtcode`, `Provincecode`, `Teachercode`, `AcademicYear`) VALUES 
        (
            '".$data['id']."', 
            '".$data['Prefix']."', 
            '".$data['First']."',
            '".$data['Last']."',
            '".$data['FirstEN']."',
            '".$data['LastEN']."',
            '".$data['Nickname']."',
            '".$data['IDcad']."',
            '".$data['Date']."',
            '".$data['Blood']."',
            '".$data['Cell']."',
            '".$data['GraduationBranch']."',
            '".$data['GraduationDegree']."',
            '".$data['GPA']."',
            '".$data['Schoolname']."',
            '".$data['Housenumber']."',
            '".$data['Subdistrict']."',
            '".$data['District']."',
            '".$data['Province']."',
            '".$data['Zipcode']."',
            '".$data['Course']."',
            '".$data['Groupname']."',
            '0', 
            '".$data['Branch']."',
            '".$data['Faculty']."',
            '0', 
            '0', 
            '0', 
            '".$data['Advisorsname']."',
            '".$data['AcademicYear']."'
            )
            
         
        ";
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return 1;
        }else {
            return 0;
        }
    }


}
  
