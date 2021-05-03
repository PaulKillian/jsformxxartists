// $('#myForm').on('submit', function (event) {
// 	event.preventDefault();
// 	const data = $('#myForm').serialize()

// 	const formData = new FormData(this);
// 	formData.append('service_id', 'service_ajmly6q');
// 	formData.append('template_id', 'template_96jckte');
// 	formData.append('user_id', 'user_yN08fOCXM5x88VIH3gTgA');
// 	formData.append('Email', `${data}`);

// 	$.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
//         type: 'POST',
//         data: formData,
//         contentType: false, // auto-detection
//         processData: false // no need to parse formData to string
//     }).done(function() {
//         alert('Your mail is sent!');
//     }).fail(function(error) {
//         alert('Oops... ' + JSON.stringify(error));
//     });
// });
