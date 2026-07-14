const weddingDate = new Date("August 1, 2026 09:30:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Open Invitation Button - Toggle
const openBtn = document.getElementById('openBtn');
if (openBtn) {
    openBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const invitationSection = document.getElementById('invitation');
        
        if (invitationSection.style.display === 'none' || invitationSection.style.display === '') {
            invitationSection.style.display = 'block';
            openBtn.textContent = 'Hide Invitation';
            invitationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            openBtn.textContent = 'Open Invitation';
            invitationSection.style.display = 'none';
            document.querySelector('.hero').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

// RSVP Form Handler
const rsvpForm = document.querySelector('.rsvp-form');
if (rsvpForm) {
    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const attendance = document.getElementById('attendance').value;
        const message = document.getElementById('message').value;

        // Log RSVP data (in production, this would be sent to a server)
        console.log({
            name,
            email,
            phone,
            attendance,
            message
        });

        alert(`Thank you for your RSVP, ${name}! We look forward to celebrating with you.`);
        rsvpForm.reset();
    });
}
