// Notification classes data-driven with tags, titles, and icons
const notificationClasses = {
  Announcement: {
    mainTag: "Announcement",
    titles: [
      { title: "Finals week schedule released", icon: "📚" },
      { title: "End of classes schedule released", icon: "🛎️" },
      { title: "Start of classes soon", icon: "🚀" },
      { title: "Campus closed tomorrow", icon: "📵" },
      { title: "Moving to online classes tomorrow", icon: "💻" },
      { title: "Moving to hybrid classes tomorrow", icon: "🔁" },
      { title: "Moving to face-to-face classes tomorrow", icon: "🏫" },
      { title: "Classes suspended for heavy rain", icon: "🌧️" },
      { title: "Classes suspended for earthquake", icon: "🌎" },
      { title: "New campus policies announced", icon: "📢" },
      { title: "Building maintenance notice", icon: "🚧" },
      { title: "Orientation for new students", icon: "🎓" },
      { title: "Faculty meeting announced", icon: "👥" },
      { title: "Library closed this weekend", icon: "📕" },
      { title: "Course registration opens soon", icon: "🗓️" },
      { title: "Tuition payment deadline approaching", icon: "💰" }
    ],
    extraTags: []
  },
  General: {
    mainTag: "General",
    titles: [
      { title: "Scheduled maintenance this weekend", icon: "🗓️" },
      { title: "System update completed", icon: "✅" },
      { title: "New features announced", icon: "🆕" },
      { title: "Performance improvements deployed", icon: "⚡" },
      { title: "User interface updated", icon: "🎨" },
      { title: "Login issues resolved", icon: "🔐" },
      { title: "Bug fixes in latest release", icon: "🔧" },
      { title: "Mobile version now available", icon: "📱" },
      { title: "Beware of phishing emails", icon: "⚠️" },
      { title: "Beware of suspicious links", icon: "🔗" },
      { title: "Security update applied", icon: "🛡️" },
      { title: "Two-factor authentication now supported", icon: "📲" },
      { title: "Password reset instructions updated", icon: "📝" },
      { title: "Unexpected downtime report", icon: "❗" },
      { title: "Known issues being addressed", icon: "🐞" },
      { title: "Help center updated", icon: "❓" },
      { title: "Feedback form now live", icon: "💬" }
    ],
    extraTags: []
  },
  Grades: {
    mainTag: "Grades",
    titles: [
      { title: "Grade appeal period announced", icon: "📢" },
      { title: "Grade appeal starts soon", icon: "🕒" },
      { title: "Grade appeals now open", icon: "📬" },
      { title: "Grade appeal results available", icon: "📄" },
      { title: "Changes in grade computation", icon: "🧮" },
      { title: "Grade submission deadline approaching", icon: "📅" },
      { title: "Final grades under review", icon: "🔍" },
      { title: "Midterm grades available", icon: "📝" },
      { title: "Instructor comments on grades released", icon: "💬" },
      { title: "Grade revisions ongoing", icon: "♻️" },
      { title: "Delayed release of grades", icon: "⏳" },
      { title: "System issue affecting grade visibility", icon: "⚠️" }
    ],
    extraTags: [
      "CS 10", "CS 11", "CS 12", "CS 20", "CS 21", "CS 32", "CS 33", "CS 136",
      "CS 138", "CS 140", "CS 150", "CS 165", "CS 191", "CS 145", "CS 153", "CS 180", "CS 192", "CS 194",
      "CS 195", "CS 133", "CS 198", "CS 132", "CS 155", "CS 196", "CS 199/200",
      "FN 101", "FN 102", "FN 121", "FN 122", "FN 123", "FN 131", "FN 124",
      "FN 125", "FN 132", "FN 133", "FN 141", "FN 134", "FN 141.1", "FN 142", "FN 199", "FN 136",
      "FN 126", "FN 146", "FN 200"
    ]
  },
  Deadlines: {
    mainTag: "Deadlines",
    titles: [
      { title: "Project submission deadline", icon: "📁" },
      { title: "Quiz deadline approaching", icon: "📝" },
      { title: "Lab report submission due", icon: "🧪" },
      { title: "Essay deadline reminder", icon: "🖊️" },
      { title: "Online submission cut-off", icon: "🌐" },
      { title: "Final paper deadline", icon: "📄" },
      { title: "Programming assignment due soon", icon: "💻" },
      { title: "Nutrition analysis report due", icon: "🥗" },
      { title: "Last day to submit research paper", icon: "📚" },
      { title: "Deadline for code repository submission", icon: "🗃️" },
      { title: "Group project deadline approaching", icon: "👥" },
      { title: "Deadline for lab journal upload", icon: "📓" },
      { title: "Multimedia project due tomorrow", icon: "🎬" },
      { title: "Midterm assessment submission deadline", icon: "📆" },
      { title: "Final report deadline this week", icon: "🚨" },
      { title: "Capstone draft due soon", icon: "🏗️" },
      { title: "Data analysis submission required", icon: "📊" },
      { title: "Practical exam write-up deadline", icon: "🧾" }
    ],
    extraTags: [
      "CS 10", "CS 11", "CS 12", "CS 20", "CS 21", "CS 32", "CS 33", "CS 136",
      "CS 138", "CS 140", "CS 150", "CS 165", "CS 191", "CS 145", "CS 153", "CS 180", "CS 192", "CS 194",
      "CS 195", "CS 133", "CS 198", "CS 132", "CS 155", "CS 196", "CS 199/200",
      "FN 101", "FN 102", "FN 121", "FN 122", "FN 123", "FN 131", "FN 124",
      "FN 125", "FN 132", "FN 133", "FN 141", "FN 134", "FN 141.1", "FN 142", "FN 199", "FN 136",
      "FN 126", "FN 146", "FN 200"
    ]
  },
  Holidays: {
    mainTag: "Holidays",
    titles: [
      { title: "No classes: New Year's Day", icon: "🎆" },
      { title: "No classes: EDSA People Power Revolution", icon: "✊" },
      { title: "No classes: Holy Week", icon: "⛪" },
      { title: "No classes: Araw ng Kagitingan", icon: "🇵🇭" },
      { title: "No classes: Labor Day", icon: "🛠️" },
      { title: "No classes: Independence Day", icon: "🎉" },
      { title: "No classes: Ninoy Aquino Day", icon: "🕊️" },
      { title: "No classes: National Heroes Day", icon: "🦸" },
      { title: "No classes: All Saints’ Day", icon: "🕯️" },
      { title: "No classes: Bonifacio Day", icon: "🗡️" },
      { title: "No classes: Christmas Day", icon: "🎄" },
      { title: "No classes: Rizal Day", icon: "📖" },
      { title: "No classes: Chinese New Year", icon: "🐉" },
      { title: "No classes: Eid’l Fitr", icon: "🌙" },
      { title: "No classes: Eid’l Adha", icon: "🕋" },
      { title: "Holiday advisory posted", icon: "📢" },
      { title: "Holiday update: Classes suspended", icon: "📅" },
      { title: "Holiday break starts soon", icon: "🧳" }
    ],
    extraTags: []
  }
};

