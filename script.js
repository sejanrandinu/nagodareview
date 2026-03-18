const API_URL = "https://nagoda-review-api.sejanrandinu01.workers.dev/api/reviews"; // Change this to your deployed worker URL

const translations = {
    si: {
        deptTitle: "නාගොඩ ප්‍රාදේශීය ලේකම් කාර්යාලය - ආයතන අංශය",
        title: "පැමිණිලි සහ ප්‍රතිචාර",
        nameLabel: "නම (කැමති නම් පමණක්)",
        namePlaceholder: "ඔබේ නම ඇතුළත් කරන්න",
        addressLabel: "ලිපිනය (කැමති නම් පමණක්)",
        addressPlaceholder: "ඔබේ ලිපිනය ඇතුළත් කරන්න",
        purposeLabel: "පැමිණි කාර්යය (කැමති නම් පමණක්)",
        purposePlaceholder: "ඔබ පැමිණි කාර්යය ඇතුළත් කරන්න",
        purposeDefault: "-- කරුණාකර තෝරන්න --",
        purposeRegistry: "රෙජිස්ට්‍රාර් අංශයේ කටයුතු",
        purposeNIC: "හැඳුනුම්පත් අංශයේ කටයුතු",
        purposeTimberFelling: "දැව හෙළීම් කටයුතු",
        purposeTimberTransport: "දැව ප්‍රවාහන කටයුතු",
        purposeAnimalTransport: "සතුන් ප්‍රවාහන කටයුතු",
        purposeBusinessReg: "ව්‍යාපාර ලියාපදිංචි කටයුතු",
        purposeSoilSandStone: "පස්, වැලි, කළුගල් සම්බන්ධ කටයුතු",
        purposeExciseDuty: "සුරාබදු සම්බන්ධ කටයුතු",
        purposeVehicleFines: "වාහන දඩ ගෙවීම පිළිබඳ කටයුතු",
        purposeTouristBungalow: "සංචාරක බංගලා වෙන් කිරීම",
        purposeInformationAct: "තොරතුරු පනත සම්බන්ධ කටයුතු",
        purposeIncomeCertificate: "ආදායම් සහතික නිකුත් කිරීම",
        purposeMahapola: "මහපොළ ශිෂ්‍යත්ව සම්බන්ධ කටයුතු",
        purposeOther: "වෙනත්",
        messageLabel: "පණිවිඩය (කැමති නම් පමණක්)",
        messagePlaceholder: "ඔබේ අදහස මෙහි ලියන්න...",
        ratingBad: "අසතුටුදායකයි",
        ratingHappy: "හොඳයි",
        ratingVeryHappy: "ඉතා හොඳයි",
        submitBtn: "යොමු කරන්න",
        thankYouText: "ඔබේ ප්‍රතිචාරයට ස්තුතියි!",
        newReviewBtn: "තවත් ප්‍රතිචාරයක්",
        docTitle: "පැමිණිලි සහ ප්‍රතිචාර"
    },
    ta: {
        deptTitle: "நாகொட பிரதேச செயலகம் - நிறுவன பிரிவு",
        title: "புகார்கள் மற்றும் விமர்சனங்கள்",
        nameLabel: "பெயர் (விருப்பமிருந்தால் மட்டும்)",
        namePlaceholder: "உங்கள் பெயரை உள்ளிடவும்",
        addressLabel: "முகவரி (விருப்பமிருந்தால் மட்டும்)",
        addressPlaceholder: "உங்கள் முகவரியை உள்ளிடவும்",
        purposeLabel: "வருகைக்கான காரணம் (விருப்பமிருந்தால் மட்டும்)",
        purposePlaceholder: "நீங்கள் வந்த காரணத்தை உள்ளிடவும்",
        purposeDefault: "-- தயவுசெய்து தேர்ந்தெடுக்கவும் --",
        purposeRegistry: "பதிவாளர் பிரிவு விவகாரங்கள்",
        purposeNIC: "அடையாள அட்டை பிரிவு விவகாரங்கள்",
        purposeTimberFelling: "மரம் வெட்டுதல் விவகாரங்கள்",
        purposeTimberTransport: "மரப் போக்குவரத்து விவகாரங்கள்",
        purposeAnimalTransport: "மிருக போக்குவரத்து விவகாரங்கள்",
        purposeBusinessReg: "வணிக பதிவு விவகாரங்கள்",
        purposeSoilSandStone: "மண், மணல் மற்றும் கல் தொடர்பான விவகாரங்கள்",
        purposeExciseDuty: "மதுவரி தொடர்பான விவகாரங்கள்",
        purposeVehicleFines: "வாகன அபராதம் செலுத்துதல் தொடர்பான விவகாரங்கள்",
        purposeTouristBungalow: "சுற்றுலா பங்களா முன்பதிவு",
        purposeInformationAct: "தகவல் சட்டம் தொடர்பான விவகாரங்கள்",
        purposeIncomeCertificate: "வருமான சான்றிதழ் வழங்குதல்",
        purposeMahapola: "மகாபொல புலமைப்பரிசில் தொடர்பான விவகாரங்கள்",
        purposeOther: "மற்றவை",
        messageLabel: "செய்தி (விருப்பமிருந்தால் மட்டும்)",
        messagePlaceholder: "உங்கள் கருத்தை இங்கே எழுதவும்...",
        ratingBad: "திருப்தியற்றது",
        ratingHappy: "நல்லது",
        ratingVeryHappy: "மிகவும் நல்லது",
        submitBtn: "சமர்ப்பிக்க",
        thankYouText: "உங்கள் கருத்துக்கு நன்றி!",
        newReviewBtn: "மீண்டும்",
        docTitle: "புகார்கள் மற்றும் விமர்சனங்கள்"
    },
    en: {
        deptTitle: "Nagoda Divisional Secretariat - Establishment Branch",
        title: "Complaints & Reviews",
        nameLabel: "Name (Optional)",
        namePlaceholder: "Enter your name",
        addressLabel: "Address (Optional)",
        addressPlaceholder: "Enter your address",
        purposeLabel: "Purpose of Visit (Optional)",
        purposePlaceholder: "Enter your purpose here",
        purposeDefault: "-- Please select --",
        purposeRegistry: "Registry section matters",
        purposeNIC: "NIC / Identity card section matters",
        purposeTimberFelling: "Timber felling matters",
        purposeTimberTransport: "Timber transport matters",
        purposeAnimalTransport: "Animal transport matters",
        purposeBusinessReg: "Business registration matters",
        purposeSoilSandStone: "Soil, sand, and stone related matters",
        purposeExciseDuty: "Excise duty related matters",
        purposeVehicleFines: "Vehicle fines payment related matters",
        purposeTouristBungalow: "Tourist bungalow reservation",
        purposeInformationAct: "Information act related matters",
        purposeIncomeCertificate: "Issuing income certificates",
        purposeMahapola: "Mahapola scholarship related matters",
        purposeOther: "Other",
        messageLabel: "Message (Optional)",
        messagePlaceholder: "Write your feedback here...",
        ratingBad: "Unsatisfactory",
        ratingHappy: "Good",
        ratingVeryHappy: "Very Good",
        submitBtn: "Submit",
        thankYouText: "Thank you for your feedback!",
        newReviewBtn: "Submit Another",
        docTitle: "Complaints & Reviews"
    }
};

