const textarea = document.getElementById("embedCode");
const loadBtn = document.getElementById("loadSurveyBtn");
const clearBtn = document.getElementById("clearSurveyBtn");
const container = document.getElementById("surveyContainer");

// Load previously saved embed code
const savedEmbed = localStorage.getItem("surveyEmbed");

if (savedEmbed) {
    textarea.value = savedEmbed;
    container.innerHTML = savedEmbed;
}

// Load Survey button
loadBtn.addEventListener("click", () => {
    const embedCode = textarea.value.trim();

    if (!embedCode) {
        alert("Please paste an embed code.");
        return;
    }

    container.innerHTML = embedCode;
    localStorage.setItem("surveyEmbed", embedCode);
});

// Clear button
clearBtn.addEventListener("click", () => {
    textarea.value = "";

    container.innerHTML = `
        <div class="placeholder">
            <h3>No Survey Loaded</h3>
            <p>Paste an embed code above to begin.</p>
        </div>
    `;

    localStorage.removeItem("surveyEmbed");
});
