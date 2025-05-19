// Notification classes data-driven with tags, titles, and icons
const notificationClasses = {
  Announcement: {
    mainTag: "Announcement",
    titles: [
      {
        title: "Finals week schedule released",
        icon: "📚",
        template: () =>
          "The finals week schedule has been released. Please check your course calendar."
      },
      {
        title: "End of classes schedule released",
        icon: "🛎️",
        template: () =>
          "The schedule for the end of classes is now available."
      },
      {
        title: "Start of classes soon",
        icon: "🚀",
        template: () =>
          "Classes for the new semester are starting soon. Get ready!"
      },
      {
        title: "Campus closed tomorrow",
        icon: "📵",
        template: () =>
          "Campus will be closed tomorrow. Stay safe."
      },
      {
        title: "Moving to online classes tomorrow",
        icon: "💻",
        template: () =>
          "Classes will be held online tomorrow. Check your email for links."
      },
      {
        title: "Moving to hybrid classes tomorrow",
        icon: "🔁",
        template: () =>
          "Tomorrow's classes will follow a hybrid format. Please prepare accordingly."
      },
      {
        title: "Moving to face-to-face classes tomorrow",
        icon: "🏫",
        template: () =>
          "Face-to-face classes resume tomorrow. Follow campus health protocols."
      },
      {
        title: "Classes suspended for heavy rain",
        icon: "🌧️",
        template: () =>
          "All classes are suspended tomorrow due to heavy rain warnings. Stay indoors!"
      },
      {
        title: "Classes suspended for earthquake",
        icon: "🌎",
        template: () =>
          "Classes are suspended today due to recent earthquake activity. Safety first!"
      },
      {
        title: "New campus policies announced",
        icon: "📢",
        template: () =>
          "New campus policies have been announced. Please review them carefully."
      },
      {
        title: "Building maintenance notice",
        icon: "🚧",
        template: () =>
          "Building maintenance will occur soon. Access may be limited during this time."
      },
      {
        title: "Orientation for new students",
        icon: "🎓",
        template: () =>
          "Orientation for new students will be held soon. Don't miss it!"
      },
      {
        title: "Faculty meeting announced",
        icon: "👥",
        template: () =>
          "Faculty meeting has been scheduled. Please check your department announcements."
      },
      {
        title: "Library closed this weekend",
        icon: "📕",
        template: () =>
          "The library will be closed this weekend for renovations. Plan accordingly."
      },
      {
        title: "Course registration opens soon",
        icon: "🗓️",
        template: () =>
          "Course registration opens soon. Prepare your course list in advance."
      },
      {
        title: "Tuition payment deadline approaching",
        icon: "💰",
        template: () =>
          "Reminder: Tuition payment deadline is approaching. Avoid late fees!"
      }
    ],
    extraTags: []
  },
  General: {
    mainTag: "General",
    titles: [
      {
        title: "Scheduled maintenance this weekend",
        icon: "🗓️",
        template: () =>
          "System maintenance is scheduled this weekend. Expect brief outages."
      },
      {
        title: "System update completed",
        icon: "✅",
        template: () =>
          "The latest system update has been successfully completed. Enjoy new features!"
      },
      {
        title: "New features announced",
        icon: "🆕",
        template: () =>
          "New features have been added to the system. Check them out!"
      },
      {
        title: "Performance improvements deployed",
        icon: "⚡",
        template: () =>
          "Performance improvements have been deployed for faster load times and better reliability."
      },
      {
        title: "User interface updated",
        icon: "🎨",
        template: () =>
          "The user interface has been refreshed for a better experience."
      },
      {
        title: "Login issues resolved",
        icon: "🔐",
        template: () =>
          "Recent login issues have been resolved. You can now access your account without problems."
      },
      {
        title: "Bug fixes in latest release",
        icon: "🔧",
        template: () =>
          "The latest release includes several important bug fixes."
      },
      {
        title: "Mobile version now available",
        icon: "📱",
        template: () =>
          "The mobile version of our platform is now live! Download the app or visit on your phone."
      },
      {
        title: "Beware of phishing emails",
        icon: "⚠️",
        template: () =>
          "Be cautious of phishing emails. Do not click suspicious links or share your credentials."
      },
      {
        title: "Beware of suspicious links",
        icon: "🔗",
        template: () =>
          "Avoid clicking on suspicious links from unknown sources to protect your account."
      },
      {
        title: "Security update applied",
        icon: "🛡️",
        template: () =>
          "Important security updates have been applied to help protect your data."
      },
      {
        title: "Two-factor authentication now supported",
        icon: "📲",
        template: () =>
          "Two-factor authentication (2FA) is now supported. Enable it for enhanced account security."
      },
      {
        title: "Password reset instructions updated",
        icon: "📝",
        template: () =>
          "Instructions for password reset have been updated. Check your account settings if you need help."
      },
      {
        title: "Unexpected downtime report",
        icon: "❗",
        template: () =>
          "We experienced unexpected downtime earlier today. All services are now fully restored."
      },
      {
        title: "Known issues being addressed",
        icon: "🐞",
        template: () =>
          "We are aware of some issues and are actively working to resolve them. Thanks for your patience!"
      },
      {
        title: "Help center updated",
        icon: "❓",
        template: () =>
          "The help center has been updated with new FAQs and guides."
      },
      {
        title: "Feedback form now live",
        icon: "💬",
        template: () =>
          "Your feedback matters! The new feedback form is now live. Share your thoughts with us."
      }
    ],
    extraTags: []
  },
  Grades: {
    mainTag: "Grades",
    titles: [
      {
        title: "Grade appeal period announced",
        icon: "📢",
        template: () =>
          "The grade appeal period has been announced. Make sure to review the timeline carefully."
      },
      {
        title: "Grade appeal starts soon",
        icon: "🕒",
        template: () =>
          "The grade appeal period will start soon. Prepare your documents."
      },
      {
        title: "Grade appeals now open",
        icon: "📬",
        template: () =>
          "Grade appeals are now open. Submit your appeals promptly."
      },
      {
        title: "Grade appeal results available",
        icon: "📄",
        template: () =>
          "Results for grade appeals are now available. Check your student portal."
      },
      {
        title: "Changes in grade computation",
        icon: "🧮",
        template: () =>
          "There are changes in the grade computation method. Please review the updated policy."
      },
      {
        title: "Grade submission deadline approaching",
        icon: "📅",
        template: () =>
          "The deadline for grade submission is approaching. Remind your instructors if needed."
      },
      {
        title: "Final grades under review",
        icon: "🔍",
        template: () =>
          "Final grades are currently under review. Results will be released soon."
      },
      {
        title: "Midterm grades available",
        icon: "📝",
        template: () =>
          "Midterm grades have been posted. Check your account for updates."
      },
      {
        title: "Instructor comments on grades released",
        icon: "💬",
        template: () =>
          "Instructor comments for your grades have been released. Review them online."
      },
      {
        title: "Grade revisions ongoing",
        icon: "♻️",
        template: () =>
          "Grade revisions are currently ongoing. Updates will be posted shortly."
      },
      {
        title: "Delayed release of grades",
        icon: "⏳",
        template: () =>
          "The release of grades has been delayed. We apologize for the inconvenience."
      },
      {
        title: "System issue affecting grade visibility",
        icon: "⚠️",
        template: () =>
          "There is a temporary system issue affecting grade visibility. Our team is working on a fix."
      }
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
      {
        title: "Project submission deadline",
        icon: "📁",
        template: () =>
          "Reminder: A project submission deadline is approaching. Double-check your requirements and submit on time."
      },
      {
        title: "Quiz deadline approaching",
        icon: "📝",
        template: () =>
          "A quiz deadline is coming up soon. Make sure you’re prepared."
      },
      {
        title: "Lab report submission due",
        icon: "🧪",
        template: () =>
          "A lab report is due soon. Ensure all your data and analysis are complete."
      },
      {
        title: "Essay deadline reminder",
        icon: "🖊️",
        template: () =>
          "Don’t forget — an essay deadline is just around the corner. Wrap up those final edits!"
      },
      {
        title: "Online submission cut-off",
        icon: "🌐",
        template: () =>
          "Heads-up: The online submission window will close soon. Be sure to upload everything beforehand."
      },
      {
        title: "Final paper deadline",
        icon: "📄",
        template: () =>
          "A final paper is due soon. Make sure all citations and formatting are in place."
      },
      {
        title: "Programming assignment due soon",
        icon: "💻",
        template: () =>
          "Reminder: A programming assignment deadline is coming up. Commit and push your work in time."
      },
      {
        title: "Nutrition analysis report due",
        icon: "🥗",
        template: () =>
          "Your nutrition analysis report is due soon. Double-check your nutritional data and formatting."
      },
      {
        title: "Last day to submit research paper",
        icon: "📚",
        template: () =>
          "Today is the final day to submit your research paper. Don’t miss the cut-off!"
      },
      {
        title: "Deadline for code repository submission",
        icon: "🗃️",
        template: () =>
          "The deadline for submitting your code repository is coming up. Ensure all files are up to date."
      },
      {
        title: "Group project deadline approaching",
        icon: "👥",
        template: () =>
          "A group project deadline is approaching. Coordinate with your teammates for final touches."
      },
      {
        title: "Deadline for lab journal upload",
        icon: "📓",
        template: () =>
          "Reminder: Upload your lab journal before the deadline. Check formatting and completeness."
      },
      {
        title: "Multimedia project due tomorrow",
        icon: "🎬",
        template: () =>
          "Reminder: A multimedia project is due tomorrow. Don’t wait until the last minute to render!"
      },
      {
        title: "Midterm assessment submission deadline",
        icon: "📆",
        template: () =>
          "The submission deadline for a midterm assessment is coming up. Finalize your work soon."
      },
      {
        title: "Final report deadline this week",
        icon: "🚨",
        template: () =>
          "A final report is due this week. Stay on top of your progress and submit early if possible."
      },
      {
        title: "Capstone draft due soon",
        icon: "🏗️",
        template: () =>
          "Heads-up: A capstone draft deadline is coming up. Make sure it's polished and complete."
      },
      {
        title: "Data analysis submission required",
        icon: "📊",
        template: () =>
          "A data analysis submission is required soon. Check your results and interpretations."
      },
      {
        title: "Practical exam write-up deadline",
        icon: "🧾",
        template: () =>
          "Deadline approaching for a practical exam write-up. Ensure it covers all necessary sections."
      }
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
      {
        title: "No classes: New Year's Day",
        icon: "🎆",
        template: () =>
          `No classes will be held on New Year's Day. Enjoy the holiday!`
      },
      {
        title: "No classes: EDSA People Power Revolution",
        icon: "✊",
        template: () =>
          `No classes in observance of the EDSA People Power Revolution.`
      },
      {
        title: "No classes: Holy Week",
        icon: "⛪",
        template: () =>
          `No classes during Holy Week.`
      },
      {
        title: "No classes: Araw ng Kagitingan",
        icon: "🇵🇭",
        template: () =>
          `No classes in observance of Araw ng Kagitingan.`
      },
      {
        title: "No classes: Labor Day",
        icon: "🛠️",
        template: () =>
          `No classes on Labor Day.`
      },
      {
        title: "No classes: Independence Day",
        icon: "🎉",
        template: () =>
          `No classes on Independence Day.`
      },
      {
        title: "No classes: Ninoy Aquino Day",
        icon: "🕊️",
        template: () =>
          `No classes on Ninoy Aquino Day.`
      },
      {
        title: "No classes: National Heroes Day",
        icon: "🏅",
        template: () =>
          `No classes on National Heroes Day.`
      },
      {
        title: "No classes: Bonifacio Day",
        icon: "🎖️",
        template: () =>
          `No classes on Bonifacio Day.`
      },
      {
        title: "No classes: Christmas Day",
        icon: "🎄",
        template: () =>
          `No classes on Christmas Day.`
      },
      {
        title: "No classes: Rizal Day",
        icon: "🖋️",
        template: () =>
          `No classes on Rizal Day.`
      },
      {
        title: "No classes: Additional special non-working days",
        icon: "🛑",
        template: ({ date, name }) =>
          `No classes today in observance of special non-working days.`
      }
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
      updateNotificationCount();
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
      updateNotificationCount();
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
  updateNotificationCount();
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
    updateNotificationCount();
    renderContent({ title: "Select a notification", content: "" });
  }
}

function refreshNotifications() {
  renderList();
  renderDropdownNotifications();
  updateNotificationCount();
}

function switchTab(tab) {
  currentTab = tab;
  selectedNotificationId = null;
  updateTabsUI();
  renderList();
  renderDropdownNotifications();
  updateNotificationCount();
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
  const now = new Date();

  const datePart = now.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  const timePart = now.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true
  });

  document.getElementById("current-date").textContent = `${datePart}, ${timePart}`;
}

