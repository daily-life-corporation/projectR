import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import {
  APIService
} from "./../api.service";
import {
  Router
} from "@angular/router";
import {
  Component,
  OnInit
} from "@angular/core";
import {
  AngularFireDatabase
} from "angularfire2/database";
import {
  FormControl
} from "@angular/forms";
import {
  ActivatedRoute
} from "@angular/router";
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"]
})
export class ViewComponent implements OnInit {
  public items;
  public c59TO;
  public c60TO;
  public c61TO;
  public c59;
  public c60;
  public c61;
  public name;
  public seach;
  public sara;
  public kom;

  // ตัวแปลที่เก็บค่าตัวที่ลบ มันจะโชวชื่อขึ้นมา
  public id_show;
  public name_show;

  //  public Prefix_show;
  //  public Last_show;
  //  public FirstEN_show;
  //  public LastEN_show;
  //  public Nickname_show;
  //  public IDcad_show;
  //  public Date_show;
  //  public Blood_show;
  //  public Cell_show;
  //  public Housenumber_show;
  //  public Subdistrict_show;
  //  public District_show;
  //  public Province_show;
  //  public Zipcode_show;
  //  public Schoolname_show;
  //  public GraduationBranch_show;
  //  public GPA_show;
  //  public GraduationDegree_show;
  //  public AcademicYear_show;
  //  public Faculty_show;
  //  public Branch_show;
  //  public Course_show;
  //  public Groupname_show;
  //  public Advisorsname_show;

  //   insert --------------------
  // FormControl คือการดึงข้อมูลที่อยู่ในหน้าhtmlมา
  id = new FormControl('');
  Prefix = new FormControl('');
  First = new FormControl('');
  Last = new FormControl('');
  FirstEN = new FormControl('');
  LastEN = new FormControl('');
  Nickname = new FormControl('');
  IDcad = new FormControl('');
  Date = new FormControl('');
  Blood = new FormControl('');
  Cell = new FormControl('');
  Housenumber = new FormControl();
  Subdistrict = new FormControl('');
  District = new FormControl('');
  Province = new FormControl('');
  Zipcode = new FormControl('');
  Schoolname = new FormControl('');
  GraduationBranch = new FormControl('');
  GPA = new FormControl('');
  GraduationDegree = new FormControl('');
  AcademicYear = new FormControl('');
  Faculty = new FormControl('');
  Branch = new FormControl('');
  Course = new FormControl('');
  Groupname = new FormControl('');
  Advisorsname = new FormControl('');
  student: any;

