import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FireUploadComponent } from './fire-upload/fire-upload.component';
import { FireUploadTaskComponent } from './fire-upload-task/fire-upload-task.component';
import { DropzoneDirective } from './fire-upload/dropzone.directive';
import { MaterialUiModule } from '@ngfire-cms/material-ui';

@NgModule({
  declarations: [FireUploadComponent, FireUploadTaskComponent, DropzoneDirective],
  imports: [
    CommonModule,
    MaterialUiModule
  ],
  exports: [FireUploadComponent, FireUploadTaskComponent]
})
export class UtilFireUploadModule { }
