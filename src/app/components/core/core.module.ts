import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { AngularFireModule } from '@angular/fire';
import { AppConfig } from '../../../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ElectronService } from './electron.service';
import { AuthService } from './auth.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { DataService } from './data.service';

@NgModule({
  declarations: [TitlebarComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(AppConfig.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule
  ],
  exports: [TitlebarComponent],
  providers: [ElectronService, AuthService, DataService]
})
export class CoreModule {}
