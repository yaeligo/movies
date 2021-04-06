import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { RouterModule, Router, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ReleaseYearpipePipe } from './release-yearpipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routs: Routes=[
  { path: 'home', component: HeaderComponent},
  { path: 'one', component: FirstComponent },
  { path: 'two', component: SecondComponent },
  { path: 'three', component: ThirdComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    HeaderComponent,
    ReleaseYearpipePipe,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routs),
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
