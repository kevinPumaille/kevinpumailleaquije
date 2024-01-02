import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  descargarPDF() {
    const pdfUrl = '/assets/cv_Kevin_Pumaille_Aquije.pdf';
    const pdfNombre = 'cv_Kevin_Pumaille_Aquije.pdf'; 

    this.http.get(pdfUrl, { responseType: 'arraybuffer' }).subscribe((data: ArrayBuffer) => {
      const blob = new Blob([data], { type: 'application/pdf' });

      const url = window.URL.createObjectURL(blob);
      const enlace = document.createElement('a');

      enlace.href = url;
      enlace.download = pdfNombre;
      
      enlace.click();

      window.URL.revokeObjectURL(url);
    });
  }
}
