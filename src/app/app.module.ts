import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicExplorerComponent } from './topic-explorer/topic-explorer.component';
import { FormsModule } from '@angular/forms';
import { ForComponent } from './topic-explorer/for/for.component';
import { AlphabetsComponent } from './topic-explorer/alphabets/alphabets.component';
import { InputFieldComponent } from './topic-explorer/input-field/input-field.component';
import { ContentChildComponent } from './topic-explorer/content-child/content-child.component';


@NgModule({
  declarations: [AppComponent, TopicExplorerComponent, ForComponent,AlphabetsComponent, InputFieldComponent, ContentChildComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
