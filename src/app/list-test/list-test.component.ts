import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})
export class ListTestComponent implements OnInit {

  ieThisIngredientVital : boolean = true;

  displayGuestList : boolean = true;

  songList: string[] = ["Alejandro", "ne me quitte pas", "le temps est bon"];

  constructor() { }

  ngOnInit(): void {
  }

}
