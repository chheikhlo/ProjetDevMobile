import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-ajouter-membre',
  templateUrl: './ajouter-membre.page.html',
  styleUrls: ['./ajouter-membre.page.scss'],
})
export class AjouterMembrePage implements OnInit {

  membre: Users;
  constructor(
    private service: UsersService,
    private router: Router,
    private utils: UtilsService
  ) {
    this.membre = new Users();
  }

  ngOnInit() {
  }

  performForm(membre: Users) {
    this.service.post(membre).subscribe((membree)=>{
      this.utils.presentToast('Ajouter avec succès', 'success', 1000);
    },()=>{
      this.utils.presentToast('Attention', 'danger', 1000);
    })
    this.router.navigateByUrl('/tabs/GestionEmploye');
  }


}
