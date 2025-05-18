// Notification classes data-driven with tags, titles, and icons
const notificationClasses = {
  Announcement: {
    mainTag: "Announcement",
    titles: [
      { title: "Exam schedule released", icon: "📅" },
      { title: "New assignment posted", icon: "📝" },
      { title: "Guest lecture tomorrow", icon: "🎤" },
      { title: "Campus closed on Friday", icon: "🏫" }
    ],
    extraTags: ["Course 101", "Course 102", "Course 103"]
  },
  General: {
    mainTag: "General",
    titles: [
      { title: "System maintenance", icon: "🛠️" },
      { title: "Holiday announcement", icon: "🎉" },
      { title: "New feature released", icon: "🚀" }
    ],
    extraTags: []
  },
  Grades: {
    mainTag: "Grades",
    titles: [
      { title: "Grades released for Course 101", icon: "📊" },
      { title: "Grade appeal deadline", icon: "⏰" }
    ],
    extraTags: ["Course 101", "Course 102"]
  }
};

// Possible tags with colors
const possibleTags = {
  General: "#3b82f6",
  Announcement: "#10b981",
  "Course 101": "#f59e0b",
  "Course 102": "#a78bfa",
  "Course 103": "#f472b6",
  Deadline: "#ef4444",
  Grades: "#8b5cf6"
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

function randomDateWithinLastDays(days = 2) {
  const now = Date.now();
  return new Date(now - Math.random() * days * 24 * 3600 * 1000);
}

function timeAgo(date) {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) return "just now";
  if (seconds < 3600) return `${Math.floor(seconds/60)} minutes ago`;
  if (seconds < 86400) return `${Math.floor(seconds/3600)} hours ago`;
  return `${Math.floor(seconds/86400)} days ago`;
}

//–– Rendering ––//

function renderList() {
  const container = document.getElementById("notification-list");
  let list = currentTab === "new"
    ? newNotifications
    : currentTab === "opened"
      ? openedNotifications
      : archivedNotifications;

  list.sort((a,b) => b.time - a.time);
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
        newNotifications = newNotifications.filter(n=>n.id!==notif.id);
        currentTab = "opened";
        updateTabsUI();
      }
      renderList();
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
    btn.textContent = (currentTab==="archived") ? "Unarchive" : "Archive";
    btn.onclick = e=> {
      e.stopPropagation();
      if (currentTab==="archived") {
        archivedNotifications = archivedNotifications.filter(n=>n.id!==notif.id);
        openedNotifications.unshift(notif);
      } else {
        if (currentTab==="new") newNotifications   = newNotifications.filter(n=>n.id!==notif.id);
        if (currentTab==="opened") openedNotifications = openedNotifications.filter(n=>n.id!==notif.id);
        archivedNotifications.unshift(notif);
      }
      renderList();
    };
    div.appendChild(btn);

    container.appendChild(div);
  });
}

function renderContent(notif) {
  document.getElementById("content-title").textContent = notif.title;
  document.getElementById("content-text").textContent  = notif.content;
}

//–– Actions ––//

function clearAllNotifications() {
  newNotifications = [];
  openedNotifications = [];
  archivedNotifications = [];
  selectedNotificationId = null;
  renderList();
  renderContent({ title: "Select a notification", content: "" });
}

function markAllAsRead() {
  if (currentTab==="new") {
    openedNotifications = [...newNotifications, ...openedNotifications];
    newNotifications = [];
    selectedNotificationId = null;
    currentTab = "opened";
    updateTabsUI();
    renderList();
    renderContent({ title: "Select a notification", content: "" });
  }
}

function refreshNotifications() {
  renderList();
}

function switchTab(tab) {
  currentTab = tab;
  selectedNotificationId = null;
  updateTabsUI();
  renderList();
  renderContent({ title: "Select a notification", content: "" });
}

function updateTabsUI() {
  document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".tab-button")
    .forEach(btn => {
      if (btn.textContent.toLowerCase()===currentTab) 
        btn.classList.add("active");
    });
}

function setCurrentDate() {
  document.getElementById("current-date").textContent =
    new Date().toLocaleDateString(undefined, { weekday:"short", month:"short", day:"numeric", year:"numeric" });
}

//–– Random Notification Generator ––//

function addRandomNotification() {
  const classes = Object.keys(notificationClasses);
  const clsName = classes[getRandomInt(classes.length)];
  const cls    = notificationClasses[clsName];

  const titleObj = cls.titles[getRandomInt(cls.titles.length)];

  const tags = [cls.mainTag];
  const extras = cls.extraTags.slice().sort(() => 0.5 - Math.random());
  const extraCount = getRandomInt(Math.min(3, extras.length+1));
  tags.push(...extras.slice(0, extraCount));

  const newNotif = {
    id: Date.now() + getRandomInt(1000),
    title: titleObj.title,
    content:`This is a notification about “${titleObj.title}.”`,
    time:   randomDateWithinLastDays(2),
    tags, icon: titleObj.icon,
    checked: false,
    justAdded: true
  };

  newNotifications.unshift(newNotif);
  if (currentTab==="new") renderList();
}

//–– Debug Info ––//

function initDebugInfo() {
  const tagsList   = document.getElementById("tags-list");
  const titlesList = document.getElementById("titles-list");
  const timesList  = document.getElementById("times-list");

  // tags
  for (const [tag,color] of Object.entries(possibleTags)) {
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
  [30,5*60,2*3600,24*3600,3*24*3600].forEach(sec => {
    const li = document.createElement("li");
    const date = new Date(Date.now() - sec*1000);
    li.textContent = timeAgo(date);
    timesList.appendChild(li);
  });
}

document.getElementById("debug-btn").addEventListener("click", addRandomNotification);

//–– Initialize ––//
setCurrentDate();
initDebugInfo();
renderList();