import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { ShowsComponent } from './pages/shows/shows.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DetailsComponent } from './pages/details/details.component';


const routes: Routes = [
  { path: "" , component:HomeComponent},
  { path : "login", component:LoginComponent},
  { path : "singup" , component:SingupComponent},
  { path: "movies", component:MoviesComponent},
  { path: "shows", component:ShowsComponent},
  { path : "contact", component:ContactComponent},
  { path: "details/:id", component:DetailsComponent},
   { path: "showdetails/:id", component:DetailsComponent},
  { path : "**", component:NotfoundComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
