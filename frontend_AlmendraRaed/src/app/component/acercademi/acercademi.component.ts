import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/service/portfolio.service';


@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {
  miTag:any;
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.miTag = data;
    })
  }

}
