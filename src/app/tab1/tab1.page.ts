import { Component, OnInit, AfterViewInit } from '@angular/core';
// var nipplejs = require("nipplejs");
import { NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements AfterViewInit {
  size = 50;

  direction = '';

  enableHelp = true;
  segment = 'Bluetooth';
  devices = [];
  selectedDevice = '';

  constructor(
    public navCtrl: NavController,
    private translate: TranslateService,
    public toastController: ToastController,
    private bluetoothSerial: BluetoothSerial
  ) {
    this.enableHelp = localStorage.getItem('help') == 'yes' ? true : false;
  }

  ngAfterViewInit() {
    const lang = localStorage.getItem('lang');
    if (lang) {
      this.translate.setDefaultLang(lang);
      this.translate.use(lang);
    } else {
      this.translate.setDefaultLang('en');
      this.translate.use('en');
    }

    this.bluetoothSerial
      .isEnabled()
      .then(data => {
        this.bluetoothSerial
          .list()
          .then(list => {
            this.devices = list;
          })
          .catch(ee => {});
      })
      .catch(e => {});
  }

  changeHelp(e) {
    localStorage.setItem('help', e.target.checked ? 'yes' : 'no');
    this.enableHelp = e.target.checked;
  }

  connect() {
    this.bluetoothSerial.connect(this.selectedDevice).subscribe(aa => {
      this.bluetoothSerial.isConnected().then(data => {
        this.presentToast(this.translate.instant('connected'));
      });
    });
  }

  send(command) {
    this.bluetoothSerial.write(command).then(success => {
      this.presentToast(this.translate.instant('sent'));
    });
  }
  segmentChanged(event) {
    this.segment = event.target.value;
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  onSelectChange(e) {
    console.log('eeeeeeee', e.target.value);

    this.translate.setDefaultLang(e.target.value);
    this.translate.use(e.target.value);
    localStorage.setItem('lang', e.target.value);
  }
}
