import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeComponent } from './comunes/heroe/heroe.component';
import { HeroesComponent } from './comunes/heroes/heroes.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

const routes: Routes = [
  {path: "", component: HeroesComponent},
  {path: "heroes", component: HeroesComponent},
  {path: "heroe/:id", component: HeroeComponent},
  {path: "heroe/:nombre", component: HeroeComponent},
  {path: "busqueda/:textobusqueda", component: BusquedaComponent},
  {path: "**", component: HeroesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
