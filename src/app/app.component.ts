import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { ViewChildren, QueryList } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

import { PopoverController, MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private popoverCtrl: PopoverController,
    private router: Router,
    private navCtrl: NavController,
    public toastController: ToastController
  ) {
    this.initializeApp();
    this.platform.ready().then(() => {});
    this.handleBackButton();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  handleBackButton() {
    this.platform.backButton.subscribeWithPriority(1, async () => {
      try {
        const element = await this.popoverCtrl.getTop();
        if (element) {
          element.dismiss();
          return;
        }
      } catch (error) {}
      try {
        const element = await this.menu.getOpen();
        if (element) {
          this.menu.close();
          return;
        }
      } catch (error) {}

      this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
        console.log(this.router.url);

        if (outlet && outlet.canGoBack()) {
          outlet.pop();
        } else if (this.router.url == '/tabs/tab2' || this.router.url == '/tabs/tab1') {
          if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
            navigator['app'].exitApp();
          } else {
            this.presentToast('press again to exit !');
            this.lastTimeBackPress = new Date().getTime();
          }
        } else {
          this.navCtrl.pop();
        }
      });
    });
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
