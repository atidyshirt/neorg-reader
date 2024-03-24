import { Injectable } from '@angular/core';
import { Filesystem, Directory, Encoding, ReadFileResult } from '@capacitor/filesystem';
import { Observable, from } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FileService {
    private buffer$: Observable<ReadFileResult>;
    constructor(
        private path: string,
        private directory: Directory = Directory.Documents
    ) {
        this.path = path;
        this.buffer$ = from(this.readFile(path));
    }

    private async writeFile(path: string, content: string) {
        console.log('FileService.writeFile:', path);
        await Filesystem.writeFile({
            path: path,
            data: content,
            directory: Directory.Documents,
            encoding: Encoding.UTF8,
        });
    }

    private async readFile(path: string): Promise<ReadFileResult> {
        console.log('FileService.readFile:', path);
        const contents = await Filesystem.readFile({
            path: path,
            directory: Directory.Documents,
            encoding: Encoding.UTF8,
        });

        return contents;
    }

    private async deleteFile(path: string) {
        console.log('FileService.deleteFile:', path);
        await Filesystem.deleteFile({
            path: path,
            directory: Directory.Documents,
        });
    }

    private async readFilePath(path: string): Promise<ReadFileResult> {
        console.log('FileService.readFilePath:', path);
        const contents = await Filesystem.readFile({
            path: path,
        });

        return contents;
    }
}
