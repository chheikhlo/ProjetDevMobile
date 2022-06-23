import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'GestionEmploye.page.html',
  styleUrls: ['GestionEmploye.page.scss']
})

export class GestionEmployePage {

  user = [];

  constructor(
    private router: Router,
    private service: UsersService,
    private loadingController: LoadingController
  ) {
      this.loadUsers();
  }

  async loadUsers(): Promise<void> {
    const loading = await this.loadingController.create({
    cssClass: 'app-class',
    message: 'Chargement en cours...'
    });
    await loading.present();
    this.service.getAll().subscribe(user => {
    loading.dismiss();
    this.user = user;
    }, error => {
        console.log(error);
    });
  }



  modifier() {
    this.router.navigate(['/tabs/Salles/modifier-salle']);
  }

  async supprimer(id: number) {
    const loading = await this.loadingController.create({
      message: 'Suppression avec succès.',
      duration: 1000
    });
    await loading.present();
    this.service.delete(id).subscribe(result => {
    loading.dismiss();
    this.loadUsers();
    }, error => {
      console.log(error);
    }
   );
  }

}
