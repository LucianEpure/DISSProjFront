import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbIconModule,
  NbButtonModule,
  NbDatepickerModule,
  NbMediaBreakpoint,
  NbActionsModule,
  NbCalendarModule,
  NbRadioModule,
  NbTabsetModule
} from '@nebular/theme';


import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { LIGHT_THEME } from './theme';
import { StoreModule } from '@ngrx/store';
import { RootEffects } from './state/root.effects';
import { EffectsModule } from '@ngrx/effects';
import * as fromApp from './state/app.reducer';
import { CommunicationService } from './communication.service';
import { AuthGuard } from './auth.guard';
const mediaBreakpoints: NbMediaBreakpoint[] = [
  {
    name: 'xs',
    width: 0,
  },
  {
    name: 'sm',
    width: 320,
  },
  {
    name: 'md',
    width: 480,
  },
  {
    name: 'lg',
    width: 768,
  },
  {
    name: 'xl',
    width: 1024,
  },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    NbThemeModule.forRoot({ name: 'light' }, [LIGHT_THEME], mediaBreakpoints),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    SharedModule,
    AppRoutingModule,
    NbButtonModule,
    NbActionsModule,
    StoreModule.forRoot({ app: fromApp.reducer }),
    EffectsModule.forRoot(RootEffects),
    NbCalendarModule,
    NbRadioModule,
    NbTabsetModule,
    FormsModule
  ],
  providers: [CommunicationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
