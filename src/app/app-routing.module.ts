import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardConsumerComponent } from './board-consumer/board-consumer.component';
import { BoardDeveloperComponent } from './board-developer/board-developer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { CreateFundComponent } from './create-fund/create-fund.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'consumer', component: BoardConsumerComponent},
  {path: 'admin', component: BoardAdminComponent},
  {path: 'developer', component: BoardDeveloperComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'create-fund', component: CreateFundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
