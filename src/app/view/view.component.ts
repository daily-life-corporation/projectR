import { HttpClient } from '@angular/common/http';
import { APIService } from './../api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
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
  constructor(public db: AngularFireDatabase, public router: Router, public api: APIService, public http: HttpClient) {

   }

  ngOnInit() {

     this.http
    .get('http://localhost/webservice/API/student59TO.php')
    .subscribe((data: any) => {
       console.log(data);
       this.c59TO  = data;
    },
    (error: any) =>    {
       console.log(error);
    });

    this.http
    .get('http://localhost/webservice/API/student60TO.php')
    .subscribe((data: any) => {
       console.log(data);
       this.c60TO  = data;
    },
    (error: any) =>    {
       console.log(error);
    });

    this.http
    .get('http://localhost/webservice/API/student61TO.php')
    .subscribe((data: any) => {
       console.log(data);
       this.c61TO  = data;
    },
    (error: any) =>    {
       console.log(error);
    });


    this.http
    .get('http://localhost/webservice/API/student59.php')
    .subscribe((data: any) => {
       console.log(data);
       this.c59  = data;
    },
    (error: any) =>    {
       console.log(error);
    });


    this.http
    .get('http://localhost/webservice/API/student60.php')
    .subscribe((data: any) => {
       console.log(data);
       this.c60  = data;
    },
    (error: any) =>    {
       console.log(error);
    });


    this.http
    .get('http://localhost/webservice/API/student61.php')
    .subscribe((data: any) => {
       console.log(data);
       this.c61  = data;
    },
    (error: any) =>    {
       console.log(error);
    });






  }

  click(ID: string | number | boolean) {
    this.router.navigate(['/profile', ID]);
  }
     student59TO () {
      this.http
      .get('http://localhost/webservice/API/student59TO.php')
      .subscribe((data: any) => {
         console.log(data);
         this.c59TO  = data;
      },
      (error: any) =>    {
         console.log(error);
      });


  }
}
