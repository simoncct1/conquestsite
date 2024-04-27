// var check = function() {
//     if (document.getElementById('password').value ==
//       document.getElementById('password_confirmation').value) {
//       document.getElementById('message').style.color = 'green';
//       document.getElementById('message').innerHTML = '';
//     } else {
//       document.getElementById('message').style.color = 'red';
//       document.getElementById('message').innerHTML = 'Les mots de passe ne correspondent pas';
//     }
//   }
/**
 * Helper function for POSTing data as JSON with fetch.
 *
 * @param {Object} options
 * @param {string} options.url - URL to POST data to
 * @param {FormData} options.formData - `FormData` instance
 * @return {Object} - Response body from URL that was POSTed to
 */
async function postFormDataAsJson({ url, formData }) {
	const plainFormData = Object.fromEntries(formData.entries());
	const formDataJsonString = JSON.stringify(plainFormData);
	const fetchOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: formDataJsonString,
	};

	const response = await fetch(url, fetchOptions);

	if (!response.ok) {
		const errorMessage = await response.text();
		throw new Error(errorMessage);
	}else{
        // window.location.replace('/confirm.html');
        document.getElementById('messageok').style.color = 'white';
        document.getElementById('messageok').innerHTML = 'Message envoyé avec succès';
       console.log('Message envoyé avec succès');
    }

	return response.json();
}

/**
 * Event handler for a form submit event.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
 *
 * @param {SubmitEvent} event
 */
async function handleFormSubmit(event) {
	event.preventDefault();
	const form = event.currentTarget;
	const url = form.action;
	try {
		const formData = new FormData(form);
		const responseData = await postFormDataAsJson({ url, formData });
        console.log({ formData});
		console.log({ responseData });
	} catch (error) {
        // document.getElementById('message').innerHTML = 'Cette addresse email est déja utilisée';
    }
}

const exampleForm = document.getElementById("email-form");
exampleForm.addEventListener("submit", handleFormSubmit);