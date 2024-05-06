import {Operation} from './operations';

export class LogicBoolean {

  static operations: Operation[] = [
    { label: 'if', value: 'if'},
    { label: 'equal', value: '=='},
    { label: 'strict equal', value: '==='},
    { label: 'not equal', value: '!='},
    { label: 'strict unequal', value: '!=='},
    { label: 'Not', value: '!'},
    { label: 'double not', value: '!!'},
    { label: 'or', value: 'or'},
    { label: 'and', value: 'and'},

  ]
}
