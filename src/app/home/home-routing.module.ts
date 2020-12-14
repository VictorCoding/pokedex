import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {PokemonPage} from './pokemon/pokemon.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'pokemon',
    component: PokemonPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
