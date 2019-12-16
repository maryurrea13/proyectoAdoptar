import { Component, AfterViewInit } from '@angular/core';
import { perrito } from '../models/perritos';


// import { ChartsModule } from 'ng2-charts';
declare var require: any;
@Component({
  templateUrl: './dashboard.component.html'
})



export class DashboardComponent implements AfterViewInit {
  subtitle: string;
  nombre:string;
  Perrito: perrito;
  bandera: Boolean=true;
  bandera2: Boolean=true;
  bandera3: Boolean=true;
  bandera4: Boolean=true;
  bandera5: Boolean=true;
  bandera6: Boolean=true;

  constructor() {
    this.subtitle = 'This is some text within a card block.';
  }

  // lineChart
  public lineChartData: Array<any> = [
    { data: [8,13,1,13,1], label: 'Product A' },
    { data: [14,1,14,1,14], label: 'Product B' }
  ];
  public lineChartLabels: Array<any> = [
    '1',
    '2',
    '3',
    '4',
    '5',
  ];
  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(0,158,251,0.1)',
      borderColor: '#009efb',
      pointBackgroundColor: '#009efb',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#009efb'
    },
    {
      // dark grey
      backgroundColor: 'rgba(85,206,99,0.1)',
      borderColor: '#55ce63',
      pointBackgroundColor: '#55ce63',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#55ce63'
    }
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';

  ngAfterViewInit() {}
  //Mostramos el mensaje si se va a doptar el perrito
  adoptar1(event, nom) {
    const response = confirm('Gracias por adoptar a '+nom+', para ello debe completar un formulario que esta en la opcion de adoptar de la barra ');
    if (response ) {
      if(nom=="Newton"){
        this.bandera=false;
      }
      if(nom=="Mono"){
        this.bandera2=false;
      }
      if(nom=="Pancha"){
        this.bandera3=false;
      }
      if(nom=="Nata"){
        this.bandera4=false;
      }
      if(nom=="Killer"){
        this.bandera5=false;
      }
      if(nom=="Lina"){
        this.bandera6=false;
      }
    }
    return;
  }
  
}
