var chkBox = document.getElementById('nav-toggle');
    chkBox.onchange = function(){
        if(chkBox.checked){
            chkBox.parentNode.style.backgroundColor = "#FFF";
        } else{
            chkBox.parentNode.style.backgroundColor = "";
        }
    };