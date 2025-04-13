document.getElementById("registration-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch("/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log("Odpowiedź serwera:", result.message);
    } catch (error) {
        console.error("Błąd przy wysyłaniu formularza:", error);
    }
});
