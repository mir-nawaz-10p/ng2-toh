import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from '../heroes/hero';
import { HeroService } from '../heroes/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  @Output() close = new EventEmitter();

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this.hero = this.heroService.getHero(+params['id']);
      } else {
        this.hero = new Hero(this.heroService.getId(), '');
      }
    });
  }

  save(): void {
    if(this.hero.name !== ''){
      this.hero = this.heroService.save(this.hero);
      this.goBack(this.hero);
    }
  }

  goBack(savedHero: Hero = null): void {
    this.close.emit(savedHero);
    window.history.back();
  }
}
