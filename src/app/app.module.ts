import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatListModule,
  MatButtonModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule
} from '@angular/material';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CreateCollectionComponent } from './create-collection/create-collection.component';
import { IndexCollectionComponent } from './index-collection/index-collection.component';
import { ShowCollectionComponent } from './show-collection/show-collection.component';
import { CreateQiComponent } from './create-qi/create-qi.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateQiComponent } from './update-qi/update-qi.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RegisterComponent,
    LoginComponent,
    CreateCollectionComponent,
    IndexCollectionComponent,
    ShowCollectionComponent,
    CreateQiComponent,
    FooterComponent,
    UpdateQiComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'create-qi',
        component: CreateQiComponent
      },
      {
        path: 'update-qi',
        component: UpdateQiComponent
      },
      {
        path: 'create-collection',
        component: CreateCollectionComponent
      },
      {
        path: 'index-collection',
        component: IndexCollectionComponent
      },
      {
        path: 'show-collection',
        component: ShowCollectionComponent
      },
      {
        path: '',
        component: LandingPageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
