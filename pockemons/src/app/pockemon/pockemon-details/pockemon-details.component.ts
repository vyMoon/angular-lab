import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router'

import { PockemonService } from '../services/pockemon/pockemon.service';
// import { pockemons } from 'src/names';
import { Pockemon } from 'src/app/Interfases';

@Component({
  selector: 'app-pockemon-details',
  templateUrl: './pockemon-details.component.html',
  styleUrls: ['./pockemon-details.component.scss']
})
export class PockemonDetailsComponent implements OnInit {

  pockemonInformation: Pockemon;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private pockemonService: PockemonService
  ) { }

  ngOnInit(): void {
    this.getPockemon();
    // console.log(this.pockemonInformation)
  }

  getPockemon() {
    const pockemonId = +this.route.snapshot.paramMap.get('id');
    const details: Pockemon = this.pockemonService.getById(pockemonId);
    if (details) {
      // console.log(details)
      this.pockemonInformation = details
    } else {
      // console.log(details)
      // this.location.back();
      this.router.navigate(['/404'])
    }
  }

  onClickCatcn(){
    this.pockemonService.pockemonAction(this.pockemonInformation.id)
  }

  isPowerfull(): boolean {
    return this.pockemonInformation.damage > 50;
  }

}