//–– Random Notification Generator ––//

function addRandomNotification() {
  const classes = Object.keys(notificationClasses);
  const clsName = classes[getRandomInt(classes.length)];
  const cls = notificationClasses[clsName];

  const titleObj = cls.titles[getRandomInt(cls.titles.length)];

  // Example of dynamic data for your template
  const dynamicData = {
    className: "Math 101",
    dueDate: randomDateWithinLastDays(10),
    score: 87,
    total: 100,
  };

  const contentText = titleObj.template
    ? titleObj.template(dynamicData)
    : `This is a notification about “${titleObj.title}.”`;

  const tags = [cls.mainTag];
  const extras = cls.extraTags.slice().sort(() => 0.5 - Math.random());
  const extraCount = getRandomInt(Math.min(3, extras.length + 1));
  tags.push(...extras.slice(0, extraCount));

  const newNotif = {
    id: Date.now() + getRandomInt(1000),
    title: titleObj.title,
    content: contentText,
    time: randomDateWithinLastDays(7),
    tags,
    icon: titleObj.icon,
    checked: false,
    justAdded: true
  };

  newNotifications.unshift(newNotif);
  renderDropdownNotifications();
  updateNotificationCount();
  if (currentTab === "new") renderList();
}

const bellIcon = document.querySelectorAll(".header-icon")[1]; // Assuming second icon is the bell
const dropdown = document.getElementById("notification-dropdown");
const dropdownList = document.getElementById("dropdown-notification-list");

