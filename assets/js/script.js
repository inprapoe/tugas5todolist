 let data = [];
        let done = [];
        
        const toDoList  = document.querySelector('#todo-list');
        const doneList  = document.querySelector('#done-list');
        const input     = document.querySelector('#input-field');
        const submitBtn = document.querySelector('#submit-btn');

        const toDoInnerHtml = () => {
            for (let i = 0; i < data.length; i++) {
                toDoList.innerHTML += 
                `
                    <li class="flex items-center space-x-2">
                        <button class="w-6 h-6 text-white transition duration-300 bg-gray-300 border rounded-md hover:border-green-300 hover:bg-green-300 focus:outline-none" onclick="pushToDone(event, ${i})">✓</button>
                        <span>${data[i]}</span>
                    </li>
                `
            }             
        }

        const formSubmit = (event) => {           
            let value = input.value;
            event.preventDefault();
            data.push(value);
            toDoList.innerHTML = '';
            toDoInnerHtml();
            event.keyCode === 13 ? submitBtn.click() : '';
            console.log(value)
        }

        const pushToDone = (event, idx) => {
            event.preventDefault();
            done.push(data[idx]);
            data.splice(idx, 1);
            doneList.innerHTML = '';
            for (let i = 0; i < done.length; i++) {
                doneList.innerHTML += 
                `
                    <li class="flex items-center space-x-2">
                        <span>${done[i]}</span>
                    </li>
                `
                
            } 
            toDoList.innerHTML = '';
            toDoInnerHtml();
        }