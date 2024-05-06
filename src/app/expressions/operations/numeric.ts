import {OperationInterface} from "../OperationInterface";


// class represents numeric operations
export class Numeric {

  static operations: OperationInterface[] = [
    {label: 'greater', value: '>'},
    {label: 'greater equal', value: '>='},
    {label: 'less', value: '<'},
    {label: 'less equal', value: '<='},
    {label: 'between', value: 'between'},
    {label: 'max', value: 'max'},
    {label: 'min', value: 'min'},
    {label: 'add', value: '+'},
    {label: 'subtract', value: '-'},
    {label: 'multiply', value: '*'},
    {label: 'divide', value: '/'},
    {label: 'modulo', value: '%'},
  ]
}
