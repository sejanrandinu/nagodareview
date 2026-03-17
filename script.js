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
        messageLabel: "පණිවිඩය (කැමති නම් පමණක්)",
        messagePlaceholder: "ඔබේ අදහස මෙහි ලියන්න...",
        ratingBad: "නරකයි",
        ratingHappy: "සතුටුදායකයි",
        ratingVeryHappy: "ඉතා සතුටුදායකයි",
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
        messageLabel: "செய்தி (விருப்பமிருந்தால் மட்டும்)",
        messagePlaceholder: "உங்கள் கருத்தை இங்கே எழுதவும்...",
        ratingBad: "மோசம்",
        ratingHappy: "திருப்தி",
        ratingVeryHappy: "மிகவும் திருப்தி",
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
        purposePlaceholder: "Enter the purpose of your visit",
        messageLabel: "Message (Optional)",
        messagePlaceholder: "Write your feedback here...",
        ratingBad: "Bad",
        ratingHappy: "Happy",
        ratingVeryHappy: "Very Happy",
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
    document.getElementById('userPurpose').placeholder = t.purposePlaceholder;
    
    messageLabel.textContent = t.messageLabel;
    userMessageInput.placeholder = t.messagePlaceholder;
    
    ratingBadText.textContent = t.ratingBad;
    ratingHappyText.textContent = t.ratingHappy;
    ratingVeryHappyText.textContent = t.ratingVeryHappy;
    
    submitBtn.textContent = t.submitBtn;
    
    thankYouText.textContent = t.thankYouText;
    newReviewBtn.textContent = t.newReviewBtn;
}

// Form Submission
reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Check if rating is selected
    const rating = document.querySelector('input[name="rating"]:checked');
    if (!rating) {
        alert("Please select a rating.");
        return;
    }
    
    // Save data to localStorage (to be retrieved by admin dashboard)
    const reviewData = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        lang: currentLang,
        rating: rating.value,
        name: userNameInput.value || "Anonymous",
        address: document.getElementById('userAddress').value || "-",
        purpose: document.getElementById('userPurpose').value || "-",
        message: userMessageInput.value || "-"
    };

    let reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
    reviews.push(reviewData);
    localStorage.setItem('reviews', JSON.stringify(reviews));

    // Simulate submission UI delay
    submitBtn.disabled = true;
    submitBtn.textContent = "...";
    
    setTimeout(() => {
        reviewForm.classList.add('hidden');
        successMessage.classList.remove('hidden');
        
        // Reset form
        reviewForm.reset();
        submitBtn.disabled = false;
        
        // Restore submit button text based on lang
        updateLanguage();
    }, 800);
});

// Reset after success
newReviewBtn.addEventListener('click', () => {
    successMessage.classList.add('hidden');
    reviewForm.classList.remove('hidden');
});

// Initialize language
updateLanguage();
