
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './projeto/cadastro/cadastro.component';
import { ListaComponent } from './projeto/lista/lista.component';
import { DetalhesComponent } from './projeto/detalhes/detalhes.component';
import { RankingComponent } from './projeto/ranking/ranking.component';
import { CadastroUserComponent } from './login/cadastro/cadastroUser.component';

const appRoutes: Routes = [
  { path: 'cadastro', component: CadastroComponent},
  { path: 'cadastroUser', component: CadastroUserComponent},
  { path: 'login', component: LoginComponent},
  { path: 'detalhes', component: DetalhesComponent},
  { path: 'ranking', component: RankingComponent},
  { path: '**', component: ListaComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }