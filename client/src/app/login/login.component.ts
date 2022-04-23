import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    const userData = {
      email: this.email,
      password: this.password
    }

    this.authService.login(userData)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['private-events'])
        },
        err => console.log(err)
      )
  }

}
