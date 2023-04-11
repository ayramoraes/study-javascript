const randomActivityBtn = document.getElementById("random-activity-btn");
const activityParagraph = document.getElementById("activity");

function getRandomActivity() {
  fetch("https://www.boredapi.com/api/activity/")
    .then(response => response.json())
    .then(data => {
      activityParagraph.textContent = data.activity;
    })
    .catch(error => {
      console.error(error);
    });
}

randomActivityBtn.addEventListener("click", getRandomActivity);

/* axios.get("https://www.boredapi.com/api/activity/")
  .then(response => {
    const data = response.data;
    activityParagraph.textContent = data.activity;
  })
  
  add the axios script to your HTML file before the script that contains this code.

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="your-script.js"></script>*/