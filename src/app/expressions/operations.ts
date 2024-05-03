import {OperationInterface} from './OperationInterface'

export class OperationsList {

  operations: OperationInterface[] = [
    {label: 'greater', value: '>'},
    {label: 'greater equal', value: '>='},
    {label: 'less', value: '<'},
    {label: 'less equal', value: '<='},
    {label: 'between', value: 'between'},
    {label: 'max', value: 'max'},
    {label: 'min', value: 'min'},
    {label: 'addition', value: '+'},
    {label: 'subtract', value: '-'},
    {label: 'multiplication', value: '*'},
    {label: 'divide', value: '/'},
    {label: 'modulo', value: '%'},
    { label: 'if', value: 'if'},
    { label: 'equal', value: '=='},
    { label: 'strict equal', value: '==='},
    { label: 'not equal', value: '!='},
    { label: 'strict unequal', value: '!=='},
    { label: 'Not', value: '!'},
    { label: 'double not', value: '!!'},
    { label: 'or', value: 'or'},
    { label: 'and', value: 'and'},
    {label: 'map', value: 'map'},
    {label: 'reduce', value: 'reduce'},
    {label: 'filter', value: 'filter'},
    {label: 'all', value: 'all'},
    {label: 'none', value: 'none'},
    {label: 'some', value: 'some'},
    {label: 'merge', value: 'merge'},
    {label: 'in', value: 'in'},
    {label: 'in', value: 'in'},
    {label: 'cat', value: 'cat'},
    {label: 'substr', value: 'substr'},
    {label: 'var', value: 'var'},
    {label: 'missing', value: 'missing'},
    {label: 'missing_some', value: 'missing_some'},
    {label: 'miscellaneous', value: 'log'}
  ];

}
