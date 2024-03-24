import { Injectable } from '@angular/core';
import { Filesystem, Directory, FileInfo } from '@capacitor/filesystem';
import { FileSystemAlertService } from './directory-alert.service';

@Injectable({
    providedIn: 'root',
})
export class DirectoryService {
    private folderContent: FileInfo[] = [];
    currentFolder: string = '';

    constructor(private fileSystemAlertService: FileSystemAlertService) {}

    async loadDocuments(loadingFolder?: string): Promise<void> {
        const { files } = await Filesystem.readdir({
            directory: Directory.Documents,
            path: loadingFolder ?? this.currentFolder,
        });
        console.log("DirectoryService.loadDocuments", files);
        this.folderContent = files;
    }

    async createFolderWithAlert() {
        await this.fileSystemAlertService.createDirectoryWithAlert(this.createFolderHandler);
    }

    private createFolderHandler = async (data: { name: string }) => {
        await Filesystem.mkdir({
            directory: Directory.Documents,
            path: `${this.currentFolder}/${data.name}`,
        });
        this.loadDocuments();
    };
}
