import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ElectronService } from './components/core/electron.service';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';
import { fadeAnimation } from '../app/app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
  ourApp: Electron.BrowserWindow;
  appTitle: string;

  constructor(
    public elSvc: ElectronService,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');

    if (elSvc.isElectron()) {
      this.ourApp = elSvc.getAppWindow();
    }
  }

  ngOnInit(): void {
    this.appTitle = 'EstaFort';
    this.setupResizer();
  }

  setupResizer() {
    $(window).resize(function() {
      const width = $(window).width();
      const hasClass = $('body').hasClass('sidebar-collapse');

      if (width <= 850) {
        if (hasClass !== true) {
          $('body').addClass('sidebar-collapse');
        }
      } else {
        if (hasClass === true) {
          $('body').removeClass('sidebar-collapse');
        }
      }
    });
  }
}
