import { Injectable } from '@angular/core';
import { of as ObservableOf, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CardDeck } from './card.model';

@Injectable()
export class CardService {
    private readonly HS_API_URL = 'https://omgvamp-hearthstone-v1.p.mashape.com';
    private readonly API_KEY = '8k0vwaCkVEmshAUSoKv786h3SHRZp1zYbhsjsnU6peQbZMIEjE';
    
    private readonly cardDecks: string[] = [
        'Druid',
        'Mage',
        'Warrior',
        'Rogue',
        'Shaman',
        'Priest',
        'Warlock',
        'Hunter',
        'Paladin'
    ];

    constructor(private http: HttpClient) {

    }

    public getAllCardDecks(): Observable<CardDeck[]> {
        const headers = new HttpHeaders({'X-Mashape-Key': this.API_KEY});
        
        return this.http.get<CardDeck[]>(`${this.HS_API_URL}/info`, {headers});
    }
}