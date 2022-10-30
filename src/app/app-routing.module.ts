import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeComponent } from './comunes/heroe/heroe.component';
import { HeroesComponent } from './comunes/heroes/heroes.component';

const routes: Routes = [
  {path: '', component: HeroesComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroe', component: HeroeComponent},
  {path: 'heroe/:id', component: HeroeComponent},
  {path: '**', component: HeroesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
