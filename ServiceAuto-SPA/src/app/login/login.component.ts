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
        // private alertService: AlertService
    ) {
        // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) {
        //     this.router.navigate(['/']);
        // }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['welcome'] || '/';
    }

    // convenience getter for easy access to form fields
    get form() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        console.log(this.form.username.value);

        // reset alerts on submit
        // this.alertService.clear();

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        if (this.form.username.value === 'User' && this.form.password.value === 'dummy') {
            this.invalidLogin = false;
            this.router.navigate(['welcome']);
        } else {
            this.invalidLogin = true;
        }

        this.loading = true;
        this.authenticationService.executeBasicAuthentication(this.form.username.value, this.form.password.value)
            .subscribe(
                data => {
                    this.router.navigate(['welcome']);
                },
                error => {
                    // this.alertService.error(error);
                    this.loading = false;
                });
    }
}
