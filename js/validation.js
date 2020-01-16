function validateForm() {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    var name = document.getElementById('name');
    var mesg = document.getElementById('message');
    var email = document.getElementById('email');

    var astrixName = document.getElementById('astrixname');
    var astrixMesg = document.getElementById('astrixmessage');
    var astrixEmail = document.getElementById('astrixemail');
    var astrixFields = document.getElementById('astrixfields');

    var validated = true;

    if (name.value === '') {
        name.value = 'First Name is required';
        astrixName.className = 'shownElem';
        validated = false;
    }
    if (mesg.value === '') {
        mesg.value = 'Message must be filled out';
        astrixMesg.className = 'shownElem';
        validated = false;
    }
    if (!filter.test(email.value)) {
        document.getElementById('email').value = 'Please provide a valid email address';
        astrixEmail.className = 'shownElem';
        validated = false;
    }
    if (!validated) {
        astrixFields.className = 'shownElem';
    }
    return validated;
}
