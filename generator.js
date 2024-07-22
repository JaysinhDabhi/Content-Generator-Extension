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
        generatedText.select();
        document.execCommand('copy');
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
        const phoneNumbers = [
            '+1-555-555-5555',
            '+44-20-7946-0958',
            '+91-9876543210',
            '+61-2-9876-5432',
            '+81-3-1234-5678',
            '+49-30-123456',
            '+33-1-23456789',
            '+39-06-12345678',
            '+86-10-12345678',
            '+55-21-1234-5678',
            '+34-91-1234567',
            '+27-11-123-4567',
            '+7-495-123-4567',
            '+31-20-1234567',
            '+47-21-123456'
        ];
        return phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)];
    }

    function generateAddress() {
        const addresses = [
            '123 Main St, Anytown, USA',
            '456 High St, London, UK',
            '789 Park Ave, New York, NY',
            '1011 Maple Rd, Toronto, Canada',
            '1213 Elm St, Sydney, Australia',
            '1415 Pine St, Tokyo, Japan',
            '1617 Oak St, Berlin, Germany',
            '1819 Cedar St, Paris, France',
            '2021 Birch St, Rome, Italy',
            '2223 Spruce St, Beijing, China',
            '2425 Palm St, Rio de Janeiro, Brazil',
            '2627 Aspen St, Madrid, Spain',
            '2829 Redwood St, Johannesburg, South Africa',
            '3031 Willow St, Moscow, Russia',
            '3233 Chestnut St, Amsterdam, Netherlands'
        ];
        return addresses[Math.floor(Math.random() * addresses.length)];
    }

    function generateCity() {
        const cities = [
            'New York',
            'London',
            'Toronto',
            'Sydney',
            'Tokyo',
            'Berlin',
            'Paris',
            'Rome',
            'Beijing',
            'Rio de Janeiro',
            'Madrid',
            'Johannesburg',
            'Moscow',
            'Amsterdam',
            'Dubai'
        ];
        return cities[Math.floor(Math.random() * cities.length)];
    }

    function generateCountry() {
        const countries = [
            'USA',
            'UK',
            'Canada',
            'Australia',
            'Japan',
            'Germany',
            'France',
            'Italy',
            'China',
            'Brazil',
            'Spain',
            'South Africa',
            'Russia',
            'Netherlands',
            'UAE'
        ];
        return countries[Math.floor(Math.random() * countries.length)];
    }

    function generateName() {
        const names = [
            'John Doe',
            'Jane Smith',
            'James Brown',
            'Emily Davis',
            'Michael Johnson',
            'Mary Wilson',
            'David Martinez',
            'Linda Anderson',
            'Robert Thomas',
            'Patricia Lee',
            'Charles Harris',
            'Jennifer Clark',
            'Christopher Lewis',
            'Jessica Robinson',
            'Daniel Walker'
        ];
        return names[Math.floor(Math.random() * names.length)];
    }

    function generateEmail() {
        const emails = [
            'example1@example.com',
            'example2@example.com',
            'example3@example.com',
            'example4@example.com',
            'example5@example.com',
            'example6@example.com',
            'example7@example.com',
            'example8@example.com',
            'example9@example.com',
            'example10@example.com',
            'example11@example.com',
            'example12@example.com',
            'example13@example.com',
            'example14@example.com',
            'example15@example.com'
        ];
        return emails[Math.floor(Math.random() * emails.length)];
    }

    function generateCompanyName() {
        const companyNames = [
            'ABC Corp',
            'XYZ Ltd',
            '123 Inc',
            'Acme Corp',
            'Global Tech',
            'Innovative Solutions',
            'Techies',
            'Web World',
            'Startup Hub',
            'Enterprise Solutions',
            'Tech Gurus',
            'Digital World',
            'Net Solutions',
            'Software Inc',
            'Web Tech'
        ];
        return companyNames[Math.floor(Math.random() * companyNames.length)];
    }

    function generateJobTitle() {
        const jobTitles = [
            'Software Engineer',
            'Project Manager',
            'Data Scientist',
            'Product Manager',
            'UX Designer',
            'Marketing Manager',
            'Sales Executive',
            'Accountant',
            'HR Manager',
            'Consultant',
            'Analyst',
            'Graphic Designer',
            'Developer',
            'IT Support',
            'Business Analyst'
        ];
        return jobTitles[Math.floor(Math.random() * jobTitles.length)];
    }

    function generateWebsiteLink() {
        const websiteLinks = [
            'http://example1.com',
            'http://example2.com',
            'http://example3.com',
            'http://example4.com',
            'http://example5.com',
            'http://example6.com',
            'http://example7.com',
            'http://example8.com',
            'http://example9.com',
            'http://example10.com',
            'http://example11.com',
            'http://example12.com',
            'http://example13.com',
            'http://example14.com',
            'http://example15.com'
        ];
        return websiteLinks[Math.floor(Math.random() * websiteLinks.length)];
    }

    function generateDummyText() {
        const dummyTexts = [
            'Lorem ipsum dolor sit amet.',
            'Consectetur adipiscing elit.',
            'Sed do eiusmod tempor incididunt.',
            'Ut labore et dolore magna aliqua.',
            'Ut enim ad minim veniam.',
            'Quis nostrud exercitation ullamco.',
            'Laboris nisi ut aliquip ex ea.',
            'Commodo consequat.',
            'Duis aute irure dolor in reprehenderit.',
            'Voluptate velit esse cillum dolore.',
            'Fugiat nulla pariatur.',
            'Excepteur sint occaecat cupidatat.',
            'Non proident.',
            'Sunt in culpa qui officia deserunt.',
            'Mollit anim id est laborum.'
        ];
        return dummyTexts[Math.floor(Math.random() * dummyTexts.length)];
    }

    function generateParagraph() {
        const paragraphs = [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
            'Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus.',
            'Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
            'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh.',
            'Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
            'Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget felis porttitor volutpat.',
            'Sed id semper risus in hendrerit gravida rutrum quisque non. Feugiat scelerisque varius morbi enim nunc faucibus.',
            'Eget duis at tellus at urna condimentum. Semper viverra nam libero justo laoreet sit amet.',
            'Massa tempor nec feugiat nisl. Aliquet nibh praesent tristique magna sit amet purus.',
            'Sed lectus vestibulum mattis ullamcorper velit sed. Amet volutpat consequat mauris nunc congue.',
            'Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Eu sem integer vitae justo eget magna fermentum iaculis.',
            'Auctor elit sed vulputate mi sit. Risus viverra adipiscing at in tellus integer feugiat.',
            'Habitant morbi tristique senectus et netus et malesuada. Magna ac placerat vestibulum lectus mauris.',
            'Proin libero nunc consequat interdum varius sit amet mattis. Et malesuada fames ac turpis egestas.',
            'Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Risus ultricies tristique nulla aliquet enim tortor at.'
        ];
        return paragraphs[Math.floor(Math.random() * paragraphs.length)];
    }
});
