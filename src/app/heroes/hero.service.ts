import { Injectable } from '@angular/core';

import { Hero } from './hero';

@Injectable()
export class HeroService {
  private heroes : Hero[] = [
      { id: 0, name: 'Mr. Nice' },
      { id: 1, name: 'Narco' },
      { id: 2, name: 'Bombasto' },
      { id: 3, name: 'Celeritas' },
      { id: 4, name: 'Magneta' },
      { id: 5, name: 'RubberMan' },
      { id: 6, name: 'Dynama' },
      { id: 7, name: 'Dr IQ' },
      { id: 8, name: 'Magma' },
      { id: 9, name: 'Tornado' }
    ];

  private wildCardSearch(str: string, rule: string) : boolean{
    return new RegExp("^" + rule.split("*").join(".*") + "$").test(str);
  }

  getHeroes(): Hero[] {
    return this.heroes;
  }

  getHero(id: number): Hero {
    return this.heroes.find(hero => hero.id === id);
  }

  save(hero: Hero): Hero {
    let updateHero = this.getHero(hero.id);
    if(typeof updateHero === 'undefined'){
      this.heroes.push(hero);
      return hero;
    }else{
      updateHero.name = hero.name;
      return updateHero;
    }
  }

  getId(): number{
    return this.heroes.length;
  }

  delete(hero: Hero): Hero[]{
    this.heroes.splice(this.heroes.indexOf(hero), 1);
    return this.heroes;
  }

  search(term: string): Promise<Hero[]>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          let search = [];
          term = term.toLowerCase();
          for(let hero of this.heroes){
              if(this.wildCardSearch(hero.name.toLowerCase(), "*"+term)){
                search.push(hero);
              }else if(this.wildCardSearch(hero.name.toLowerCase(), term+"*")){
                search.push(hero);
              }else if(this.wildCardSearch(hero.name.toLowerCase(), "*"+term+"*")){
                search.push(hero);
              }
          }
          resolve(search);
        }, Math.random() * 1000);
      }
    );
  }

}
