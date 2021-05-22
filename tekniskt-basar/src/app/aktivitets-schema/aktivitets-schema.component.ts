import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { Router } from '@angular/router';


@Component({
  selector: 'app-aktivitets-schema',
  templateUrl: './aktivitets-schema.component.html',
  styleUrls: ['./aktivitets-schema.component.css']
})
export class AktivitetsSchemaComponent implements OnInit {
  
  @ViewChild('accordion', { static: true })
  Accordion!: MatAccordion;

  closeAllPanels(){
    this.Accordion.closeAll();
}
openAllPanels(){
    this.Accordion.openAll();
}
  ngOnInit(): void {
  }

}