// Possible tags with colors
const possibleTags = {
  General: "#3b82f6",
  Announcement: "#10b981",
  Deadlines: "#ef4444",
  Grades: "#8b5cf6",
  Holidays: "#F71414",

  // CS Courses
  "CS 10": "#16a34a",
  "CS 11": "#0ea5e9",
  "CS 12": "#d97706",
  "CS 20": "#6366f1",
  "CS 21": "#f43f5e",
  "CS 32": "#14b8a6",
  "CS 33": "#facc15",
  "CS 136": "#8b5cf6",
  "CS 138": "#ec4899",
  "CS 140": "#10b981",
  "CS 150": "#f97316",
  "CS 165": "#3b82f6",
  "CS 191": "#a855f7",
  "CS 145": "#22c55e",
  "CS 153": "#ef4444",
  "CS 180": "#e11d48",
  "CS 192": "#0f766e",
  "CS 194": "#7c3aed",
  "CS 195": "#f59e0b",
  "CS 133": "#4ade80",
  "CS 198": "#6d28d9",
  "CS 132": "#f43f5e",
  "CS 155": "#fde047",
  "CS 196": "#0284c7",
  "CS 199/200": "#b91c1c",

  // FN Courses
  "FN 101": "#3b82f6",
  "FN 102": "#10b981",
  "FN 121": "#f59e0b",
  "FN 122": "#6366f1",
  "FN 123": "#ef4444",
  "FN 131": "#22c55e",
  "FN 124": "#e879f9",
  "FN 125": "#f97316",
  "FN 132": "#14b8a6",
  "FN 133": "#f472b6",
  "FN 141": "#8b5cf6",
  "FN 134": "#fcd34d",
  "FN 141.1": "#60a5fa",
  "FN 142": "#e11d48",
  "FN 199": "#c084fc",
  "FN 136": "#15803d",
  "FN 126": "#a855f7",
  "FN 146": "#facc15",
  "FN 200": "#2563eb"
};

