document.addEventListener("DOMContentLoaded", () => {
    /* ================= RANDOM PHRASES ================= */
    const phrases = [
        "Focus on what truly matters.",
        "Clarity begins with organization.",
        "Small steps lead to big progress.",
        "A calm mind starts with a clear plan.",
        "Less chaos, more control.",
        "Your space to think clearly.",
        "Structure creates freedom.",
        "Turn intention into action."
    ];

    const quoteElement = document.getElementById("quote");

    if (quoteElement) {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        quoteElement.textContent = phrases[randomIndex];
    }

    /* ================= REMINDER FUNCTION ================= */
    window.setReminder = function () {
        const text = document.getElementById("reminderText").value;
        const timeValue = document.getElementById("reminderTime").value;

        if (!text || !timeValue) {
            alert("Please enter reminder text and time.");
            return;
        }

        const reminderTime = new Date(timeValue).getTime();
        const now = Date.now();

        if (reminderTime <= now) {
            alert("Please choose a future time.");
            return;
        }

        const delay = reminderTime - now;

        alert("✅ Reminder set!");

        setTimeout(() => {
            alert("⏰ Reminder: " + text);
        }, delay);
    };
});

