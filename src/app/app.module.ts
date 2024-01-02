import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { NavbarMainComponent } from './components/navbar-main/navbar-main.component';
import { InterceptionObserverDirective } from './directives/InterceptionObserver.directive';
import { PrimengModule } from './primeng/primeng.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarMainComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InterceptionObserverDirective,
    PrimengModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
