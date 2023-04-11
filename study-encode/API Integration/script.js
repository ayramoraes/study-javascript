
const url = "https://www.boredapi.com/api/"
const randomActivityBtn = document.getElementById("random-activity-btn");
const activityParagraph = document.getElementById("activity");

const activityCategorySelect = document.getElementById("activity-category");
const activityParticipantsInput = document.getElementById("activity-participants");
const searchActivityBtn = document.getElementById("search-activity-btn");
const activityList = document.getElementById("activity-list");

function getRandomActivity() {
  fetch(`${url}activity/`)
    .then(response => response.json())
    .then(data => {
      activityParagraph.textContent = data.activity;
    })
    .catch(error => {
      console.error(error);
    });
}

randomActivityBtn.addEventListener("click", getRandomActivity);

function searchActivities(category, participants) {
  let apiUrl = `${url}activity/`;
  
  // Add category and participants query parameters to the URL if provided
  if (category) {
    apiUrl += `?type=${category}`;
  }
  if (participants) {
    apiUrl += `&participants=${participants}`;
  }
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Clear the previous search results
      activityList.innerHTML = "";
      
      // Display the search results
      if (data.activity) {
        const activityItem = document.createElement("li");
        activityItem.textContent = data.activity;
        activityList.appendChild(activityItem);
      } else {
        const noResultsItem = document.createElement("li");
        noResultsItem.textContent = "No activities found.";
        activityList.appendChild(noResultsItem);
      }
    })
    .catch(error => {
      console.error(error);
    });
}

searchActivityBtn.addEventListener("click", event => {
  event.preventDefault();
  const category = activityCategorySelect.value;
  const participants = activityParticipantsInput.value;
  searchActivities(category, participants);
});

/* axios.get("https://www.boredapi.com/api/activity/")
  .then(response => {
    const data = response.data;
    activityParagraph.textContent = data.activity;
  })
  
  add the axios script to your HTML file before the script that contains this code.

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="your-script.js"></script>*/