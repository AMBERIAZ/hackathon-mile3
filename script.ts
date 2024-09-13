
    document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
        event.preventDefault();
    
        // Type assertion   
         const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement

        const fullNameElement = document.getElementById('fullName') as HTMLInputElement;
        const emailElement = document.getElementById('email') as HTMLInputElement;
        const phoneElement = document.getElementById('phone') as HTMLInputElement;
        const educationElement = document.getElementById('education') as HTMLTextAreaElement;
        const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
        const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
    
        // Debugging: Log elements to verify they are selected
        console.log('fullNameElement:', fullNameElement);
        console.log('emailElement:', emailElement);
        console.log('phoneElement:', phoneElement);
        console.log('educationElement:', educationElement);
        console.log('experienceElement:', experienceElement);
        console.log('skillsElement:', skillsElement);
    
        if (profilePictureInput && fullNameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
            const fullName = fullNameElement.value;
            const email = emailElement.value;
            const phone = phoneElement.value;
            const education = educationElement.value;
            const experience = experienceElement.value;
            const skills = skillsElement.value;

            //picture elements

            const profilePictureFile = profilePictureInput.files?.[0]      
            const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '' ;

    
            // Creating resume output
            const resumeOutput = `
                <h2>Resume</h2>     
      ${profilePictureURL ? `<img src="${profilePictureURL} alt="Profile Picture" class="profilePicture">` : ''}

                <p><strong>Full Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <h3>Education</h3>
                <p>${education}</p>
                <h3>Experience</h3>
                <p>${experience}</p>
                <h3>Skills</h3>
                <p>${skills}</p>
            `;
    
            const resumeOutputElement = document.getElementById('resumeOutput');
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = resumeOutput;
            } else {
                console.error('Resume output element not found');
            }
        } else {
            console.error('Form element not found');
        }
    });

    