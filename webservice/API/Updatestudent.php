

<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);

    require_once('../Model/StudentModel.php');
    $student_Model = new studentModel;

    // ฝั่งนี่จะนำข้อมูลที่ได้มาจาก html มาไส่ในดาต้าเบส
    $data = [];
    $data['id'] = $_POST['id'];
    $data['Prefix'] = $_POST['Prefix'];
    $data['First'] = $_POST['First'];
    $data['Last'] = $_POST['Last'];
    $data['FirstEN'] = $_POST['FirstEN'];
    $data['LastEN'] = $_POST['LastEN'];
    $data['Nickname'] = $_POST['Nickname'];
    $data['IDcad'] = $_POST['IDcad'];
    $data['Date'] = $_POST['Date'];
    $data['Blood'] = $_POST['Blood'];
    $data['Cell'] = $_POST['Cell'];
    $data['Housenumber'] = $_POST['Housenumber'];
    $data['Subdistrict'] = $_POST['Subdistrict'];
    $data['District'] = $_POST['District'];
    $data['Province'] = $_POST['Province'];
    $data['Zipcode'] = $_POST['Zipcode'];
    $data['Schoolname'] = $_POST['Schoolname'];
    $data['GraduationBranch'] = $_POST['GraduationBranch'];
    $data['GPA'] = $_POST['GPA'];
    $data['GraduationDegree'] = $_POST['GraduationDegree'];
    $data['AcademicYear'] = $_POST['AcademicYear'];
    $data['Faculty'] = $_POST['Faculty'];
    $data['Branch'] = $_POST['Branch'];
    $data['Course'] = $_POST['Course'];
    $data['Groupname'] = $_POST['Groupname'];
    $data['Advisorsname'] = $_POST['Advisorsname'];


    $student = $student_Model -> updateStudent($data);
 
    echo json_encode($student);


