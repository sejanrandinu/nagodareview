document.addEventListener('DOMContentLoaded', () => {
    loadData();

    document.getElementById('clearBtn').addEventListener('click', () => {
        if(confirm("ඔබට සියලුම දත්ත මැකීමට අවශ්‍ය බව විශ්වාසද? / Are you sure you want to delete all reviews?")) {
            localStorage.removeItem('reviews');
            loadData();
        }
    });
});

function loadData() {
    const tableBody = document.getElementById('tableBody');
    const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
    
    // Sort reviews (newest first)
    reviews.sort((a, b) => b.id - a.id);

    let veryHappyCount = 0;
    let happyCount = 0;
    let badCount = 0;

    tableBody.innerHTML = '';

    if(reviews.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="7" style="text-align:center; padding: 3rem; color: #64748B;">No responses found yet.</td></tr>';
        updateStats(0, 0, 0, 0);
        return;
    }

    reviews.forEach(review => {
        const row = document.createElement('tr');
        
        let badgeClass = '';
        let displayRating = '';
        if(review.rating === 'very-happy') {
            badgeClass = 'badge-very-happy';
            displayRating = 'ඉතා සතුටුදායකයි 🤩';
            veryHappyCount++;
        } else if(review.rating === 'happy') {
            badgeClass = 'badge-happy';
            displayRating = 'සතුටුදායකයි 😊';
            happyCount++;
        } else {
            badgeClass = 'badge-bad';
            displayRating = 'නරකයි 😞';
            badCount++;
        }

        row.innerHTML = `
            <td style="white-space:nowrap; font-size:0.875rem;">${review.date}</td>
            <td><span class="${badgeClass}">${displayRating}</span></td>
            <td><strong style="color: #0F172A;">${escapeHtml(review.name)}</strong></td>
            <td>${escapeHtml(review.address)}</td>
            <td>${escapeHtml(review.purpose)}</td>
            <td>${escapeHtml(review.message)}</td>
            <td style="text-transform:uppercase; font-size:0.75rem; color:#64748B; font-weight:700;">${review.lang}</td>
        `;
        
        tableBody.appendChild(row);
    });

    updateStats(reviews.length, veryHappyCount, happyCount, badCount);
}

function updateStats(total, veryHappy, happy, bad) {
    document.getElementById('totalReviews').textContent = total;
    document.getElementById('veryHappyStats').textContent = veryHappy;
    document.getElementById('happyStats').textContent = happy;
    document.getElementById('badStats').textContent = bad;
}

function escapeHtml(unsafe) {
    if (!unsafe) return '-';
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}
