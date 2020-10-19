import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { AuthService } from 'src/app/_services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl;


  constructor(private authService: AuthService) { }

  books = [
    {
      id : 1,
      title: "كتاب ترفيع موظف " ,
      photo: "../assets/images/book.jpg",
      dateAdded: "2020 / 10 / 19"
    },
    {
      id : 1,
      title: "كتاب ترفيع موظف " ,
      photo: "../assets/images/book.jpg",
      dateAdded: "2020 / 10 / 19"
    },
    {
      id : 1,
      title: "كتاب ترفيع موظف " ,
      photo: "../assets/images/book.jpg",
      dateAdded: "2020 / 10 / 19"
    },
    {
      id : 1,
      title: "كتاب ترفيع موظف " ,
      photo: "../assets/images/book.jpg",
      dateAdded: "2020 / 10 / 19"
    },
    {
      id : 1,
      title: "كتاب ترفيع موظف " ,
      photo: "../assets/images/book.jpg",
      dateAdded: "2020 / 10 / 19"
    },
    {
      id : 1,
      title: "كتاب ترفيع موظف " ,
      photo: "../assets/images/book.jpg",
      dateAdded: "2020 / 10 / 19"
    },
    
    
  ]

  ngOnInit() {
    this.initializeUploader();
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }


  // to  upload the photos
  initializeUploader() {
    this.uploader = new FileUploader({
      // url:this.baseUrl + "users/" + this.authService.decodedToken.nameid + "/photos",
      authToken: "Bearer " + localStorage.getItem("token"),
      isHTML5: true,
      allowedFileType: ["image"],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });
    this.uploader.onAfterAddingFile = file => { file.withCredentials = false; };
  }

}
