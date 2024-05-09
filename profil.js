

const url = "https://api.conqueststories.be/api/user"; // API URL
const access_token = localStorage.getItem("accessToken");
const pic = localStorage.getItem("pp");
var id;
var badges =new Array();

const method = "GET"; // Request method, change for what's needed
replace();
document.getElementById("deco").addEventListener('click',  function(){    
    localStorage.removeItem("accessToken"); 
    localStorage.removeItem("id"); 
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
    if(!pic){document.getElementById("pp").setAttribute('src','https://api.conqueststories.be/public/image/' + data.avatar);}else{
        document.getElementById("pp").setAttribute('src', pic);
    }
    document.getElementById("prenom").innerHTML = data.name;
    document.getElementById("ndc").innerHTML = data.ndc;
    document.getElementById("email").innerHTML = data.email;
    localStorage.setItem("id", data.id);
    if(data.bdg1){
      badges.push(data.bdg1);
    }
    if(data.bdg2){
      badges.push(data.bdg2);
    }
    if(data.bdg3){
      badges.push(data.bdg3);
    }
    if(data.bdg4){
      badges.push(data.bdg4);
    }
    if(data.bdg5){
      badges.push(data.bdg5);
    }
    fillBadges();
    console.log(badges);
  })
.catch(error => console.error('Error:', error));
function fillBadges(){
  var restants = document.querySelectorAll("#restants");
  console.log(restants);
  badges.forEach(badge => {
    document.querySelector(".reu").innerHTML += "<img src='"+badge+"'>";
    restants.forEach(restant =>{
      if(restant.getAttribute('src') == badge){
        restant.style.display= 'none'
      };
        
    })
  });
 
}

document.getElementById("imgfrm").addEventListener("click", function(){
    document.getElementById("avatar").style.display ='flex'
    id =localStorage.getItem("id")
   console.log(id);
})

  const uploadButton = document.getElementById('uploadButton');
  const fileInput = document.getElementById('fileInput');
  uploadButton.addEventListener('click', () => {
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('avatar', file);
    fetch('https://api.conqueststories.be/user/' + id, {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log('File uploaded successfully!');
    })
    .catch(error => {
        window.location.replace('/profil.html');
    });
  });