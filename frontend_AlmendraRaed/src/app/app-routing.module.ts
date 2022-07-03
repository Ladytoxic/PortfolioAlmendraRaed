import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';

const routes: Routes= [
{path:'login', component:LoginComponent},
{path:'portfolio', component:PortfolioComponent}
];

@NgModule({

  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
