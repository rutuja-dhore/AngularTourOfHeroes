import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { NgFor } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-heros',
  standalone: true,
  imports: [NgFor,HeroDetailComponent,RouterModule],
  templateUrl: './heros.component.html',
  styleUrl: './heros.component.css'
})
export class HerosComponent implements OnInit{
  heros: Hero[] = [];

  constructor(private heroService: HeroService) {}

  getHeros(): void {
    this.heroService.getHeros()
        .subscribe(heros => this.heros = heros);
  }

  ngOnInit(): void {
    this.getHeros();
  }
}
