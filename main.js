function insert(number) {
    document.form.textview.value = document.form.textview.value + number;
}

function clean() {
    document.form.textview.value = "";
}

function deletePrevious() {
    let number = document.form.textview.value;
    document.form.textview.value = number.substring(0, number.length-1);
}

function calculated() {
    let number = document.form.textview.value;
    if(number) {
        document.form.textview.value = eval(number);
    }
}

function square() {
    let number = document.form.textview.value;
    if(number) {
        document.form.textview.value = Math.pow(number,);
    }
}