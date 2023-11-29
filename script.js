// variables that will store our form and submit  button elements from the html file
const form =document.getElementById('booking-form')
const submitbtn = document.getElementById('submitbtn')

//event listener added to "listen" for a click of the button which then allows us to associate it wiht desired action
submitbtn.addEventListener('click', function(event){
    event.preventDefault(); //prevent Default allows to stop temporarily disable the button function so we can apply our logic below
    const requiredFields = form.querySelectorAll('[required]'); // this variable allows us to target all input fields with the "required" attribute
  let isValid = true; // 

  requiredFields.forEach(field => { //for loop used to iterate through each required field and the isValid is used to check validity
    if (!field.validity.valid) {
      isValid = false; // if any of the fields are not valid the isValid becomes false
    }
  });

  // Submit the form if all required fields are valid
  if (isValid) { // if the fields are all valid then isValid remains true which triggers the below alert message in the browser
    form.submit();
    alert('Thanks for submitting your form!');
  } else {
    alert('Please fill in all fields marked with *.'); // if any field is not valid and isValid is false then browser will notify the user
  }
});




