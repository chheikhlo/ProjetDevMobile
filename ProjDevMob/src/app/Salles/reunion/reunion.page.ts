import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReunionService } from '../../services/reunion.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.page.html',
  styleUrls: ['./reunion.page.scss'],
})
export class ReunionPage implements OnInit {

  data = window.localStorage.getItem('username');

  meet = [];
  constructor(
    private router: Router,
    private service: ReunionService,
    private loadingController: LoadingController
  ) {
      this.loadReunion();
  }

  ngOnInit() {}

  async loadReunion(): Promise<void> {
    const loading = await this.loadingController.create({
    cssClass: 'app-class',
    message: 'Chargement en cours...'
    });
    await loading.present();
    this.service.getAll().subscribe(meet => {
    loading.dismiss();
    this.meet = meet;
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
    this.loadReunion();
    }, error => {
      console.log(error);
    }
   );
  }
}






