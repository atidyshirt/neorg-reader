import { Injectable } from '@angular/core';
import { AlertController, AlertOptions } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class AlertService {
    constructor(private alertCtrl: AlertController = new AlertController()) {}

    async createAlert(alertData: AlertOptions) {
        const alert = await this.alertCtrl.create(alertData);
        await alert.present();
    }
}
