const url = "http://127.0.0.1:8000/api/me"; // API URL
const access_token = localStorage.getItem("accessToken");
console.log(access_token);
const method = "POST"; // Request method, change for what's needed

fetch(url, {
    method,
    headers: {
        "Content-Type": "application/json",
		Accept: "application/json",
        'Authorization': 'Bearer ' + access_token,   // This is the important part, the auth header
    }
}).then(res => res.json().then(console.log)).catch(console.error); // Do better handling here