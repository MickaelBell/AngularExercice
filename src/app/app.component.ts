import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { CardService } from "./services/card.services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  pockemonCards : any[] = [];

  constructor(private cardService: CardService ){}

  ngOnInit(){

    let cards = this.cardService.getCards().subscribe(data =>{
      this.pockemonCards = data.cards;
    });
  }
}
