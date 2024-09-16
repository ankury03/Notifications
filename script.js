let toastbox = document.querySelector("#toast-box");

let sucessMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Something went wrong, Error';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input';

function showToast(message){
    let toast = document.createElement("div");
    toast.classList.add('toast');
    toast.innerHTML = message;
    toastbox.appendChild(toast);

    if(message.includes('Error')){
       toast.classList.add("Error");
    }
    if(message.includes('Invalid')){
        toast.classList.add("Invalid");
     }

     setTimeout(() => {
        toast.remove();
     }, 5000);

}