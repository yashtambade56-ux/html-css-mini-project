const list = document.getElementById("reminderList");

function addReminder() {
    const text = document.getElementById("reminderText").value;
    const time = document.getElementById("reminderTime").value;

    if (!text || !time) {
        alert("Please enter reminder text and date/time.");
        return;
    }

    const reminderTime = new Date(time).getTime();
    const now = Date.now();

    if (reminderTime <= now) {
        alert("Please choose a future time.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = `${text} — ${new Date(time).toLocaleString()}`;
    list.appendChild(li);

    setTimeout(() => {
        alert("⏰ Reminder: " + text);
    }, reminderTime - now);
}
