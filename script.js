let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';
let arr = Array.from(buttons); 

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string); // Evaluates the expression
                input.value = string;
            } catch {
                input.value = "Error";
            }
            return; // Stop execution after evaluation
        } 
        else if (e.target.innerHTML == 'AC') {
            string = ''; // Clear input
            input.value = string;
            return;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string
        }
        else{
            string += e.target.innerHTML;
            input.value = string;

        }

        // Append clicked button value to the string
        
    });
});
