import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(private authService: AuthService) {
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
        res => {
          console.log(res);
          alert('User registered')
        },
        error => {
          alert(error.error)
        }
      )
    this.password = ''; this.email = ''
  }
}
