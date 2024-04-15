
const researchData = [
    { title: "Journal Entry", author: "Robert", publishedDate: "2024-04-06" },
    { title: "Research Objectives", author: "Robert", publishedDate: "2024-04-05" },
    { title: "Lab Activity", author: "Robert", publishedDate: "2024-04-04" }
];

// Function to create HTML elements for research articles and append to the research-list
function displayResearch() {
    const researchList = document.getElementById("research-list");
    researchList.innerHTML = ''; // Clear previous data

    researchData.forEach(research => {
        const researchItem = document.createElement('div');
        researchItem.classList.add('research-item');
        researchItem.innerHTML = `
            <h3>${research.title}</h3>
            <p><strong>Author:</strong> ${research.author}</p>
            <p><strong>Published Date:</strong> ${research.publishedDate}</p>
        `;
        researchList.appendChild(researchItem);
    });
}

// Call the function to display research when the page loads
window.onload = displayResearch;
