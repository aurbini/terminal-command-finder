import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { CommandListComponent } from './components/command-list/command-list.component';
import { CommandComponent } from './components/command/command.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './pages/add/add.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PrimeNGComponent } from './pages/prime-ng/prime-ng.component';
import { TableModule } from 'primeng/table';
import { SortEvent } from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SiteLayoutComponent,
    HomeComponent,
    DropdownDirective,
    SearchbarComponent,
    CommandListComponent,
    CommandComponent,
    AddComponent,
    PrimeNGComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
