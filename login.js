

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
		window.location.replace('/profil.html')
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
		console.log(responseData);
		const token = responseData.access_token;
		localStorage.setItem("accessToken", token)
	} catch (error) {
        document.getElementById('messageokok').style.color = 'red';
        document.getElementById('messageokok').innerHTML = 'Veuillez ré-essayer';
    }
}

const exampleForm = document.getElementById("login-form");
exampleForm.addEventListener("submit", handleFormSubmit);