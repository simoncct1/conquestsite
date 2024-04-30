document.getElementById("redir").addEventListener('click',
function(){
     let token = localStorage.getItem("accessToken");
     if(token){
        this.setAttribute("href", ("/profil.html"))
     }else{
        this.setAttribute("href", ("/log-in.html"))
     }
})