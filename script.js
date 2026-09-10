const textarea = document.getElementById("embedCode");
const container = document.getElementById("surveyContainer");
const button = document.getElementById("loadSurveyBtn");

const savedEmbed = localStorage.getItem("surveyEmbed");

if (savedEmbed) {
    textarea.value = savedEmbed;
    container.innerHTML = savedEmbed;
}

button.addEventListener("click", () => {
    const embedCode = textarea.value.trim();

    if (!embedCode) {
        alert("Please paste an embed code.");
        return;
    }

    container.innerHTML = embedCode;

    localStorage.setItem("surveyEmbed", embedCode);
});
