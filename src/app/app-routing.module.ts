import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'file-system', pathMatch: 'full' },
  {
    path: 'file-system',
    loadChildren: () => import('./components/file-system/file-system.module').then((m) => m.FileSystemModule),
  },
  {
    path: 'file-system/:folder',
    loadChildren: () => import('./components/file-system/file-system.module').then((m) => m.FileSystemModule),
  },
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [
    ],
})
export class AppRoutingModule {}
