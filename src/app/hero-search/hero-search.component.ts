import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroService } from '../heroes/hero.service';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private router: Router){}

  ngOnInit() {}

  search(term: string): void {
    this.heroes = [];
    this.heroService.search(term).then((heroes)=>{
      this.heroes = heroes;
    });
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
