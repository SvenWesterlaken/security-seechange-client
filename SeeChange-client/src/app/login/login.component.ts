import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router, RouterLink} from '@angular/router';
import {FormControl, FormGroup, Validators } from "@angular/forms";
import {userLoginService} from "../services/userlogin.service";
import {SessionStorageService} from "../services/sessionstorage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUserForm: FormGroup;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private userLoginService: userLoginService,
              private sessionStorageService: SessionStorageService) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.initForm();
    });
  }

  onSubmit() {
    this.userLoginService.loginUser(this.loginUserForm.value).then((user) => {
      console.log(user);
      if(user.status != 401 ){
            // this.sessionStorageService.setToken(res.token);
            this.router.navigate(['/streamlist'], {relativeTo: this.route});
        } else {

      }
    });
    // this.sessionStorageService.setUserId(this.loginUserForm.value.name);

  }

  private initForm() {
    this.loginUserForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }
}
