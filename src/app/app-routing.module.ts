import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './Home/home.component'
import { NewsComponent } from './news/news.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ListComponent } from './list/list.component';
import { DashboardComponent } from './loginusuario/dashboard/dashboard.component';
import { LoginComponent } from './loginusuario/login/login.component';

const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'navbar', component: NavbarComponent},
{path: 'news', component: NewsComponent},
{path: 'registrar', component: RegistrarComponent},
{path: 'listar', component: ListComponent},
{path: 'dashboard',component: DashboardComponent},
{path: 'login',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
