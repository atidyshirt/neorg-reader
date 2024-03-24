import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouteReuseStrategy, provideRouter, withComponentInputBinding } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app-routing.module';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

export const appConfig: ApplicationConfig = {
    providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        provideHttpClient(),
        provideRouter(routes, withComponentInputBinding()),
        importProvidersFrom([
            IonicModule.forRoot(),
            provideFirebaseApp(() =>
                initializeApp({
                    projectId: 'angular-capacitor-example',
                    appId: '1:735796592806:web:4215646e290a7eee5eb467',
                    storageBucket: 'angular-capacitor-example.appspot.com',
                    apiKey: 'AIzaSyA4ZzZ6DaA-UY0ow9jzkg7n_omFPFjouJ0',
                    authDomain: 'angular-capacitor-example.firebaseapp.com',
                    messagingSenderId: '735796592806',
                })
            ),
            provideAuth(() => getAuth()),
            provideFirestore(() => getFirestore()),
        ]),
        provideAnimations(),
    ],
};
