<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);

    require_once('../Model/StudentModel.php');
    $student_Model = new studentModel;
    $student = $student_Model -> getDataBY($_POST['ID']);
 
    echo json_encode($student);


