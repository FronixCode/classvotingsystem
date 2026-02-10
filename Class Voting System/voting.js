


// Get logged-in user
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let users = JSON.parse(localStorage.getItem("users")) || [];

// Block access if not logged in
if (!currentUser) {
  alert("Unauthorized access. Please log in.");
  location.href = "login.html";
}

// Prevent double voting
if (currentUser.voted === true) {
  alert("You have already voted.");
  location.href = "result.html";
}

function submitVote() {
  const courseRep = document.querySelector(
    'input[name="rep"]:checked'
  );

  const assistantRep = document.querySelector(
    'input[name="social"]:checked'
  );

  if (!courseRep || !assistantRep) {
    alert("Please vote for both positions.");
    return;
  }

  let votes = JSON.parse(localStorage.getItem("votes")) || [];

  votes.push({
    courseRepresentative: courseRep.value,
    assistantCourseRepresentative: assistantRep.value,
    voter: currentUser.matric
  });

  localStorage.setItem("votes", JSON.stringify(votes));

  // Update user vote status
  currentUser.voted = true;

  // Update users array
  const index = users.findIndex(u => u.matric === currentUser.matric);
  users[index] = currentUser;

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  alert("Your vote has been submitted successfully.");
  location.href = "result.html";
}
