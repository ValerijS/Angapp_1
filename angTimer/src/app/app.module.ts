import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowTimeComponent } from './show-time/show-time.component';
import { TimerServiceService } from './timer-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowTimeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [TimerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
