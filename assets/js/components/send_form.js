// https://www.emailjs.com/ RECUERDA QUE PARA LOGRAR ENVIAR EL FORMULARIO DEBES REGISTRARTE AQUÍ



const formDOM = document.querySelector('#form');
const modalDOM = document.querySelector('#modal');
const modalCloseDOM = document.querySelector('#btn_close-modal');

function openModal() {
	modalDOM.open = true;
}

function closeModal() {
	modalDOM.open = false;
}

function sendEmail() {
	formDOM.addEventListener('submit', (event) => {
		event.preventDefault();

		const templateParams = {
			name: document.querySelector('#name').value,
			email: document.querySelector('#email').value,
			subject: document.querySelector('#subject').value,
			message: document.querySelector('#message').value,
		};

		if (
			templateParams.name &&
			templateParams.email &&
			templateParams.subject &&
			templateParams.message
		) {
			emailjs
				.send(
					'service_sr9buuv',
					'template_g9qays2',
					templateParams,
				)
				.then(
					(response) => {
						console.log('SUCCESS!', response.status, response.text);
						/* openModal(); */
	 Swal.fire({
  title: "Correo enviado!",
  text: "tu correo se envio correctamente",
  icon: "success"
});
					},
					(error) => {
						/* console.log('FAILED...', error); */

						Swal.fire({
  title: "Correo no enviado!",
  text: "Ocurrio un error, intentelo mas tarde",
  icon: "error"
});
					},
				);
		}
	});
}

modalCloseDOM.addEventListener('click', closeModal);

export default sendEmail;
