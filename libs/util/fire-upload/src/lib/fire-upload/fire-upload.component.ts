import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fire-upload',
  templateUrl: './fire-upload.component.html',
  styleUrls: ['./fire-upload.component.scss']
})
export class FireUploadComponent implements OnInit {

  @Input() filePath: string;
  @Output() filesUploaded = new EventEmitter<string[]>();

  isHovering: boolean;
  files: File[] = [];
  urls: string[] = [];
  totalUploadedFiles = 0;

  constructor() { }

  ngOnInit() {
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

  onFileUploaded(url: string) {

    this.urls.push(url);
    this.totalUploadedFiles++;

    if (this.totalUploadedFiles === this.files.length) {
      this.filesUploaded.next(this.urls);
      this.urls = [];
    }

  }

}
