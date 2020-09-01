import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DetailComponent } from './components/detail/detail.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [HeroesComponent, DetailComponent],
    imports: [
        CommonModule,
        HeroesRoutingModule,
        FormsModule
    ]
})
export class HeroesModule { }