let currentLang = 'si';

// DOM Elements
const langBtns = document.querySelectorAll('.lang-btn');
const titleText = document.getElementById('titleText');
const nameLabel = document.getElementById('nameLabel');
const userNameInput = document.getElementById('userName');
const messageLabel = document.getElementById('messageLabel');
const userMessageInput = document.getElementById('userMessage');
const ratingBadText = document.getElementById('ratingBadText');
const ratingHappyText = document.getElementById('ratingHappyText');
const ratingVeryHappyText = document.getElementById('ratingVeryHappyText');
const submitBtn = document.getElementById('submitBtn');
const thankYouText = document.getElementById('thankYouText');
const newReviewBtn = document.getElementById('newReviewBtn');
const reviewForm = document.getElementById('reviewForm');
const successMessage = document.getElementById('successMessage');

// Language Switcher
langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        langBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked
        btn.classList.add('active');

        currentLang = btn.getAttribute('data-lang');
        updateLanguage();
    });
});

function updateLanguage() {
    const t = translations[currentLang];

    document.title = t.docTitle;
    document.documentElement.lang = currentLang;

    // Updates
    document.getElementById('deptTitleText').textContent = t.deptTitle;
    titleText.textContent = t.title;

    nameLabel.textContent = t.nameLabel;
    userNameInput.placeholder = t.namePlaceholder;

    document.getElementById('addressLabel').textContent = t.addressLabel;
    document.getElementById('userAddress').placeholder = t.addressPlaceholder;

    document.getElementById('purposeLabel').textContent = t.purposeLabel;
    document.getElementById('userPurposeOther').placeholder = t.purposePlaceholder;
    
    document.getElementById('purposeOptionDefault').textContent = t.purposeDefault;
    document.getElementById('purposeOptionRegistry').textContent = t.purposeRegistry;
    document.getElementById('purposeOptionNIC').textContent = t.purposeNIC;
    document.getElementById('purposeOptionTimberFelling').textContent = t.purposeTimberFelling;
    document.getElementById('purposeOptionTimberTransport').textContent = t.purposeTimberTransport;
    document.getElementById('purposeOptionAnimalTransport').textContent = t.purposeAnimalTransport;
    document.getElementById('purposeOptionBusinessReg').textContent = t.purposeBusinessReg;
    document.getElementById('purposeOptionSoilSandStone').textContent = t.purposeSoilSandStone;
    document.getElementById('purposeOptionExciseDuty').textContent = t.purposeExciseDuty;
    document.getElementById('purposeOptionVehicleFines').textContent = t.purposeVehicleFines;
    document.getElementById('purposeOptionTouristBungalow').textContent = t.purposeTouristBungalow;
    document.getElementById('purposeOptionInformationAct').textContent = t.purposeInformationAct;
    document.getElementById('purposeOptionIncomeCertificate').textContent = t.purposeIncomeCertificate;
    document.getElementById('purposeOptionMahapola').textContent = t.purposeMahapola;
    document.getElementById('purposeOptionOther').textContent = t.purposeOther;

    messageLabel.textContent = t.messageLabel;
    userMessageInput.placeholder = t.messagePlaceholder;

    ratingBadText.textContent = t.ratingBad;
    ratingHappyText.textContent = t.ratingHappy;
    ratingVeryHappyText.textContent = t.ratingVeryHappy;

    submitBtn.textContent = t.submitBtn;

    thankYouText.textContent = t.thankYouText;
    newReviewBtn.textContent = t.newReviewBtn;
}

