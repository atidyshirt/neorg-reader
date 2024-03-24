import { Injectable } from '@angular/core';
import { AlertService } from '../utils/alert.service';
import { Handle } from './alert.model';

@Injectable({
    providedIn: 'root',
})
export class FileSystemAlertService {
    constructor(private alertService: AlertService) {}

    async createDirectoryWithAlert<T>(handler: Handle<T>) {
        await this.alertService.createAlert({
            header: 'Create Directory',
            message: 'Please specify the name of the new directory',
            inputs: [
                {
                    name: 'name',
                    type: 'text',
                    placeholder: 'new',
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                },
                {
                    text: 'Create',
                    handler: handler,
                },
            ],
        });
    }
}
