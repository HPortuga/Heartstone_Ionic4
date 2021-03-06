import { LoaderService } from './../../shared/service/loader.service';
import { Card } from './../shared/card.model';
import { CardService } from './../shared/card.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'app-card-detail',
    templateUrl: './card-detail.page.html',
    styleUrls: ['./card-detail.page.scss']
})
export class CardDetailPage {
    card: Card;

    constructor(private route: ActivatedRoute,
        private cardService: CardService,
        private loaderService: LoaderService) { }

    ionViewWillEnter() {
        const cardId = this.route.snapshot.paramMap.get('cardId');

        this.loaderService.presentLoading();
        this.cardService.getCardById(cardId)
            .subscribe((card: Card[]) => {
                this.card = card.map((card: Card) => {
                    card.text = this.cardService.replaceCardTextLine(card.text);
                    return card;
                })[0];

                this.loaderService.dismissLoading();
            });
    }

    updateImage() {
        this.card.img = 'assets/image/DefaultCard.png';
    }
}