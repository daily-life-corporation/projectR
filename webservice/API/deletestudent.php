<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);

    require_once('../Model/StudentModel.php');
    $student_Model = new studentModel;
    

echo $_GET["ID"];
    $student = $student_Model -> deleteStudent($_GET["ID"]);
 
    echo json_encode($student);


