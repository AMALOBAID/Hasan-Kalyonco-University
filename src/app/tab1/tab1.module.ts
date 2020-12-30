import { SharedjoystickComponent } from './../sharedjoystick/sharedjoystick.component';
import { JoystickComponent } from './../joystick/joystick.component';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    TranslateModule
  ],
  declarations: [Tab1Page, JoystickComponent, SharedjoystickComponent],
  providers: [BluetoothSerial]
})
export class Tab1PageModule {}
