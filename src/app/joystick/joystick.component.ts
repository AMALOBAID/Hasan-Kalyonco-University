import { Component, OnInit, AfterViewInit } from '@angular/core';
import nipplejs from 'nipplejs';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.component.html',
  styleUrls: ['./joystick.component.scss']
})
export class JoystickComponent implements OnInit, AfterViewInit {
  played = false;
  constructor(
    private translate: TranslateService,
    public toastController: ToastController,
    private bluetoothSerial: BluetoothSerial
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    const options = {
      zone: document.getElementById('zone_joystick'),
      size: 3 * 50,
      restOpacity: 12,

      color: 'red'
    };

    const manager = nipplejs.create(options);

    manager
      .on('added', (evt, nipple) => {
        nipple.on('move', (evt, data) => {
          if (data.direction) {
            this.playAudio(`./../../assets/sounds/${data.direction.angle + localStorage.getItem('lang')}.mp3`);
            this.played = true;
            const dir = document.getElementById('dir');
            const status = document.getElementById('status');
            dir.innerText = `${this.translate.instant('Direction')} : ${this.translate.instant(data.direction.angle)}`;
            status.innerText = `${this.translate.instant('Status')} : ${this.translate.instant('on')}`;

            this.bluetoothSerial.write(data.direction.angle).then(async success => {});
          }

          if (data.angle) {
            if (Math.abs(data.force) <= 1) {
              // px, py are between 0 and 1
              const px = +Math.sin(data.angle.radian) * data.force;
              const py = -Math.cos(data.angle.radian) * data.force;
            }
          }
        });
      })
      .on('removed', (evt, nipple) => {
        this.played = false;
        const status = document.getElementById('status');
        status.innerText = `${this.translate.instant('Status')} : ${this.translate.instant('off')}`;
      });
  }

  playAudio(sound: string) {
    const enabled = localStorage.getItem('help') == 'yes' ? true : false;
    if (!this.played) {
      const audio = new Audio();
      audio.src = sound;
      audio.load();
      audio.play();
    }
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