// UI Event Listeners
const userPurposeSelect = document.getElementById('userPurposeSelect');
const otherPurposeGroup = document.getElementById('otherPurposeGroup');

userPurposeSelect.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
        otherPurposeGroup.classList.remove('hidden');
    } else {
        otherPurposeGroup.classList.add('hidden');
    }
});

// Form Submission
reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Check if rating is selected
    const rating = document.querySelector('input[name="rating"]:checked');
    if (!rating) {
        alert("Please select a rating.");
        return;
    }

    // Prepare data to send to API
    const userPurposeSelectElem = document.getElementById('userPurposeSelect');
    const userPurposeOtherElem = document.getElementById('userPurposeOther');
    let purposeValue = "-";
    if (userPurposeSelectElem.value) {
        if (userPurposeSelectElem.value === 'other') {
            purposeValue = userPurposeOtherElem.value || "-";
        } else {
            purposeValue = userPurposeSelectElem.options[userPurposeSelectElem.selectedIndex].text;
        }
    }

    const reviewData = {
        lang: currentLang,
        rating: rating.value,
        name: userNameInput.value || "Anonymous",
        address: document.getElementById('userAddress').value || "-",
        purpose: purposeValue,
        message: userMessageInput.value || "-"
    };

    submitBtn.disabled = true;
    submitBtn.textContent = "...";

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reviewData)
    })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                reviewForm.classList.add('hidden');
                successMessage.classList.remove('hidden');
                reviewForm.reset();
            } else {
                alert("Submission failed. Please try again.");
            }
        })
        .catch(err => {
            console.error("Error:", err);
            alert("Network error. Please try again later.");
        })
        .finally(() => {
            submitBtn.disabled = false;
            updateLanguage();
        });
});

// Reset after success
newReviewBtn.addEventListener('click', () => {
    successMessage.classList.add('hidden');
    reviewForm.classList.remove('hidden');
});

// Initialize language
updateLanguage();
