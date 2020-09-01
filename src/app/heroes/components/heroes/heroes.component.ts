import { Component, OnInit } from '@angular/core';
import { HeroModel, HeroService } from 'src/app/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public heroes: HeroModel[];

  constructor(private heroService: HeroService) {
    this.heroes = [];
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as HeroModel)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: HeroModel): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
