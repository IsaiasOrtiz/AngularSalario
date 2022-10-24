import { Component, OnInit , Input} from '@angular/core';
import { Salario } from '../../models/Salario';
@Component({
  selector: 'app-planilla-tabla',
  templateUrl: './planilla-tabla.component.html',
  styleUrls: ['./planilla-tabla.component.css']
})
export class PlanillaTablaComponent implements OnInit {

  @Input() salario: Salario[]  = [{
    nombre : "N/A" , 
    salario: 0,
    isss: 0,
    afp: 0,
    renta: 0
  }];
  constructor() { }

  ngOnInit(): void {
  }
  redodear(num : number): string{
   return num.toFixed(2);   
  }
  calcularAfp(salario: number): number
  {
      var afp = 0;
      afp = salario * 0.0725;
      return afp;
  }
  calcularIsss(salario: number): number{
    let isss=0;
    if (salario >= 1000) {
        isss = 30;
    } else if (salario > 0 && salario < 1000) {
        isss = salario * 0.03;
    }
    return isss;
}
calcularRenta(salario: number){
  var renta = 0;
      var salarioMenosAfpIsss = salario - (this.calcularAfp(salario) + this.calcularIsss(salario));
      if (salarioMenosAfpIsss < 470) {
          renta = 0;
      } else if (salarioMenosAfpIsss > 470 && salarioMenosAfpIsss < 895.24) {
          renta = ((salarioMenosAfpIsss-472)*0.10)+17.67;
      } else if (salarioMenosAfpIsss > 895.25 && salarioMenosAfpIsss < 2038.1) {
          renta = ((salarioMenosAfpIsss-895.24)*0.20)+60;
      } else if (salarioMenosAfpIsss > 2038.11) {
          renta = ((salarioMenosAfpIsss-2038.10)*0.30)+288.57;
      }
      return renta;
}
sueldoNeto(salario: number)
{
     var salarioN=salario - (this.calcularIsss(salario)+this.calcularAfp(salario)+this.calcularRenta(salario));
     return salarioN;
}
}
