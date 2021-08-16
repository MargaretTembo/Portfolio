   // get the buttons and display field
            const display = document.querySelector('.display');
            const buttons = document.querySelectorAll('.button');
            
            // add an event listener to each button
            
            buttons.forEach(function(buttons){
                
                buttons.addEventListener('click',calculate);
                
            })
            
            //create the calculate function
            
            function calculate(event){
                //target the button pressed
                let buttonClicked = event.target.value;
                
                if(buttonClicked === '=')
                    {
                        if(display.value != '')
                            {
                              display.value = eval(display.value); 
                            }
                    }
                else if( buttonClicked === 'AC')
                    {
                        display.value = '';
                    }
           else{
               display.value += buttonClicked;
           }
                
            }
            
                
                
            