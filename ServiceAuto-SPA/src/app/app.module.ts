import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SideNavTogglerComponent } from './side-nav-toggler/side-nav-toggler.component';
import { ListaComenziTodoComponent } from './lista-comenzi-todo/lista-comenzi-todo.component';
import { ComandaComponent } from './comanda/comanda.component';
import { ComandaCurentaComponent } from './comanda-curenta/comanda-curenta.component';
import { ListaComenziFinalizateComponent } from './lista-comenzi-finalizate/lista-comenzi-finalizate.component';

@NgModule({
   declarations: [
      AppComponent,
      WelcomeComponent,
      LoginComponent,
      FooterComponent,
      TopmenuComponent,
      SidenavComponent,
      SideNavTogglerComponent,
      ListaComenziTodoComponent,
      ComandaComponent,
      ComandaCurentaComponent,
      ListaComenziFinalizateComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