// Notification storage
let newNotifications = [];
let openedNotifications = [];
let archivedNotifications = [];

let currentTab = "new";
let selectedNotificationId = null;

//–– Utilities ––//

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function randomDateWithinLastDays(days = 7) {
  const now = Date.now();
  return new Date(now - Math.random() * days * 24 * 3600 * 1000);
}

function timeAgo(date) {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) return "just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
  return `${Math.floor(seconds / 86400)} days ago`;
}

//–– Rendering ––//

function renderList() {
  const container = document.getElementById("notification-list");
  let list = currentTab === "new"
    ? newNotifications
    : currentTab === "opened"
      ? openedNotifications
      : archivedNotifications;

  list.sort((a, b) => b.time - a.time);
  container.innerHTML = "";

  if (!list.length) {
    container.innerHTML = "<p>No notifications</p>";
    document.getElementById("content-title").textContent = "Select a notification";
    document.getElementById("content-text").textContent = "";
    return;
  }

  list.forEach((notif, index) => {
    const div = document.createElement("div");
    div.className = "notification-item";
    if (notif.id === selectedNotificationId) div.classList.add("active");

    // Slide-fade-in for newly added
    if (notif.justAdded) {
      div.classList.add("entering");
      // trigger transition
      requestAnimationFrame(() => {
        setTimeout(() => div.classList.remove("entering"), 10);
      });
      notif.justAdded = false;
    }

    // Main click → open & move from “new” to “opened”
    div.onclick = () => {
      selectedNotificationId = notif.id;
      if (currentTab === "new") {
        openedNotifications.unshift(notif);
        newNotifications = newNotifications.filter(n => n.id !== notif.id);
        currentTab = "opened";
        updateTabsUI();
      }
      renderList();
      renderDropdownNotifications();
      renderContent(notif);
    };

    // Title + icon
    const titleDiv = document.createElement("div");
    titleDiv.className = "notification-title";
    titleDiv.textContent = `${notif.icon} ${notif.title}`;
    div.appendChild(titleDiv);

    // Timestamp
    const timeDiv = document.createElement("div");
    timeDiv.className = "notification-subtitle";
    timeDiv.textContent = timeAgo(notif.time);
    div.appendChild(timeDiv);

    // Tags
    const tagsDiv = document.createElement("div");
    tagsDiv.className = "notification-tags";
    notif.tags.forEach(tag => {
      const span = document.createElement("span");
      span.textContent = tag.toUpperCase();
      span.style.backgroundColor = possibleTags[tag] || "#6b7280";
      tagsDiv.appendChild(span);
    });
    div.appendChild(tagsDiv);

    // Archive/Unarchive
    const btn = document.createElement("button");
    btn.className = "notification-archive-btn";
    btn.textContent = (currentTab === "archived") ? "Unarchive" : "Archive";
    btn.onclick = e => {
      e.stopPropagation();
      if (currentTab === "archived") {
        archivedNotifications = archivedNotifications.filter(n => n.id !== notif.id);
        openedNotifications.unshift(notif);
      } else {
        if (currentTab === "new") newNotifications = newNotifications.filter(n => n.id !== notif.id);
        if (currentTab === "opened") openedNotifications = openedNotifications.filter(n => n.id !== notif.id);
        archivedNotifications.unshift(notif);
      }
      renderList();
      renderDropdownNotifications();
    };
    div.appendChild(btn);

    container.appendChild(div);
  });
}

function renderContent(notif) {
  document.getElementById("content-title").textContent = notif.title;
  document.getElementById("content-text").textContent = notif.content;
}

//–– Actions ––//

function clearAllNotifications() {
  newNotifications = [];
  openedNotifications = [];
  archivedNotifications = [];
  selectedNotificationId = null;
  renderList();
  renderDropdownNotifications();
  renderContent({ title: "Select a notification", content: "" });
}

function markAllAsRead() {
  if (currentTab === "new") {
    openedNotifications = [...newNotifications, ...openedNotifications];
    newNotifications = [];
    selectedNotificationId = null;
    currentTab = "opened";
    updateTabsUI();
    renderList();
    renderDropdownNotifications();
    renderContent({ title: "Select a notification", content: "" });
  }
}

function refreshNotifications() {
  renderList();
  renderDropdownNotifications();
}

function switchTab(tab) {
  currentTab = tab;
  selectedNotificationId = null;
  updateTabsUI();
  renderList();
  renderDropdownNotifications();
  renderContent({ title: "Select a notification", content: "" });
}

