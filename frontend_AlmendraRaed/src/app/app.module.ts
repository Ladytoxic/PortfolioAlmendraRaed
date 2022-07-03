import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HeroComponent } from './component/hero/hero.component';

import { PorfolioService } from './service/portfolio.service';
import { HttpClientModule } from "@angular/common/http";
import { AcercademiComponent } from './component/acercademi/acercademi.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { ExpercienciaComponent } from './component/experciencia/experciencia.component';
import { HardsoftComponent } from './component/hardsoft/hardsoft.component';
import { ProyectoComponent } from './component/proyecto/proyecto.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { PortfolioComponent } from './component/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AcercademiComponent,
    EducacionComponent,
    ExpercienciaComponent,
    HardsoftComponent,
    ProyectoComponent,
    ContactoComponent,
    FooterComponent,
    LoginComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
