const inc = document.querySelector(".inc");
const dec = document.querySelector(".dec");
const show = document.querySelector(".shw");
var a = 1;
inc.addEventListener('click', ()=> {
        ++a;
        if(a < 10 && a >= 0){
            show.innerText = "0" + a;
        }else {
            show.innerText = a;
        }
        
})
dec.addEventListener('click', ()=> {
    a--;
    if(a < 10 && a >= 0){
        show.innerText = "0" + a;
    }else {
        show.innerText = a;
    }
})
const inp_cls = document.querySelector(".input");

inp_cls.addEventListener('click', () => {
    inp_cls.classList.add('trans');
})


window.addEventListener('load', () =>  {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('.tasks');
  

    
   form.addEventListener('submit', (e) => {
            e.preventDefault(); 

            const task = input.value;

            if(!task) {
                alert('please fill out');
                return;
            }

            const task_el = document.createElement("div");
            task_el.classList.add("task");

            const task_content_el = document.createElement("div");
            task_content_el.classList.add("content");
            

            task_el.appendChild(task_content_el);
            const task_input_el = document.createElement("input");
            task_input_el.classList.add("text");
            task_input_el.type = "text";
            task_input_el.value = task;
            task_input_el.setAttribute("readonly", "readonly");

            const actions = document.createElement("div");
            actions.classList.add("actions");
            const edit = document.createElement('button');
            edit.classList.add('edit');
            const delete_el = document.createElement('button');
            delete_el.classList.add('delete');
            edit.innerHTML = "edit";
            delete_el.innerHTML = "delete";

            actions.appendChild(edit);
            actions.appendChild(delete_el);
            
            
            task_content_el.appendChild(task_input_el);
            task_content_el.appendChild(actions);
            list_el.appendChild(task_el);

            delete_el.addEventListener('click', () => {
                task_content_el.remove();
            });

            const save = document.createElement("button");
            save.innerHTML = "save";
            save.classList.add("save-btn");
            edit.addEventListener("click", function() {
                task_input_el.readOnly = false;
                task_input_el.focus();
                edit.remove();
                actions.appendChild(save);
                actions.appendChild(delete_el);
                task_input_el.addEventListener("keyup", (event) => {
                    if (event.key === "Enter") {
                        task_input_el.setAttribute("readonly", "readonly");
                        task_input_el.blur();
                    }
                });
            });
            save.addEventListener('click', () => {
                task_input_el.setAttribute("readonly", "readonly");
                task_input_el.blur();
            });

        });
        if(input.focus === false) {
            inp_cls.classList.remove("trans");
        }

    });



    