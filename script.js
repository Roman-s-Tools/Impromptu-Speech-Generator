const topics = {
  aerospace: [
    "How satellites improve daily life on Earth.",
    "Why STEM education is essential for the future of flight.",
    "The importance of understanding weather in aviation.",
    "How drone technology is changing aerospace careers.",
    "What the Artemis missions teach us about exploration.",
    "How aerospace innovation supports national security."
  ],
  cap: [
    "How Civil Air Patrol builds leadership in young people.",
    "The value of drill and ceremonies in developing discipline.",
    "How mentorship in CAP shapes future community leaders.",
    "The role of CAP in connecting cadets to aviation careers.",
    "Why uniform standards matter in professional organizations.",
    "How CAP’s core values apply outside the squadron."
  ],
  emergency: [
    "Why communication is critical during search and rescue missions.",
    "How emergency preparedness can save lives in local communities.",
    "The role of teamwork in disaster response operations.",
    "How technology supports modern emergency services.",
    "What makes a volunteer effective during crisis situations.",
    "How to stay calm and lead under pressure during emergencies."
  ],
  leadership: [
    "The connection between integrity and effective leadership.",
    "How servant leadership strengthens a team.",
    "Why accountability matters in mission-focused organizations.",
    "How to inspire confidence when leading peers.",
    "The importance of resilience after setbacks.",
    "Balancing confidence and humility as a young leader."
  ]
};

const categorySelect = document.getElementById("category");
const newTopicButton = document.getElementById("new-topic");
const topicText = document.getElementById("topic-text");
const topicList = document.getElementById("topic-list");

function getSelectedTopics() {
  const selected = categorySelect.value;

  if (selected === "all") {
    return Object.values(topics).flat();
  }

  return topics[selected];
}

function renderTopicList() {
  const selectedTopics = getSelectedTopics();
  topicList.innerHTML = "";

  selectedTopics.forEach((topic) => {
    const item = document.createElement("li");
    item.textContent = topic;
    topicList.appendChild(item);
  });
}

function generateTopic() {
  const selectedTopics = getSelectedTopics();

  if (selectedTopics.length === 0) {
    topicText.textContent = "No topics available.";
    return;
  }

  const randomIndex = Math.floor(Math.random() * selectedTopics.length);
  topicText.textContent = selectedTopics[randomIndex];
}

categorySelect.addEventListener("change", () => {
  renderTopicList();
  generateTopic();
});

newTopicButton.addEventListener("click", generateTopic);

renderTopicList();
