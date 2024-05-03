import { Component } from '@angular/core';
import {OperationsList} from "./operations";
import * as jsonLogic from 'json-logic-js';

@Component({
  selector: 'app-expressions',
  templateUrl: './expressions.component.html',
  styleUrl: './expressions.component.css'
})
export class ExpressionsComponent {

  operationList = new OperationsList();
  selectedOperation: string = '';
  firstInput: any;
  secondInput?: any;
  thirdInput?: any;
  result: any;
  someItem = 'Decision Tree!';


  public selectOperation(value: any) {
    console.log("value", value);
  }

  public generateResult() {

    this.result = jsonLogic.apply({[this.selectedOperation]:
        [this.firstInput, this.secondInput, this.thirdInput]});
  }
}
