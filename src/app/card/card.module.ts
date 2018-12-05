import { LoaderService } from './../shared/service/loader.service';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CardDeckPage } from './card-deck/card-deck.page';
import { CardListingPage } from './card-listing/card-listing.page';
import { CardService } from './shared/card.service';
import { CardListComponent } from './components/card-list.component';
import { CardDetailPage } from './card-detail/card-detail.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        HttpClientModule        
    ],
    providers: [CardService, LoaderService],
    declarations: [
        CardDeckPage,
        CardListComponent,
        CardListingPage,
        CardDetailPage,
    ]
})
export class CardPageModule {}