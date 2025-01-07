import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentPagesComponent } from './pages/student-pages/student-pages.component';
import { MyModalComponent } from './components/my-modal/my-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    StudentPagesComponent,
    MyModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
