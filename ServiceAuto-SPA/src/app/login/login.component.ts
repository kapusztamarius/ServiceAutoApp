import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { AuthenticationService } from '../services/authentication.service';

@Component({ selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] })
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;
    submitted = false;

    errorMsessage = 'Invalid Credentials';
    invalidLogin = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
    ) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }


    get form() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        console.log(this.form.username.value);

        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.executeBasicAuthentication(this.form.username.value, this.form.password.value)
            .subscribe(
                data => {
                    this.router.navigate(['welcome']);
                },
                error => {
                    this.invalidLogin = true;
                    this.loading = false;
                });
    }
}
