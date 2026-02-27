// ============================================
// 🎯 EDIT THESE VALUES TO UPDATE YOUR FUNDRAISER
// ============================================
const RAISED_AMOUNT = 45000;   // Amount raised so far
const GOAL_AMOUNT = 150000;    // Total fundraising goal
// ============================================

// Calculate and update progress
function updateProgress() {
    const raised = RAISED_AMOUNT;
    const goal = GOAL_AMOUNT;
    const remaining = goal - raised;
    const percentage = Math.round((raised / goal) * 100);

    // Update all displays
    document.getElementById('raised').textContent = raised.toLocaleString();
    document.getElementById('goal').textContent = goal.toLocaleString();
    document.getElementById('remaining').textContent = remaining.toLocaleString();
    document.getElementById('percentage').textContent = percentage;
    
    const progressBar = document.getElementById('progressBar');
    progressBar.style.setProperty('--progress-width', percentage + '%');
}

// Copy bank details
function copyBankDetails() {
    const details = `Bank Name: Your Bank Name
Account Name: Hebron Fellowship
Account Number: 1234567890
Transit Number: 12345
Institution Number: 001`;
    
    navigator.clipboard.writeText(details).then(() => {
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = '✓ Copied!';
        btn.style.background = '#4CAF50';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 2000);
    });
}

// Copy email
function copyEmail() {
    navigator.clipboard.writeText('donations@hebronfellowship.ca').then(() => {
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = '✓ Copied!';
        btn.style.background = '#4CAF50';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 2000);
    });
}

// Initialize
updateProgress();

// Optional: Add number animation on load
function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    const timer = setInterval(() => {
        current += increment * 100;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        obj.textContent = current.toLocaleString();
    }, stepTime);
}

// Uncomment to enable number animation on page load
// window.addEventListener('load', () => {
//     animateValue('raised', 0, RAISED_AMOUNT, 1500);
// });
