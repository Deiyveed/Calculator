let inputs = document.querySelector(".inputs")
let outputs = document.querySelector(".outputs")
let allBtns = document.querySelectorAll(".num-button, .func-button-2")
let clear = document.getElementById("clear")
let equals = document.querySelector("#equals")

let percentage = document.querySelector("#percent")
// For Number Inputs
allBtns.forEach((button, i) => {
    button.addEventListener("click", () => {
        if (inputs.innerHTML == "0") {
            inputs.innerHTML = "";
        }

        let value = allBtns[i].innerHTML;
        inputs.innerHTML = inputs.innerHTML + value;
    })
})

// To Clear all Inputs
clear.addEventListener("click", () => {
    inputs.innerHTML = "";
    outputs.innerHTML = "";
})

// Function to Evaluate
function evaluate(result) {
    try {
        const output = eval(inputs.innerHTML);
        const formattedOutput = parseFloat(output.toFixed(6)); // Convert to string and remove trailing zeros
        console.log(output);
        return formattedOutput;
    } catch (error) {
        return Swal.fire({
            title: 'Error!',
            text: 'Please enter a valid mathematical equation',
            icon: 'error',
            confirmButtonText: 'Okay'
        })
    }
}

// For Percent
percentage.addEventListener("click", () => {
    let result = inputs.innerHTML;
    let value = parseFloat(result) / 100;
    outputs.innerHTML = value.toString();
})


// To Calculate all inputs
equals.addEventListener("click", () => {
    let result = inputs.innerHTML;
    outputs.innerHTML = evaluate(result);
    inputs.innerHTML = ""
})

