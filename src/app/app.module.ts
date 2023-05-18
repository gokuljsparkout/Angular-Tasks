import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicExplorerComponent } from './topic-explorer/topic-explorer.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { ForComponent } from './topic-explorer/for/for.component';

@NgModule({
  declarations: [AppComponent, TopicExplorerComponent, ForComponent],
=======

@NgModule({
  declarations: [AppComponent, TopicExplorerComponent],
>>>>>>> fda4571b549ae907453f0e5bc9446294ebd8b3f7
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
