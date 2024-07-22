document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const backButton = document.getElementById('backButton');
    const generateButton = document.getElementById('generateButton');
    const copyButton = document.getElementById('copyButton');
    const generatorTitle = document.getElementById('generatorTitle');
    const generatedText = document.getElementById('generatedText');

    // Mapping of button types to generator functions
    const generators = {
        dummyText: generateDummyText,
        paragraph: generateParagraph,
        name: generateName,
        email: generateEmail,
        address: generateAddress,
        phoneNumber: generatePhoneNumber,
        city: generateCity,
        country: generateCountry,
        companyName: generateCompanyName,
        jobTitle: generateJobTitle,
        websiteLink: generateWebsiteLink
    };

    chrome.storage.local.get('generatorType', function(data) {
        if (chrome.runtime.lastError) {
            console.error("Error getting storage: ", chrome.runtime.lastError);
        } else {
            const type = data.generatorType;
            generatorTitle.textContent = `${capitalizeFirstLetter(type)} Generator`;
            generateButton.setAttribute('data-type', type);
            generatedText.value = generators[type]();
        }
    });

    copyButton.addEventListener('click', function() {
        copyToClipboard(generatedText.value);
    });

    generateButton.addEventListener('click', function() {
        const type = generateButton.getAttribute('data-type');
        generatedText.value = generators[type]();
    });

    backButton.addEventListener('click', function() {
        window.location.href = 'popup.html';
    });

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(function() {
            alert('Copied to clipboard');
        }, function(err) {
            console.error('Could not copy text: ', err);
        });
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Dummy data generators
    function generatePhoneNumber() {
        return '+1-555-555-5555';
    }

    function generateAddress() {
        return '123 Fake Street';
    }

    function generateCity() {
        return 'Faketown';
    }

    function generateCountry() {
        return 'Fakeland';
    }

    function generateDummyText() {
        return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    }

    function generateParagraph() {
        return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nec eros suscipit posuere.';
    }

    function generateJobTitle() {
        return 'Software Engineer';
    }

    function generateCompanyName() {
        return 'Fake Company Inc.';
    }

    function generateWebsiteLink() {
        return 'https://www.fakeurl.com';
    }

    function generateEmail() {
        return 'fakeemail@fake.com';
    }

    function generateName() {
        return 'John Doe';
    }
});
