import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventsComponent} from "./events/events.component";
import {PrivateEventsComponent} from "./private-events/private-events.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: '', redirectTo: 'events', pathMatch: 'full'},
  {path: 'events', component: EventsComponent},
  {path: 'private-events', component: PrivateEventsComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
