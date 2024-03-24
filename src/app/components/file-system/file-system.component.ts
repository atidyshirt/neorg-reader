import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { ToastController } from '@ionic/angular';
import { DirectoryService } from '../../api/file-system/directory.service';
import { Directory } from '@capacitor/filesystem';

@Component({
    selector: 'file-system',
    templateUrl: 'file-system.component.html',
})
export class FileSystemComponent implements OnInit {
    @ViewChild('filepicker')
    uploader!: ElementRef;

    constructor(
        private route: ActivatedRoute,
        private directoryService: DirectoryService
    ) {}

    ngOnInit() {
        this.directoryService.loadDocuments(this.route.snapshot.paramMap.get('folder') || '');
    }

    async createFolder() {
        await this.directoryService.createFolderWithAlert();
    }

    addFile() {
        this.uploader.nativeElement.click();
    }

    async fileSelected($event: any) {
        const selected = $event.target.files[0];

        // await write_blob({
        //     directory: Directory.Documents,
        //     path: `${this.directoryService.currentFolder}/${selected.name}`,
        //     blob: selected,
        //     on_fallback(error: any): void {
        //         console.error('error: ', error);
        //     },
        // });

        this.directoryService.loadDocuments();
    }

    async itemClicked(entry: any) {}

    async openFile(entry: any) {}
    b64toBlob = (b64Data: any, contentType = '', sliceSize = 512) => {};

    async delete(entry: any) {}

    startCopy(file: any) {}

    async finishCopyFile(entry: any) {}
}
