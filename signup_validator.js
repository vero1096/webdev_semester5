function validate() {
    document.querySelectorAll("[data-validate]").forEach(element=> {
        element.classList.remove("error")
    })

    let min 
    let max

    document.querySelectorAll("[data-validate]").forEach(element => {
        switch (element.getAttribute("data-validate")) {
            case "str":
                min = element.getAttribute("data-min")
                max = element.getAttribute("data-max")
                let total_characters = element.value.length
                
                let users = {
                    "show_name" : function() {
                    const last_name = document.querySelector("#last_name").value
                    const first_name = document.querySelector("#first_name").value
                    const div_username = ` 
                        <div class="user_first_name">
                        <span>First name</span>
                        <span>${first_name}</span>
                        <span>Last name</span>
                        <span>${last_name}</span>
                        </div>
                        `      
                    document.querySelector("#users").insertAdjacentHTML("beforeend", div_username)
                    }
                }
               
                if(!total_characters || total_characters < min || total_characters > max) {
                    element.classList.add("error")
                } else {
                    users.show_name()
                }          
            break
        }
    })
}


function clear_error() {
    event.target.classList.remove("error")
}

