import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { PorfolioService } from '../../../app/service/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  miPorfolio: any;
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=> {
      this.miPorfolio=data;
    })
  }

}
