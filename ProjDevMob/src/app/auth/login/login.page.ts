import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UtilsService } from 'src/app/services/utils.service';
import { TOKEN } from 'src/constantes/constante';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private service: AuthService, private utils: UtilsService, private router: Router) {

    this.loginForm=this.fb.group({
       identifier: new FormControl('',[
         Validators.required
       ]),
       password: new FormControl('',[
        Validators.required
      ])
    });


  }


  ngOnInit() {}

  login(): void{
    this.service.login(this.loginForm.value).subscribe((user) => {
      console.log(user);
      window.localStorage.setItem(TOKEN, user.jwt);
      window.localStorage.setItem('username', user.user.username);
      window.localStorage.setItem('identifiant', user.user.id);
      window.localStorage.setItem('matricule', user.user.matricule);
      this.router.navigateByUrl('/tabs/Salles');
    }, () => {
       this.utils.presentToast('identifiant ou mot de passe incorrect', 'danger');
    });
   }

}
