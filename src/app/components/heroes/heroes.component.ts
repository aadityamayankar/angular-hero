import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';
import { Hero } from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;

  heroes: Hero[] = [];

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService,private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }
}
