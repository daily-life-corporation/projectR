import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public c59TO;
  public IDSTUDENT;
  public dbstudent;
  public student;
  public studentProfile;
  public element;
  public studentID;


  constructor(public db: AngularFireDatabase, public route: ActivatedRoute , public http: HttpClient ) {

    this.IDSTUDENT = this.route.params.subscribe(params => {
      this.dbstudent = params['id'];
      console.log(this.dbstudent); // Print the parameter to the console.
  });

   }

  ngOnInit() {
    const body = 'ID=' + this.dbstudent;
console.log(body);
const headers = new HttpHeaders({
  'Content-Type': 'application/x-www-form-urlencoded'});

    this.http
    .post('http://localhost/webservice/API/studentprofile.php', body, {headers: headers} )
    .subscribe((data: any) => {
       console.log(data[0]);
       this.student = data[0];
    },
    (error: any) =>    {
       console.log(error);
    });
  }

}
