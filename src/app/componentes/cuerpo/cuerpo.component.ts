import { Component, OnInit, ViewChild} from '@angular/core';
import { Salario } from '../../../app/models/Salario';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
   
  @ViewChild('csvReader') csvReader: any;  
  
  data: boolean = false;
  public records: any[] = [];  

  salario: Salario[] =  [{
    nombre : "N/A" , 
    salario: 0,
    isss: 0,
    afp: 0,
    renta: 0
  }];

  constructor() { }

  ngOnInit(): void {
  }
  changeListener($event: any){
    let archivo = $event.srcElement.files;
    if(this.isValidCSVFile(archivo[0])){
      let input = $event.target;  
      let reader = new FileReader();  
      reader.readAsText(input.files[0]);  
      reader.onload = () => {  
        let csvData = reader.result;  
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);  
        this.doPlanilla(csvRecordsArray);
      };  
    }else {  
      alert("Please import valid .csv file.");  
    }  
    console.log("evento ---> ", $event.srcElement.files);
  }
  isValidCSVFile(file: any) {  
    return file.name.endsWith(".csv");  
  }  
  doPlanilla(data: any): void{
   this.salario = [];
    for(let i = 0 ; i<data.length ;i++){
      if(data[i] != null &&  data[i] != ""){
       let datos =  data[i].split(";");
        this.salario.push({
          nombre : datos[0] , 
          salario: datos[1],
          isss: datos[0],
          afp: datos[0],
          renta: datos[0]
        });
      }
    } 
    if(this.salario.length > 0){
      this.data = true;
    }else{
      this.data = false;
    }
  }
  name = 'Planilla.xlsx';
  exportToExcel(): void{
    let element = document.getElementById('planilla-tble');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }

  
}
