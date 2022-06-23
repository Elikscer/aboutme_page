/* Form Validation Example */
/* Personal Web Site-Visitor Form Validation */
/* See comments with TODO for code you need to implement */
const stateAbbreviations = [
    'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
    'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
    'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
    'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
    'VT','VI','VA','WA','WV','WI','WY'
];

$(document).ready(function () {
    initValidation("#myform");
});

function initValidation(formName) {

    let $form = $(formName);

    $('form :input').change(function(ev){
        validateForm();
        if(!this.checkValidity())
        $(this).addClass("was-validated")

        //NOTE: we use 'was-validated' class so that you show the error indications only for the single field rather
        //than the whole form at once
    });

    $form.submit(function(event){
        $form = $(this);
        formEl=$form.get(0);

        event.preventDefault();  //prevent default browser submit
        event.stopPropagation(); //stop event bubbling

        validateForm();

        if (!formEl.checkValidity()){
            $(":input").addClass("was-validated")
            console.log("invalid submission");
        }
        else{
            //TODO
            console.log("valid submission");
            $form.css("display", "none");
            $(".successMsg").css("display", "block");
            //hide form
            //show thank you message
        }
        

    });
}

function validateForm() {

    validateState("#state", "You must enter a valid two character state code, e.g. UT");

    /*note, to validate the group, just passing in id of one of them ("#newspaper"), we will use groupName to check status of group.  Just call setElementValidity on the '#newspaper' element to show the error message*/

    validateCheckboxGroup("#newspaper", "find-page", "You must select at least one");
    
    validateEmail("#email", "You must enter a valid email");

    validateZip("#zip", "You must enter a valid zip code")

    validatePhone("#phone", "You must enter a valid phone number")
}

function validateState(id, msg){
    $el = $(id);
    let valid=false;

    let stateId = $el.val().toUpperCase();
    $el.val(stateId);

    if (stateAbbreviations.includes(stateId)) {
        valid=true;
    }
    else if ($el.val() == "") {
        msg = "State is Required";
    }

    setElementValidity(id, valid, msg);
}

function validateCheckboxGroup(fieldName, groupName, message) {
    let valid=false;

    //TODO
    //Validate whether any of the checkboxes are checked. set 'valid' to true if checked
    if ($("input[name=" + groupName + "]:checked").length) {
        valid=true;
    }

    setElementValidity(fieldName, valid, message);

    return valid;
}

function validateEmail(id, msg) {
    $el = $(id);
    let valid=false;

    var constraint = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$");

    if (constraint.test($el.val())) {
        valid=true;
    }

    setElementValidity(id, valid, msg);

    return valid;
}

function validateZip(id, msg) {
    $el = $(id);
    let valid=false;

    if ($el.val().length > 4) {
        valid=true;
    }

    setElementValidity(id, valid, msg);

    return valid;
}

function validatePhone(id, msg) {
    $el = $(id);
    let valid=false;

    if ($el.val().length == 14) {
        valid=true;
    }

    setElementValidity(id, valid, msg);

    return valid;
}

function setElementValidity(fieldName, valid, message){
    let $field=$(fieldName);
    let el = $field.get(0);
    if (valid) {  //it has a value

        el.setCustomValidity('');  //sets to no error message and field is valid
    } else {

        el.setCustomValidity(message);   //sets error message and field gets 'invalid' stat
        
    }
    //TODO  insert or remove message in error div for element
    $field.siblings(".errorMsg").text(el.validationMessage);
}

