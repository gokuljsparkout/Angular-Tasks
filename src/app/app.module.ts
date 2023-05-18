import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicExplorerComponent } from './topic-explorer/topic-explorer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TopicExplorerComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
