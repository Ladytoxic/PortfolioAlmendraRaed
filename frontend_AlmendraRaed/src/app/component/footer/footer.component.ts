import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  social: any;
    constructor(private datosPorfolio: PorfolioService) { }
  
    ngOnInit(): void {
      this.datosPorfolio.obtenerDatos().subscribe(data => {
        this.social=data;
      })
    }
  
  }
  