// Toggle dropdown
document.getElementById("notification-icon").addEventListener("click", () => {
  const dropdown = document.getElementById("notification-dropdown");
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

  updateNotificationCount();
}

const themePresets = {
  maroon: {
    header: "#800000",
    button: "#a52a2a",
    link: "#b22222"
  },
  forest: {
    header: "#228B22",
    button: "#2e8b57",
    link: "#006400"
  },
  orange: {
    header: "#ff8c00",
    button: "#ff4500",
    link: "#ff6347"
  },
  pink: {
    header: "#ff69b4",
    button: "#ff1493",
    link: "#db7093"
  },
  mono: {
    header: "#333333",
    button: "#555555",
    link: "#888888"
  },

  royalBlue: {
    header: "#4169E1",
    button: "#27408B",
    link: "#1E90FF"
  },
  gold: {
    header: "#FFD700",
    button: "#FFC300",
    link: "#FFB800"
  },
  violet: {
    header: "#8A2BE2",
    button: "#7B1FA2",
    link: "#9400D3"
  },
  teal: {
    header: "#008080",
    button: "#006666",
    link: "#009999"
  },
  purpleOrange: {
    header: "#8A2BE2",  // purple
    button: "#FF8C00",  // dark orange
    link: "#A0522D"     // sienna (warm accent)
  },
  redBlue: {
    header: "#DC143C",  // crimson red
    button: "#4169E1",  // royal blue
    link: "#00008B"     // dark blue
  },
  tealCoral: {
    header: "#008080",  // teal
    button: "#FF6F61",  // coral
    link: "#CD5C5C"     // indian red
  },
  yellowPurple: {
    header: "#FFD700",  // gold
    button: "#6A0DAD",  // dark purple
    link: "#9400D3"     // dark violet
  }
};

document.querySelectorAll(".color-swatch").forEach(btn => {
  btn.addEventListener("click", () => {
    const theme = btn.getAttribute("data-theme");
    const colors = themePresets[theme];

    // Apply header color
    document.getElementById("header")?.style.setProperty("background-color", colors.header);

    // Apply button color
    document.querySelectorAll("button").forEach(button => {
      if (!button.classList.contains("color-swatch") && !button.classList.contains("notification-archive-btn")) {
        button.style.backgroundColor = colors.button;
        button.style.borderColor = colors.button;
      }
    });

    // Apply link color
    document.querySelectorAll("a").forEach(link => {
      link.style.color = colors.link;
    });

    // Apply notification active color
    document.querySelectorAll(".notification-item.active").forEach(item => {
      item.style.backgroundColor = colors.notificationActive;
    });
  });
});

function applyThemePreset(themeName) {
  const colors = themePresets[themeName];
  if (!colors) return;

  // Apply header color
  document.getElementById("header")?.style.setProperty("background-color", colors.header);

  // Apply button color
  document.querySelectorAll("button").forEach(button => {
    if (!button.classList.contains("color-swatch") && !button.classList.contains("notification-archive-btn")) {
      button.style.backgroundColor = colors.button;
      button.style.borderColor = colors.button;
    }
  });

  // Apply link color
  document.querySelectorAll("a").forEach(link => {
    link.style.color = colors.link;
  });

  // Apply notification active color
  document.querySelectorAll(".notification-item.active").forEach(item => {
    item.style.backgroundColor = colors.notificationActive;
  });
}

const profiles = [
  { name: "Joaquin Enrique Luistro", img: "./img/joaquin.jpg" },
  { name: "Paul Timothy Necasio", img: "./img/paul.jpg" },
  { name: "Garlu Victor Nepomuceno", img: "./img/garlu.jpg" },
  { name: "Kelly Allyson Vergara", img: "./img/kelly.jpg" },
  { name: "Julian Carlos Yabut", img: "./img/julian.jpg" }
];

function updateNotificationCount() {
  const countSpan = document.getElementById("notification-count");
  const count = newNotifications.length;

  if (count > 0) {
    countSpan.textContent = count > 99 ? "99+" : count;
    countSpan.style.display = "inline";
  } else {
    countSpan.style.display = "none";
  }
}

const randomProfile = profiles[Math.floor(Math.random() * profiles.length)];

document.getElementById("profile-name").textContent = randomProfile.name;
document.getElementById("profile-pic").src = randomProfile.img;
document.getElementById("debug-btn").addEventListener("click", addRandomNotification);

//–– Initialize ––//
setCurrentDate();
applyThemePreset("maroon");
renderList();
renderDropdownNotifications();
updateNotificationCount();
setInterval(setCurrentDate, 1000);