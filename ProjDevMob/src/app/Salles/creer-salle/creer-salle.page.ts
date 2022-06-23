import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Salles } from 'src/app/models/salles';
import { SallesService } from 'src/app/services/salles.service';
import { UtilsService } from 'src/app/services/utils.service';


@Component({
  selector: 'app-creer-salle',
  templateUrl: './creer-salle.page.html',
  styleUrls: ['./creer-salle.page.scss'],
})
export class CreerSallePage implements OnInit {

  salle: Salles;
  constructor(
    private service: SallesService,
    private router: Router,
    private utils: UtilsService
  ) {
    this.salle = new Salles();
  }

  ngOnInit() {
  }

  performForm(salle: Salles) {
    this.service.post(salle).subscribe((sallee)=>{
      this.utils.presentToast('Ajouter avec succès', 'success', 1000);
    },()=>{
      this.utils.presentToast('Attention', 'danger', 1000);
    })
    this.router.navigateByUrl('/tabs/Salles');
  }

}
