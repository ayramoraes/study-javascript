const url = "https://www.boredapi.com/api/";
const randomActivityBtn = document.getElementById("random-activity-btn");
const activityParagraph = document.getElementById("activity");
const categorySelect = document.getElementById("category-select");
const categoryBtn = document.getElementById("category-btn");
const activityCategoryParagraph = document.getElementById("activity-category");
const activityTypeSelect = document.getElementById("activity-type-select");
const activityTypeBtn = document.getElementById("activity-type-btn");

// Populate the category select element
const categories = [
  { value: "", label: "--Select a category--" },
  { value: "education", label: "Education" },
  { value: "recreational", label: "Recreational" },
  { value: "social", label: "Social" },
  { value: "diy", label: "DIY" },
  { value: "charity", label: "Charity" },
  { value: "cooking", label: "Cooking" },
  { value: "relaxation", label: "Relaxation" },
  { value: "music", label: "Music" },
  { value: "busywork", label: "Busywork" },
];

categories.forEach((category) => {
  const option = document.createElement("option");
  option.value = category.value;
  option.textContent = category.label;
  categorySelect.appendChild(option);
});

// Retrieve a random activity
function getRandomActivity() {
  fetch(`${url}activity/`)
    .then((response) => response.json())
    .then((data) => {
      activityParagraph.textContent = data.activity;
    })
    .catch((error) => {
      console.error(error);
    });
}

function searchActivityByCategory(event) {
  event.preventDefault();
  const category = categorySelect.value;
  const type = activityTypeSelect.value;
  if (category) {
    fetch(`${url}activity?type=${category}&participants=${type}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.activity) {
          activityCategoryParagraph.textContent = data.activity;
        } else {
          activityCategoryParagraph.textContent = "No activity available for this category and type.";
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

randomActivityBtn.addEventListener("click", getRandomActivity);
categoryBtn.addEventListener("click", searchActivityByCategory);
