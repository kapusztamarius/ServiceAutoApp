import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListaComenziTodoComponent } from './lista-comenzi-todo/lista-comenzi-todo.component';
import { ComandaComponent } from './comanda/comanda.component';
import { ComandaCurentaComponent } from './comanda-curenta/comanda-curenta.component';
import { ListaComenziFinalizateComponent } from './lista-comenzi-finalizate/lista-comenzi-finalizate.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'comenzi-todo', component: ListaComenziTodoComponent},
  {path: 'comenzi-done', component: ListaComenziFinalizateComponent},
  {path: 'comanda/:id', component: ComandaComponent},
  {path: 'comanda/user/:id', component: ComandaCurentaComponent},
  {path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
