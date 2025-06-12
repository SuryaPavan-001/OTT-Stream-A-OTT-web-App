import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { ShowsComponent } from './pages/shows/shows.component';
import { SingupComponent } from './pages/singup/singup.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './pages/details/details.component';
import { ShowdetailsComponent } from './pages/showdetails/showdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    MoviesComponent,
    ShowsComponent,
    SingupComponent,
    ContactComponent,
    NotfoundComponent,
    DetailsComponent,
    ShowdetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
