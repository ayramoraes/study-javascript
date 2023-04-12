
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <title>Random Activity Generator</title>
</head>

<body>
    <main>
        <div id="random-activity">
            <h1>Find things to do when you're bored</h1>
            <button id="random-activity-btn">Get Random Activity</button>
            <p id="activity"></p>
        </div>

        <div id="activity-search">
            <h2>Search for Activities</h2>
            <form>
                <label for="activity-category">Category:</label>
                <select id="activity-category">
                    <option value="">All Categories</option>
                    <option value="education">Education</option>
                    <option value="recreational">Recreational</option>
                    <option value="social">Social</option>
                    <option value="diy">DIY</option>
                    <option value="charity">Charity</option>
                    <option value="cooking">Cooking</option>
                    <option value="relaxation">Relaxation</option>
                    <option value="music">Music</option>
                    <option value="busywork">Busy Work</option>
                </select>
                <br><br>
                <label for="activity-participants">Participants:</label>
                <input type="number" id="activity-participants" name="activity-participants" min="1" max="10">
                <br><br>
                <button type="submit" id="search-activity-btn">Search</button>
            </form>
            <div id="search-results">
                <h3>Search Results:</h3>
                <ul id="activity-list"></ul>
            </div>
        </div>
    </main>
    <script src="script.js"></script>
</body>

</html>

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