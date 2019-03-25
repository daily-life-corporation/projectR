import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }
  click ( u: string, p: string) {
    if (u === 'addmin' && p === 'addmin') {
      this.router.navigate(['/view' ]);
    }
    else if (u!='addmin' && p!='addmin'){
      alert("กรุณากรอกรหัสผ่านให้ถูกต้อง");
    }
  }


}
