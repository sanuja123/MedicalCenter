import { Component, OnInit, ElementRef ,ViewChild } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';


@Component({
  selector: 'app-medireport',
  templateUrl: './medireport.component.html',
  styleUrls: ['./medireport.component.css']
})
export class MedireportComponent implements OnInit {

  medicalReport:FormGroup;
  favoriteSeason: string;
  seasons: string[] = ['Male', 'Female'];

  constructor(fb: FormBuilder) {
    this.medicalReport = fb.group({
     // hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
  }
  @ViewChild('content') content: ElementRef;

  /*public downloadPDF(){
    //console.log("download PDF");
    const doc = new jsPDF();
   
    const specialElementHandlers = {
      '#editor':function(element,renderer){
        return true;
      }
    }

    const content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML,15,15,{
      'width' : 190,
      'elementHandlers' : specialElementHandlers,

    });

    doc.save('test.pdf');
  }
  */
 public downloadPDF()
{
var data = document.getElementById('content');
html2canvas(data).then(canvas => {
// Few necessary setting options
var imgWidth = 208;
var pageHeight = 295;
var imgHeight = canvas.height * imgWidth / canvas.width;
var heightLeft = imgHeight;
 
const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
var position = 0;
pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
pdf.save('MYPdf.pdf'); // Generated PDF
});
}



}
