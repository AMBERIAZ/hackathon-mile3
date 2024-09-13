var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Type assertion   
    var profilePictureInput = document.getElementById('profilePicture');
    var fullNameElement = document.getElementById('fullName');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    // Debugging: Log elements to verify they are selected
    console.log('fullNameElement:', fullNameElement);
    console.log('emailElement:', emailElement);
    console.log('phoneElement:', phoneElement);
    console.log('educationElement:', educationElement);
    console.log('experienceElement:', experienceElement);
    console.log('skillsElement:', skillsElement);
    if (profilePictureInput && fullNameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var fullName = fullNameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //picture elements
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        // Creating resume output
        var resumeOutput = "\n                <h2>Resume</h2>     \n      ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, " alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n\n                <p><strong>Full Name:</strong> ").concat(fullName, "</p>\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Phone:</strong> ").concat(phone, "</p>\n                <h3>Education</h3>\n                <p>").concat(education, "</p>\n                <h3>Experience</h3>\n                <p>").concat(experience, "</p>\n                <h3>Skills</h3>\n                <p>").concat(skills, "</p>\n            ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('Resume output element not found');
        }
    }
    else {
        console.error('Form element not found');
    }
});