  constructor(
    public db: AngularFireDatabase,
    public router: Router,
    public api: APIService,
    public http: HttpClient,
    public route: ActivatedRoute
  ) {}
  // ฟังชันเรียกข้อมูลในdatabaseออกมาโชว
  ngOnInit() {
    this.http.get("http://localhost/webservice/API/student59TO.php").subscribe(
      (data: any) => {
        console.log(data);
        this.c59TO = data;
      },

      (error: any) => {
        console.log(error);
      }
    );

    this.http.get("http://localhost/webservice/API/student60TO.php").subscribe(
      (data: any) => {
        console.log(data);
        this.c60TO = data;
      },
      (error: any) => {
        console.log(error);
      }
    );

    this.http.get("http://localhost/webservice/API/student61TO.php").subscribe(
      (data: any) => {
        console.log(data);
        this.c61TO = data;
      },
      (error: any) => {
        console.log(error);
      }
    );

    this.http.get("http://localhost/webservice/API/student59.php").subscribe(
      (data: any) => {
        console.log(data);
        this.c59 = data;
      },
      (error: any) => {
        console.log(error);
      }
    );

    this.http.get("http://localhost/webservice/API/student60.php").subscribe(
      (data: any) => {
        console.log(data);
        this.c60 = data;
      },
      (error: any) => {
        console.log(error);
      }
    );

    this.http.get("http://localhost/webservice/API/student61.php").subscribe(
      (data: any) => {
        console.log(data);
        this.c61 = data;
      },
      (error: any) => {
        console.log(error);
      }
    );

    this.http.get("http://localhost/webservice/API/studentsara.php").subscribe(
      (data: any) => {
        console.log(data);
        this.sara = data;
      },
      (error: any) => {
        console.log(error);
      }
    );

    this.http.get("http://localhost/webservice/API/studentkom.php").subscribe(
      (data: any) => {
        console.log(data);
        this.kom = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  // เพิ่มข้อมูลเข้า เก็บค่าแล้วส่งไปหน้าinsert.php
  adddata(){
      let body = "id=" + this.id.value
      + "&Prefix=" + this.Prefix.value
      + "&First=" + this.First.value
      + "&Last=" + this.Last.value
      + "&FirstEN=" + this.FirstEN.value
      + "&LastEN=" + this.LastEN.value
      + "&Nickname=" + this.Nickname.value
      + "&IDcad=" + this.IDcad.value
      + "&Date=" + this.Date.value
      + "&Blood=" + this.Blood.value
      + "&Cell=" + this.Cell.value
      + "&Housenumber=" + this.Housenumber.value
      + "&Subdistrict=" + this.Subdistrict.value
      + "&District=" + this.District.value
      + "&Province=" + this.Province.value
      + "&Zipcode=" + this.Zipcode.value
      + "&Schoolname=" + this.Schoolname.value
      + "&GraduationBranch=" + this.GraduationBranch.value
      + "&GPA=" + this.GPA.value
      + "&GraduationDegree=" + this.GraduationDegree.value
      + "&AcademicYear=" + this.AcademicYear.value
      + "&Faculty=" + this.Faculty.value
      + "&Branch=" + this.Branch.value
      + "&Course=" + this.Course.value
      + "&Groupname=" + this.Groupname.value
      + "&Advisorsname=" + this.Advisorsname.value;
      console.log(body);
      const headers = new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      });
      this.http
        .post("http://localhost/webservice/API/Insertstudent.php", body, {
          headers: headers
        })
        .subscribe(
          (data: any) => {
            console.log(data[0]);
            this.student = data[0];
          },
          (error: any) => {
            console.log(error);
          }
        );
   }



  // ฟังชันค้นหา
  click(ID: string | number | boolean) {
    this.router.navigate(["/profile", ID]);
  }
  public getsearch(ID) {
    this.http
      .get("http://localhost/webservice/API/seach.php?ID=" + ID)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.seach = data;
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
  //  ฟังชันลบ
  public OnDelete() {
    console.log(this.id_show);

    this.http
      .get(
        "http://localhost/webservice/API/deletestudent.php?ID=" + this.id_show
      )
      .subscribe(
        (data: any) => {
          console.log(data[0]);
          this.student = data[0];
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
  // สร้างฟังชันเพื่อที่จะส่งค่า ID และ ชื่อมา
  deleteitem(id, name) {
    this.id_show = id;
    this.name_show = name;
  }

  updateitem(
    id,Prefix,First,Last,FirstEN,LastEN,Nickname,IDcad,Date,Blood,Cell,Housenumber,Subdistrict,
    District,Province,Zipcode,Schoolname,GraduationBranch,GPA,GraduationDegree,AcademicYear,Faculty,
    Branch,Course,Groupname,Advisorsname
  ) {
    this.id = new FormControl(id);
    this.Prefix = new FormControl(Prefix);
    this.First = new FormControl(First);
    this.Last = new FormControl(Last);
    this.FirstEN = new FormControl(FirstEN);
    this.LastEN = new FormControl(LastEN);
    this.Nickname = new FormControl(Nickname);
    this.IDcad = new FormControl(IDcad);
    this.Date = new FormControl(Date);
    this.Blood = new FormControl(Blood);
    this.Cell = new FormControl(Cell);
    this.Housenumber = new FormControl(Housenumber);
    this.Subdistrict = new FormControl(Subdistrict);
    this.District = new FormControl(District);
    this.Province = new FormControl(Province);
    this.Zipcode = new FormControl(Zipcode);
    this.Schoolname = new FormControl(Schoolname);
    this.GraduationBranch = new FormControl(GraduationBranch);
    this.GPA = new FormControl(GPA);
    this.GraduationDegree = new FormControl(GraduationDegree);
    this.AcademicYear = new FormControl(AcademicYear);
    this.Faculty = new FormControl(Faculty);
    this.Branch = new FormControl(Branch);
    this.Course = new FormControl(Course);
    this.Groupname = new FormControl(Groupname);
    this.Advisorsname = new FormControl(Advisorsname);
  }

  public update() {
    let body =
      "id=" + this.id.value
      +"&Prefix=" +this.Prefix.value
      +"&First=" +this.First.value
      +"&Last=" +this.Last.value
      +"&FirstEN=" +this.FirstEN.value
      +"&LastEN=" +this.LastEN.value
      +"&Nickname=" +this.Nickname.value
      +"&IDcad=" +this.IDcad.value
      +"&Date=" +this.Date.value
      +"&Blood=" +this.Blood.value
      +"&Cell=" +this.Cell.value
      +"&Housenumber=" +this.Housenumber.value
      +"&Subdistrict=" +this.Subdistrict.value
      +"&District=" +this.District.value
      +"&Province=" +this.Province.value
      +"&Zipcode=" +this.Zipcode.value
      +"&Schoolname=" +this.Schoolname.value
      +"&GraduationBranch=" +this.GraduationBranch.value
      +"&GPA=" +this.GPA.value
      +"&GraduationDegree=" +this.GraduationDegree.value
      +"&AcademicYear=" +this.AcademicYear.value
      +"&Faculty=" +this.Faculty.value
      +"&Branch=" +this.Branch.value
      +"&Course=" +this.Course.value
      +"&Groupname=" +this.Groupname.value
      +"&Advisorsname=" +this.Advisorsname.value;

    console.log(body);
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });

    this.http
      .post("http://localhost/webservice/API/Updatestudent.php", body, {
        headers: headers
      })
      .subscribe(

        (data: any) => {

          console.log(data);
          this.student = data[0];
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
}
