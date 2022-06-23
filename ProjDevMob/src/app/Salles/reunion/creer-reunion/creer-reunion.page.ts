import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reunion } from 'src/app/models/reunion';
import { ReunionService } from 'src/app/services/reunion.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-creer-reunion',
  templateUrl: './creer-reunion.page.html',
  styleUrls: ['./creer-reunion.page.scss'],
})
export class CreerReunionPage implements OnInit {

  meet: Reunion;
  constructor(
    private service: ReunionService,
    private router: Router,
    private utils: UtilsService
  ) {
    this.meet = new Reunion();
  }

  ngOnInit() {
  }

  performForm(meet: Reunion) {
    this.service.post(meet).subscribe((meet)=>{
      this.utils.presentToast('Ajouter avec succès', 'success', 1000);
    },()=>{
      this.utils.presentToast('Attention', 'danger', 1000);
    })
    this.router.navigateByUrl('/tabs/Salles/reunion');
  }

}
