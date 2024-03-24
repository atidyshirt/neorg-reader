import { Injectable } from '@angular/core';
import { AlertController, AlertOptions } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class AlertService {
    constructor(private alertCtrl: AlertController = new AlertController()) {}

    async createAlert(alertData: AlertOptions) {
        const alert = await this.alertCtrl.create(alertData);
        // const alert = await this.alertCtrl.create({
        //     header: 'Create folder',
        //     message: 'Please specify the name of the new folder',
        //     inputs: [
        //         {
        //             name: 'name',
        //             type: 'text',
        //             placeholder: 'MyDir',
        //         },
        //     ],
        //     buttons: [
        //         {
        //             text: 'Cancel',
        //             role: 'cancel',
        //         },
        //         {
        //             text: 'Create',
        //             handler: async (data: Handle<T>) => {
        //                 await handle();
        //                 // await Filesystem.mkdir({
        //                 //     directory: Directory.Documents,
        //                 //     path: `${this.currentFolder}/${data.name}`,
        //                 // });
        //                 // this.loadDocuments();
        //             },
        //         },
        //     ],
        // });

        await alert.present();
    }
}