function updateTabsUI() {
  document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".tab-button")
    .forEach(btn => {
      if (btn.textContent.toLowerCase() === currentTab)
        btn.classList.add("active");
    });
}

function setCurrentDate() {
  document.getElementById("current-date").textContent =
    new Date().toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric", year: "numeric" });
}

//–– Random Notification Generator ––//

function addRandomNotification() {
  const classes = Object.keys(notificationClasses);
  const clsName = classes[getRandomInt(classes.length)];
  const cls = notificationClasses[clsName];

  const titleObj = cls.titles[getRandomInt(cls.titles.length)];

  const tags = [cls.mainTag];
  const extras = cls.extraTags.slice().sort(() => 0.5 - Math.random());
  const extraCount = getRandomInt(Math.min(3, extras.length + 1));
  tags.push(...extras.slice(0, extraCount));

  const newNotif = {
    id: Date.now() + getRandomInt(1000),
    title: titleObj.title,
    content: `This is a notification about “${titleObj.title}.”`,
    time: randomDateWithinLastDays(7),
    tags, icon: titleObj.icon,
    checked: false,
    justAdded: true
  };

  newNotifications.unshift(newNotif);
  renderDropdownNotifications();
  if (currentTab === "new") renderList();
}

//–– Debug Info ––//

function initDebugInfo() {
  const tagsList = document.getElementById("tags-list");
  const titlesList = document.getElementById("titles-list");
  const timesList = document.getElementById("times-list");

  // tags
  for (const [tag, color] of Object.entries(possibleTags)) {
    const li = document.createElement("li");
    li.innerHTML = `<span class="color-box" style="background-color:${color}"></span>${tag}`;
    tagsList.appendChild(li);
  }
  // titles
  Object.values(notificationClasses).forEach(cls =>
    cls.titles.forEach(t => {
      const li = document.createElement("li");
      li.textContent = `${t.icon} ${t.title}`;
      titlesList.appendChild(li);
    })
  );
  // times
  [30, 5 * 60, 2 * 3600, 24 * 3600, 3 * 24 * 3600].forEach(sec => {
    const li = document.createElement("li");
    const date = new Date(Date.now() - sec * 1000);
    li.textContent = timeAgo(date);
    timesList.appendChild(li);
  });
}

const bellIcon = document.querySelectorAll(".header-icon")[1]; // Assuming second icon is the bell
const dropdown = document.getElementById("notification-dropdown");
const dropdownList = document.getElementById("dropdown-notification-list");

// Toggle dropdown
bellIcon.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
});

function renderDropdownNotifications() {
  dropdownList.innerHTML = "";

  const latestNew = newNotifications
    .slice()
    .sort((a, b) => b.time - a.time)
    .slice(0, 5);

  if (latestNew.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No new notifications";
    li.style.color = "#777";
    dropdownList.appendChild(li);
    return;
  }

  latestNew.forEach((notif) => {
    const li = document.createElement("li");
    li.className = "dropdown-notif-item";

    // Icon div
    const iconDiv = document.createElement("div");
    iconDiv.className = "notif-icon";
    iconDiv.textContent = notif.icon;

    // Main content div
    const mainDiv = document.createElement("div");
    mainDiv.className = "notif-main";

    // Title
    const titleDiv = document.createElement("div");
    titleDiv.className = "notif-title";
    titleDiv.textContent = notif.title;

    // Tags container
    const tagsDiv = document.createElement("div");
    tagsDiv.className = "notif-tags";
    notif.tags.forEach(tag => {
      const span = document.createElement("span");
      span.className = "notif-tag";
      span.textContent = tag.toUpperCase();
      span.style.backgroundColor = possibleTags[tag] || "#6b7280";
      tagsDiv.appendChild(span);
    });

    mainDiv.appendChild(titleDiv);
    mainDiv.appendChild(tagsDiv);

    // Timestamp div
    const timeDiv = document.createElement("div");
    timeDiv.className = "notif-time";
    timeDiv.textContent = timeAgo(notif.time);

    li.appendChild(iconDiv);
    li.appendChild(mainDiv);
    li.appendChild(timeDiv);

    li.onclick = () => {
      window.location.href = "notifications.html";
    };

    dropdownList.appendChild(li);
  });
}

document.getElementById("debug-btn").addEventListener("click", addRandomNotification);

//–– Initialize ––//
setCurrentDate();
initDebugInfo();
renderList();
renderDropdownNotifications();