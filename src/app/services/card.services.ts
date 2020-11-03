import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CardService{
  private apiUrl: string ='https://api.pokemontcg.io/v1';

  constructor(private httpClient: HttpClient){

  }

  getCards() : Observable<any>{

    return this.httpClient.get(`${this.apiUrl}`);
  }
}
