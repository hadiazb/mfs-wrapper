import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { MfsWalletComponent } from './components/mfs-wallet/mfs-wallet.component';
import { SetPropsComponent } from './components/set-props/set-props.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot({
      mode: 'md',
    }),
    MfsWalletComponent,
    SetPropsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
