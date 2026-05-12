const topics = {
  aerospace: [
    "How satellites improve daily life on Earth.",
    "Why STEM education is essential for the future of flight.",
    "The importance of understanding weather in aviation.",
    "How drone technology is changing aerospace careers.",
    "What the Artemis missions teach us about exploration.",
    "How aerospace innovation supports national security.",
    "How reusable rockets are reshaping space access.",
    "The role of air traffic control in flight safety.",
    "Why aerodynamics matter in aircraft design.",
    "How GPS transformed aviation navigation.",
    "The future of supersonic passenger travel.",
    "How composite materials improve aircraft performance.",
    "The importance of maintenance culture in aviation.",
    "How human factors influence cockpit decision-making.",
    "What orbital mechanics teach us about precision.",
    "How weather satellites improve disaster forecasting.",
    "The value of model rocketry in aerospace education.",
    "How flight simulators improve pilot readiness.",
    "Why space debris is a growing challenge.",
    "How propulsion systems have evolved over time.",
    "The role of women pioneers in aerospace history.",
    "How hypersonic research could change transportation.",
    "The impact of private space companies on innovation.",
    "Why mission planning is essential for flight operations.",
    "How aerospace careers combine science and service."
  ],
  cap: [
    "How Civil Air Patrol builds leadership in young people.",
    "The value of drill and ceremonies in developing discipline.",
    "How mentorship in CAP shapes future community leaders.",
    "The role of CAP in connecting cadets to aviation careers.",
    "Why uniform standards matter in professional organizations.",
    "How CAP’s core values apply outside the squadron.",
    "How CAP search-and-rescue missions support communities.",
    "The importance of chain of command in CAP operations.",
    "How cadet staff positions build real leadership skills.",
    "Why customs and courtesies build professionalism.",
    "How CAP fitness standards promote lifelong health.",
    "The value of after-action reviews in CAP training.",
    "How color guard participation builds teamwork.",
    "Why CAP aerospace activities inspire future aviators.",
    "How CAP encampments develop independence and confidence.",
    "The role of communication in successful squadron events.",
    "How CAP teaches time management to cadets.",
    "The importance of accountability in cadet leadership.",
    "How CAP volunteer service strengthens civic responsibility.",
    "Why goal setting improves cadet progression.",
    "How CAP emergency services training builds readiness.",
    "The value of peer feedback in cadet development.",
    "How CAP traditions connect generations of members.",
    "Why safety culture is vital in every CAP activity.",
    "How CAP experiences prepare cadets for college and careers."
  ],
  emergency: [
    "Why communication is critical during search and rescue missions.",
    "How emergency preparedness can save lives in local communities.",
    "The role of teamwork in disaster response operations.",
    "How technology supports modern emergency services.",
    "What makes a volunteer effective during crisis situations.",
    "How to stay calm and lead under pressure during emergencies.",
    "How incident command systems organize chaotic situations.",
    "Why situational awareness is key in field operations.",
    "How mapping tools improve search mission effectiveness.",
    "The importance of personal protective equipment in emergencies.",
    "How first aid training increases community resilience.",
    "Why clear radio procedures prevent costly mistakes.",
    "How staging areas improve response coordination.",
    "The role of logistics in disaster relief missions.",
    "How preparedness drills improve team performance.",
    "Why emotional resilience matters for responders.",
    "How damage assessment informs recovery priorities.",
    "The value of redundancy in emergency communications.",
    "How volunteers can support shelters during disasters.",
    "Why rapid but accurate decisions save lives.",
    "How weather awareness improves mission safety.",
    "The role of leadership handoffs during long operations.",
    "How mutual aid partnerships strengthen local response.",
    "Why documentation is critical after emergency missions.",
    "How communities recover stronger after major disasters."
  ],
  leadership: [
    "The connection between integrity and effective leadership.",
    "How servant leadership strengthens a team.",
    "Why accountability matters in mission-focused organizations.",
    "How to inspire confidence when leading peers.",
    "The importance of resilience after setbacks.",
    "Balancing confidence and humility as a young leader.",
    "How active listening improves leadership decisions.",
    "Why trust is the foundation of strong teams.",
    "How leaders set the tone through personal example.",
    "The value of giving and receiving constructive feedback.",
    "How to lead effectively when you are not in charge.",
    "Why preparation builds credibility in leadership roles.",
    "How adaptability helps leaders navigate uncertainty.",
    "The importance of empathy in team performance.",
    "How to resolve conflict without damaging relationships.",
    "Why clear expectations prevent team confusion.",
    "How small habits build long-term leadership character.",
    "The role of courage in ethical decision-making.",
    "How leaders recover trust after mistakes.",
    "Why consistency matters more than charisma.",
    "How delegation develops future leaders.",
    "The connection between discipline and personal growth.",
    "How mission focus helps teams overcome setbacks.",
    "Why gratitude strengthens team culture.",
    "How leaders create environments where others can succeed."
  ]
};

const categorySelect = document.getElementById("category");
const newTopicButton = document.getElementById("new-topic");
const topicText = document.getElementById("topic-text");
function getSelectedTopics() {
  const selected = categorySelect.value;

  if (selected === "all") {
    return Object.values(topics).flat();
  }

  return topics[selected];
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
  generateTopic();
});

newTopicButton.addEventListener("click", generateTopic);

generateTopic();
