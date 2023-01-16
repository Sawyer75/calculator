let a = '';//first numder
let d = '';//second number
let sign = '';//nunber operetion
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

//экран
const out = document.querySelector('.calc-screen p');

//функция очистки
function clearAll() {
   a = '';//first numder and result
   d = '';//second number
   sign = '';//nunber operetion
   finish = false;
   out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
   //нажата не кнопкa
   if (!event.target.classList.contains('btn')) return;
   //нажата кнопка clearAll ас
   if (event.target.classList.contains('ac')) return;

   out.textContent = '';
   if (event.target.classList.contains('plus-minus')) {
      a = -1 * a; //Если нажата кнопка с классом plus-minus, то выполняется условие.
   } else if (event.target.classList.contains('percent')) {
      if (a !== '') {
         d = a * (d / 100);
         out.textContent = d;
      }
      else {
         a = a / 100; //Если нажата кнопка с классом percent, то выполняется условие.
         out.textContent = a;
      }
   }
   out.textContent = a; //Запись и вывод результата на экран.
   //получаем нажатую кнопку
   const key = event.target.textContent;
   // если нажата кнопка 0-9 или.

   if (digit.includes(key)) {
      if (d === '' && sign === '') {
         a += key;
         console.table(a, d, sign);
         out.textContent = a;
      }
      else if (a !== '' && d !== '' && finish) {
         d = key;
         finish = false;
         out.textContent = d;
         return;
      }

      else {
         d += key;
         out.textContent = d;
      }
      console.table(a, d, sign);
      return;

   }
   //если нажата кнопка +-/x
   if (action.includes(key)) {
      sign = key;
      out.textContent = sign;
      console.table(a, d, sign);
      return;
   }
   // нажато равно =
   if (key === "=") {
      if (d === '') d = a;
      switch (sign) {
         case "+":
            a = (+a) + (+d);
            break;
         case "-":
            a = a - d;
            break;
         case "X":
            a = a * d;
            break
         case "/":
            if (d === '0') {
               out.textContent = 'error';
               a = '';
               d = '';
               sign = '';
               return;
            }
            a = a / d;
            break;
      }

      finish = true;
      out.textContent = a;
      console.table(a, d, sign);
   }

}


