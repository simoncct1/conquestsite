

const url = "http://127.0.0.1:8000/api/user"; // API URL
const access_token = localStorage.getItem("accessToken");
const pic = localStorage.getItem("pp");
var id;
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
    if(!pic){document.getElementById("pp").setAttribute('src','http://127.0.0.1:5501/public/image/' + data.avatar);}else{
        document.getElementById("pp").setAttribute('src', pic);
    }
    document.getElementById("prenom").innerHTML = data.name;
    document.getElementById("ndc").innerHTML = data.ndc;
    document.getElementById("email").innerHTML = data.email;
    localStorage.setItem("id", data.id);
  })
.catch(error => console.error('Error:', error));


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
    fetch('http://127.0.0.1:8000/user/' + id, {
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