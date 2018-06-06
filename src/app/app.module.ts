import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './projeto/cadastro/cadastro.component';
import { ListaComponent } from './projeto/lista/lista.component';
import { DetalhesComponent } from './projeto/detalhes/detalhes.component';
import { RankingComponent } from './projeto/ranking/ranking.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpModule } from '@angular/http';
import { AppService } from './app.service';
import { CadastroUserComponent } from './login/cadastro/cadastroUser.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroUserComponent,
    CadastroComponent,
    ListaComponent,
    DetalhesComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
