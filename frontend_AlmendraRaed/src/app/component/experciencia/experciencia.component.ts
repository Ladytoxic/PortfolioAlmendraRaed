import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-experciencia',
  templateUrl: './experciencia.component.html',
  styleUrls: ['./experciencia.component.css']
})
export class ExpercienciaComponent implements OnInit {
  experienciaList: any;
  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.experienciaList=data.experiencia_laboral;
    })
  }

}
