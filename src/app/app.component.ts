import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';
import { UserService } from './user.service';

declare function loadJS(): any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public user!: User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.resetForm();
    loadJS();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      token: ''
    }
  }

  public onSubmit(form: NgForm): void {
    this.user = form.value;
    this.userService.register(form.value).subscribe(
      (response: User) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    console.log(this.user);
  }
}
