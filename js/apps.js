let popupInput = document.getElementById('mypopup_input'),
    popupReg = document.getElementById('mypopup_reg'),
    popupToggelInput = document.getElementById('myBtn_input'),
    popupToggelReg = document.getElementById('myBtn_reg'),
    popupCloseInput = document.querySelector('.close_input');
    popupCloseReg = document.querySelector('.close_reg');

    popupToggelInput.onclick = function() {
        popupInput.style.display="block";
    };

    popupToggelReg.onclick = function() {
        popupReg.style.display="block";
    };

    popupCloseInput.onclick = function() {
        popupInput.style.display="none";
    };

    popupCloseReg.onclick = function() {
        popupReg.style.display="none";
    };

    window.onclick = function(e) {
        if(e.target == popupInput){
            popupInput.style.display="none";
            }
        else if(e.target == popupReg){
            popupReg.style.display="none";
            }
    };
