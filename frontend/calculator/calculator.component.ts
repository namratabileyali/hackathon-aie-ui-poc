import { Component, OnInit } from "@angular/core";

@Component({
    selector:'calc',

    templateUrl:'./calculator.component.html'
})
export class CalculatorComponent implements OnInit{

    currentNumber='0';
    firstOperand;
    operator;
    waitForSecondNumber;
    constructor(){
        this.currentNumber='';
    this.firstOperand=null;
    this.operator=null;
    this.waitForSecondNumber=false;
    }
    ngOnInit(){
        
    }
    doCalculation(op,secondNumber){
        switch(op){
            case '+': return this.firstOperand += secondNumber;
            case '-': return this.firstOperand-=secondNumber;
            case '*': return this.firstOperand*=secondNumber;
            case '/': return this.firstOperand/=secondNumber;
            case '=': return secondNumber;
        }
    }

    getOperation(op:string){
        
      if(this.firstOperand==null){
          this.firstOperand=Number(this.currentNumber);
      }else if(this.operator){
        const result=this.doCalculation(this.operator,Number(this.currentNumber))
        console.log(result);
        this.currentNumber=String(result);
        this.firstOperand=result;

      }
      this.operator=op;
        this.waitForSecondNumber=true;
    }

    getDecimalPoint(){
        if(!this.currentNumber.includes('.')){
            this.currentNumber+='.';
        }
    }
    getNumber(v:string){
        console.log(v+this.waitForSecondNumber);
        if(this.waitForSecondNumber){
            this.currentNumber=v;
            this.waitForSecondNumber=false;
        }else{
            this.currentNumber==='0'?this.currentNumber=v:this.currentNumber+=v;
        }
    }

    clear(){
        console.log("clear.."+this.currentNumber);
        this.currentNumber='0';
    this.firstOperand=null;
    this.operator=null;
    this.waitForSecondNumber=false;
    }
}