import {Component, OnInit} from '@angular/core';
import {AuthService, FailureResponse, SuccessResponse} from "../shared/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }


  submit() {
    const userData = {
      email: this.email,
      password: this.password
    }
    this.authService.register(userData)
      .subscribe(
        (res: SuccessResponse | FailureResponse) => {
          console.log(res);
          if ("token" in res) {
            localStorage.setItem('token', res.token);
            this.router.navigate(['login'])
          }
          if('msg' in res) {
            alert(res.msg)
          }

        },
        error => {
          alert(error.error)
        }
      )
    this.password = ''; this.email = ''
  }
}
