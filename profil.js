

const url = "http://127.0.0.1:8000/api/user"; // API URL
const access_token = localStorage.getItem("accessToken");
const method = "GET"; // Request method, change for what's needed
replace();
document.getElementById("deco").addEventListener('click',  function(){    
    localStorage.removeItem("accessToken"); 
}
);

function replace(){
    if(!access_token){
    window.location.replace("/index.html");
    }
}
fetch(url, {
    method,
    headers: {
        "Content-Type": "application/json",
		Accept: "application/json",
        'Authorization': 'Bearer ' + access_token,  
    }
})  .then(response => response.json())
.then(data => {
    console.log(data);
    document.getElementById("pp").setAttribute('src','/avatars/' + data.image);
    document.getElementById("prenom").innerHTML = data.name;
    document.getElementById("ndc").innerHTML = data.ndc;
    document.getElementById("email").innerHTML = data.email;
  })
.catch(error => console.error('Error:', error));

document.getElementById("imgfrm").addEventListener("click", function(){
    document.getElementById("avatar").style.display ='flex'
})


document.getElementById("upp").addEventListener("change", function() {
    changeImage(this);
  });
  
  function changeImage(input) {
    var reader;
  
    if (input.files && input.files[0]) {
      reader = new FileReader();
  
      reader.onload = function(e) {
        console.log(input.value);
        console.log(e.target.result)
        document.getElementById("pp").setAttribute('src', e.target.result);
      }
  
      reader.readAsDataURL(input.files[0]);

    }
  }

