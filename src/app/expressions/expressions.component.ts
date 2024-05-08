import {Component} from '@angular/core';
import {OperationsList} from "./operations";
import * as jsonLogic from 'json-logic-js';


@Component({
  selector: 'app-expressions',
  templateUrl: './expressions.component.html',
  styleUrl: './expressions.component.css'
})
export class ExpressionsComponent {

  operationList = new OperationsList();
  selectedOperation: string = ''; // simple operations
  selectedNodeOperation: string = ''; // operations between nodes
  firstInput?: any;
  secondInput?: any;
  result: any;
  treeData: any[] = []; // represents decision tree
  results: any[] = []; // stores results of simple operations
  nodeResult: any; // final result of node operations

  // selects simple and node operation
  public selectOperation(value: any) {
    if (value.target.id === 'simpleOperation') {
      this.selectedOperation = value.target.value;
    } else if (value.target.id === 'nodesOperation') {
      this.selectedNodeOperation = value.target.value;
    }
  }

  // generates result for simple operations
  public generateResult() {

    if (this.firstInput !== undefined && this.firstInput !== null &&
      this.secondInput !== undefined && this.secondInput !== null) {

      this.result = jsonLogic.apply({
        [this.selectedOperation] : [this.firstInput, this.secondInput]
      });

      this.results.push(this.result);
      this.addNodeToTree();
    }
  }

  // generates result for node operations
  public completeNodeOperation() {

    if (this.results.length >= 2) {
      this.nodeResult = jsonLogic.apply({
        [this.selectedNodeOperation]: this.results
      })
    }
  }

  // adds node to tree
  private addNodeToTree() {

    this.treeData.push({
      firstInput: this.firstInput,
      operation: this.selectedOperation,
      secondInput: this.secondInput,
      result: this.result
    });
  }

  public clearTree() {
    this.treeData = [];
  }

  public refreshNodeResult() {
    this.nodeResult = '';
  }


  public refresh() {
    location.reload();
  }
}

