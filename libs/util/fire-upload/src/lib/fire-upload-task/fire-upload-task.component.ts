import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'fire-upload-task',
  templateUrl: './fire-upload-task.component.html',
  styleUrls: ['./fire-upload-task.component.css']
})
export class FireUploadTaskComponent implements OnInit {

  @Input() file: File;
  @Input() filePath: string;
  @Output() fileUploaded = new EventEmitter<string>();

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  constructor(private storage: AngularFireStorage) { }

  ngOnInit() {
    this.startUpload();
  }

  startUpload() {

    // The storage path
    let path = this.filePath  ? this.filePath : '';
    path = `${path}/${this.file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    const task = this.storage.upload(path, this.file);
    this.percentage = task.percentageChanges();
    this.snapshot = task.snapshotChanges().pipe(
      finalize( async () =>  {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        const downloadURLWithoutToken = this.downloadURL.substr(0, this.downloadURL.lastIndexOf('&'));
        this.fileUploaded.next(downloadURLWithoutToken);
      })
    );

  }

}
