import './styles.css';
import { sum, multiply as myFN} from './math';

document.open();
document.write('<h1>Hello, world!!!!! </h1>');
document.close();


const multiply= (a) => a*8;

console.log('ES6 modules!');
console.log('sum(2,3)=',sum(2,3));
console.log('multiply(10)=',multiply(10));
console.log('myFN(10)=',myFN(10));

