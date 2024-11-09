function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        document.getElementById('resumeProfileImage').src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}

function generateResume() {
    // Check if all required fields are filled
    const requiredFields = [
        'name', 'title', 'profile', 'email', 'phone', 'location',
        'school', 'degree', 'eduDate', 'experience', 'skills', 'languages',
        'github', 'linkedin'
    ];

    let allFieldsFilled = true;
    requiredFields.forEach(field => {
        const input = document.getElementById(field);
        if (input.value.trim() === '') {
            allFieldsFilled = false;
        }
    });

    if (!allFieldsFilled) {
        alert('Please fill in all the fields.');
        return;
    }

    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const profile = document.getElementById('profile').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const location = document.getElementById('location').value;
    const school = document.getElementById('school').value;
    const degree = document.getElementById('degree').value;
    const eduDate = document.getElementById('eduDate').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value.split(',');
    const languages = document.getElementById('languages').value.split(',');
    const github = document.getElementById('github').value;
    const linkedin = document.getElementById('linkedin').value;

    document.getElementById('previewName').innerText = name;
    document.getElementById('previewTitle').innerText = title;
    document.getElementById('previewProfile').innerText = profile;

    document.getElementById('previewContact').innerHTML = `<b>Email:</b> ${email}<br><b>Phone:</b> ${phone}<br><b>Location:</b> ${location}`;

    document.getElementById('previewEducation').innerHTML = `<b>Degree:</b> ${degree}<br><b>School:</b> ${school}<br><EduDate:</b> ${eduDate}`;

    // document.getElementById('previewContact').innerText = `Email: ${email} | Phone: ${phone} | Location: ${location}`;
    // document.getElementById('previewEducation').innerText = `${school} - ${degree} (${eduDate})`;
    document.getElementById('previewExperience').innerText = experience;

    const skillsContainer = document.getElementById('previewSkills');
    skillsContainer.innerHTML = '';
    skills.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.className = 'skill-tag';
        skillTag.innerText = skill.trim();
        skillsContainer.appendChild(skillTag);
    });

    const languagesContainer = document.getElementById('previewLanguages');
    languagesContainer.innerHTML = '';
    languages.forEach(language => {
        const languageTag = document.createElement('span');
        languageTag.className = 'language-tag';
        languageTag.innerText = language.trim();
        languagesContainer.appendChild(languageTag);
    });

    document.getElementById('previewGithub').href = github;
    document.getElementById('previewLinkedin').href = linkedin;

    document.getElementById('formSection').style.display = 'none';
    document.getElementById('resume').style.display = 'block';
}

function editResume() {
    document.getElementById('formSection').style.display = 'block';
    document.getElementById('resume').style.display = 'none';
}