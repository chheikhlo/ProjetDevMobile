import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SallesService } from '../services/salles.service';
import { LoadingController } from '@ionic/angular';
import { Salles } from '../models/salles';


@Component({
  selector: 'app-tab1',
  templateUrl: 'Salles.page.html',
  styleUrls: ['Salles.page.scss']
})
export class SallesPage {

  data = window.localStorage.getItem('username');

  salles = [];

  constructor(
    private router: Router,
    private service: SallesService,
    private loadingController: LoadingController
  ) {
      this.loadSalles();
  }

  async loadSalles(): Promise<void> {
    const loading = await this.loadingController.create({
    cssClass: 'app-class',
    message: 'Chargement en cours...'
    });
    await loading.present();
    this.service.getAll().subscribe(salles => {
    loading.dismiss();
    this.salles = salles;
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
    this.loadSalles();
    }, error => {
      console.log(error);
    }
   );
  }
}

