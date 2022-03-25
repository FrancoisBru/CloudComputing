(() => {

    // CHANGE THIS FOR PRODUCTION DEPLOYMENT
    // Note: in an actual project this should be done
    //       by some build tool not directly in code

    // #### CHANGE-ME #####
    const API_URL = 'https://projectcloudcomputingmcc.azurewebsites.net/api/HttpTrigger1?code=B8KuYbomMuwsI72KH4xWGbu4YDKasKJsZ7caXYCCXqFqr7iqd6czVg=='
    // #### CHANGE-ME #####

    $name = $('#name');
    $email = $('#email');
    $message = $('#message');
    $successModal = $('#successModal');

    $('#contact-form').on('submit', (event) => {
        event.preventDefault()
        const data = {
            name: $name.val(),
            email: $email.val(),
            message: $message.val()
        }

        axios.post(`${API_URL}/message`, data)
            .then(response => {
                $successModal.modal('show');
            })
            .catch(error => {
                console.error(error)
                alert("Error Sending Message - Check Console")
            })
    })

})()