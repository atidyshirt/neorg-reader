import {
  IonAlert,
  IonAvatar,
  IonBadge,
  IonContent,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonLoading,
  IonSkeletonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { NgModule } from '@angular/core';
import { FileSystemComponent } from './file-system.component';

@NgModule({
  providers: [
    IonAlert,
    IonAvatar,
    IonBadge,
    IonContent,
    IonHeader,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonItem,
    IonLabel,
    IonList,
    IonLoading,
    IonSkeletonText,
    IonTitle,
    IonToolbar,
  ],
  exports: [],
  bootstrap: [FileSystemComponent]
})
export class FileSystemModule {}
