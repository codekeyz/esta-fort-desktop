import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { TitlebarComponent } from './components/widgets/titlebar/titlebar.component';
import { SidebarComponent } from './components/widgets/sidebar/sidebar.component';
import { ContentHeaderComponent } from './components/widgets/content-header/content-header.component';
import { InfoboxComponent } from './components/widgets/infobox/infobox.component';
import { ProgressComponent } from './components/widgets/progress/progress.component';
import { DialogComponent } from './components/widgets/dialog/dialog.component';
import * as bootstrap from 'bootstrap';
import * as slimScroll from 'jquery-slimscroll';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { NotificationComponent } from './components/notification/notification.component';
import { NoticeboardComponent } from './components/noticeboard/noticeboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchbarComponent } from './components/widgets/searchbar/searchbar.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    WebviewDirective,
    TitlebarComponent,
    SidebarComponent,
    ContentHeaderComponent,
    InfoboxComponent,

    ProgressComponent,
    DialogComponent,
    AnnouncementsComponent,
    NotificationComponent,
    NoticeboardComponent,
    DashboardComponent,

    SearchbarComponent
  ],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
