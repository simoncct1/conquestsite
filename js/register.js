// const thisForm = document.getElementById('userinfo');
// thisForm.addEventListener('submit', async function (e) {
//     e.preventDefault();
//     const formData = new FormData(thisForm).entries();
//     for (var [key, value] of formData.entries()) { 
//       console.log(key, value);
//     }
//     const response = await fetch('http://127.0.0.1:8000/register', {
//         method: 'POST',
//         headers: {  
//           Accept: "application/json"  
//         }  ,
//         body: JSON.stringify(Object.fromEntries(formData))
//     });

//     const result = await response.json();
//     console.log(result)
// });