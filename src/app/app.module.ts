import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BeastCardComponent } from './comps/cards/beast-card/beast-card.component';
import { BirdCardComponent } from './comps/cards/bird-card/bird-card.component';
import { WildCardComponent } from './comps/cards/wild-card/wild-card.component';
import { FooterComponent } from './comps/ganral/footer/footer.component';
import { HeaderComponent } from './comps/ganral/header/header.component';
import { NevComponent } from './comps/ganral/nev/nev.component';
import { PaginatorComponent } from './comps/ganral/paginator/paginator.component';
import { BeastPanelComponent } from './comps/panel/beast-panel/beast-panel.component';
import { BirdsPanelComponent } from './comps/panel/birds-panel/birds-panel.component';
import { WildsPanelComponent } from './comps/panel/wilds-panel/wilds-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    BeastCardComponent,
    BirdCardComponent,
    WildCardComponent,
    FooterComponent,
    HeaderComponent,
    NevComponent,
    PaginatorComponent,
    BeastPanelComponent,
    BirdsPanelComponent,
    WildsPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
