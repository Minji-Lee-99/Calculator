var cal =[];
var before = '';

function make_formula(self){
  var mid_formula = document.getElementById('formula').value;
  mid_formula = mid_formula+self.value;
  document.getElementById('formula').value = mid_formula;

  if (isNaN(before) && isNaN(self.value)){
    alert('invalid input');
    reset();
  }
  else if(before=='' && isNaN(self.value)){
    alert('invalid input');
    reset();}
  else{
    before = self.value;
  }
}

function reset(){
  document.getElementById('formula').value = '';
  document.getElementById('result').value = '';
  oper.splice(0, oper.length);
  cal.splice(0, cal.length);
  before = '';
}

function result(){
  var num1='';
  var oper= document.getElementById('formula').value
  var i=0;
  var operater;
  var operand1;
  var operand2;
  //계산할 수 있는 형태로 숫자들을 합치는 과정
  while(i<oper.length){
    if (!isNaN(oper[i]) || oper[i]=='.'){
      num1 = num1+oper[i];
    }
    else{
      cal.push(num1);
      num1='';
      cal.push(oper[i]);
    }
    i+=1;
  }
  cal.push(num1);
  var i=1;
  var flag=true;
  operand1=Number(cal.shift());
  //마지막 계산과정
  while(flag){
    if (cal.length==0) {flag = false; break;}
    operater=cal.shift();
    operand2=Number(cal.shift());
    if (operater == '+'){
      operand1=operand1+operand2;
    }
    else if (operater=="*"){
      operand1=operand1*operand2;
    }
    else if (operater=="-"){
      operand1=operand1-operand2;
    }
    else if(operater=="/"){
      operand1=operand1/operand2;
    }
  }
  document.getElementById('result').value=operand1;
}
