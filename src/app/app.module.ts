import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { LastPageComponent } from './last-page/last-page.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import {FormComponent} from './form/form.component';
import { FormsModule }    from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AsyncPipe } from '@angular/common';
import { MessagingService } from './messaging.service';
import { FooterComponent } from './footer/footer.component';
import {AuthService} from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    BeerDetailsComponent,
    LastPageComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    AddToCartComponent,
    FormComponent,
    FooterComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [MessagingService, AsyncPipe,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
