import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './Home/home.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { ConsumoApiComponent } from './consumo-api/consumo-api.component';
import { HttpClientModule } from '@angular/common/http';
import { InterfaceEnumComponent } from './interface-enum/interface-enum.component';
import { RegistrarComponent } from './registrar/registrar.component'; // Asegúrate de importar HttpClientModule
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './loginusuario/login/login.component';
import { DashboardComponent } from './loginusuario/dashboard/dashboard.component';  // <--- Añadir esta línea

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NewsComponent,
    FooterComponent,
    ConsumoApiComponent,
    InterfaceEnumComponent,
    RegistrarComponent,
    ListComponent,
    LoginComponent,
    DashboardComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Agrega HttpClientModule aquí en los imports
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
