import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
miTag:any;
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=> {
      this.miTag=data;
    })
  }

}
