const elements = [
  {
    key: "metrics",
    letter: "M",
    name: "Metrics",
    question: "Can you quantify the business impact and value case?",
    guidance:
      "Move from vague outcomes to numbers: revenue gained, cost removed, risk reduced, or time saved.",
    prompts: [
      "What happens financially if the problem stays unsolved?",
      "Which metric will the buyer use to prove success?",
      "Can the customer confirm the calculation in their own words?"
    ]
  },
  {
    key: "economicBuyer",
    letter: "E",
    name: "Economic Buyer",
    question: "Have you met the person who can release budget and say yes?",
    guidance:
      "Do not let access be theoretical. Confirm authority, priorities, and the reason this matters now.",
    prompts: [
      "Who owns the budget and what outcome are they measured on?",
      "What would make them personally sponsor this change?",
      "How can your champion help you earn a direct meeting?"
    ]
  },
  {
    key: "decisionCriteria",
    letter: "D",
    name: "Decision Criteria",
    question: "Do you know and influence the standards used to choose?",
    guidance:
      "Criteria that you do not shape can quietly become criteria built for a competitor.",
    prompts: [
      "What are the must-have capabilities and why?",
      "Which requirements are weighted highest?",
      "Where can you introduce criteria tied to business impact?"
    ]
  },
  {
    key: "decisionProcess",
    letter: "D",
    name: "Decision Process",
    question: "Can you map every step from evaluation to signature?",
    guidance:
      "A real process has names, dates, meetings, approvals, and exit criteria.",
    prompts: [
      "What happens after this meeting?",
      "Who else reviews the recommendation?",
      "What date must each step happen to hit the close date?"
    ]
  },
  {
    key: "paperProcess",
    letter: "P",
    name: "Paper Process",
    question: "Have legal, procurement, security, and contract steps been surfaced?",
    guidance:
      "Late-stage deals often slip after verbal yes. Bring paperwork into the sales motion early.",
    prompts: [
      "Who owns procurement and legal review?",
      "Can we review redline expectations before selection?",
      "What security or vendor steps create calendar risk?"
    ]
  },
  {
    key: "identifyPain",
    letter: "I",
    name: "Identify Pain",
    question: "Is the pain specific, owned, urgent, and expensive?",
    guidance:
      "Real pain has a business consequence and an executive who cares about that consequence.",
    prompts: [
      "What is broken today and who feels it?",
      "Why is solving it urgent this quarter?",
      "How does this pain affect the buyer personally?"
    ]
  },
  {
    key: "champion",
    letter: "C",
    name: "Champion",
    question: "Do you have an internal seller with power and personal gain?",
    guidance:
      "A champion sells when you are not in the room. Test them before you bet the forecast on them.",
    prompts: [
      "What have they done that proves influence?",
      "What is their personal win?",
      "Will they coach you on people, process, and politics?"
    ]
  },
  {
    key: "competition",
    letter: "C",
    name: "Competition",
    question: "Do you know every alternative, including no decision?",
    guidance:
      "Compete against the full field: vendors, internal projects, budget delay, and the status quo.",
    prompts: [
      "Who or what are we really competing against?",
      "Why would the customer choose to do nothing?",
      "Where is our proof stronger than the alternatives?"
    ]
  }
];

const labels = ["None", "Partial", "Mostly", "Confirmed"];
const defaultState = {
  dealName: "Acme expansion",
  dealStage: "Proposal",
  closeDate: "",
  scores: Object.fromEntries(elements.map((element) => [element.key, 0])),
  notes: Object.fromEntries(elements.map((element) => [element.key, ""])),
  chat: [
    {
      role: "coach",
      text:
        "Bring me a real deal and I will pressure-test it. Start with the element that feels weakest, or ask for a next-call plan."
    }
  ]
};

let state = loadState();

const views = document.querySelectorAll(".view");
const tabs = document.querySelectorAll(".nav-tab");
const pageTitle = document.querySelector("#pageTitle");
const healthScore = document.querySelector("#healthScore");
const healthLabel = document.querySelector("#healthLabel");
const radialScore = document.querySelector("#radialScore");
const radialValue = document.querySelector("#radialValue");
const gapList = document.querySelector("#gapList");
const scoreGrid = document.querySelector("#scoreGrid");
const libraryGrid = document.querySelector("#libraryGrid");
const planList = document.querySelector("#planList");
const chatWindow = document.querySelector("#chatWindow");
const messageTemplate = document.querySelector("#messageTemplate");

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem("meddpicc-coach-state"));
    return { ...defaultState, ...stored };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem("meddpicc-coach-state", JSON.stringify(state));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function scorePercent() {
  const max = elements.length * 3;
  const total = elements.reduce((sum, element) => sum + Number(state.scores[element.key] || 0), 0);
  return Math.round((total / max) * 100);
}

function healthText(percent) {
  if (percent >= 82) return "Controlled";
  if (percent >= 62) return "Promising";
  if (percent >= 38) return "Risky";
  return "Unqualified";
}

function weakestElements(limit = 3) {
  return [...elements]
    .sort((a, b) => state.scores[a.key] - state.scores[b.key])
    .slice(0, limit);
}

function renderShell() {
  const percent = scorePercent();
  healthScore.textContent = `${percent}%`;
  healthLabel.textContent = healthText(percent);
  radialValue.textContent = `${percent}%`;
  radialScore.style.setProperty("--score", `${percent * 3.6}deg`);

  document.querySelector("#dealName").value = state.dealName;
  document.querySelector("#dealStage").value = state.dealStage;
  document.querySelector("#closeDate").value = state.closeDate;

  gapList.innerHTML = "";
  weakestElements().forEach((element) => {
    const item = document.createElement("article");
    item.className = "gap-item";
    item.innerHTML = `<strong>${element.name}</strong><p>${element.guidance}</p>`;
    gapList.append(item);
  });
}

function renderScorecard() {
  scoreGrid.innerHTML = "";
  elements.forEach((element) => {
    const item = document.createElement("article");
    item.className = "score-item";
    item.innerHTML = `
      <div class="score-title">
        <span class="letter">${element.letter}</span>
        <div>
          <strong>${element.name}</strong>
          <p>${element.question}</p>
        </div>
      </div>
      <div class="rating-row" role="group" aria-label="${element.name} score">
        ${labels
          .map(
            (label, index) =>
              `<button type="button" class="${state.scores[element.key] === index ? "active" : ""}" data-key="${element.key}" data-score="${index}">${label}</button>`
          )
          .join("")}
      </div>
      <textarea class="notes" data-note="${element.key}" placeholder="Evidence, buyer quotes, missing proof...">${escapeHtml(state.notes[element.key] || "")}</textarea>
    `;
    scoreGrid.append(item);
  });
}

function renderLibrary() {
  libraryGrid.innerHTML = "";
  elements.forEach((element) => {
    const item = document.createElement("article");
    item.className = "library-item";
    item.innerHTML = `
      <div class="score-title">
        <span class="letter">${element.letter}</span>
        <div>
          <strong>${element.name}</strong>
          <p>${element.guidance}</p>
        </div>
      </div>
      <ul>${element.prompts.map((prompt) => `<li>${escapeHtml(prompt)}</li>`).join("")}</ul>
    `;
    libraryGrid.append(item);
  });
}

function makePlan() {
  return weakestElements(5).map((element, index) => {
    const score = state.scores[element.key];
    const priority = score === 0 ? "high" : score === 1 ? "medium" : "low";
    const ask = element.prompts[index % element.prompts.length];
    return {
      priority,
      title: `${element.name}: ${labels[score]} evidence`,
      body: `${ask} Capture the answer in the notes and confirm the next owner/date before advancing ${state.dealName}.`
    };
  });
}

function renderPlan() {
  planList.innerHTML = "";
  makePlan().forEach((plan) => {
    const item = document.createElement("article");
    item.className = "plan-item";
    item.innerHTML = `
      <span class="priority ${plan.priority}">${escapeHtml(plan.priority)}</span>
      <div>
        <strong>${escapeHtml(plan.title)}</strong>
        <p>${escapeHtml(plan.body)}</p>
      </div>
    `;
    planList.append(item);
  });
}

function renderChat() {
  chatWindow.innerHTML = "";
  state.chat.forEach((message) => {
    const node = messageTemplate.content.firstElementChild.cloneNode(true);
    node.classList.toggle("user", message.role === "user");
    node.querySelector(".message-avatar").textContent = message.role === "user" ? "You" : "AI";
    node.querySelector(".message-body").innerHTML = message.text
      .split("\n")
      .map((line) => `<p>${escapeHtml(line)}</p>`)
      .join("");
    chatWindow.append(node);
  });
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function coachResponse(prompt) {
  const weakest = weakestElements(2);
  const percent = scorePercent();
  const next = weakest[0];
  const second = weakest[1];
  const lower = prompt.toLowerCase();

  if (lower.includes("economic") || lower.includes("buyer")) {
    return `Your next move is to earn direct Economic Buyer access, not just ask your champion to relay messages.\nAsk: "Who owns the business outcome and budget if this works?" Then ask your champion to help frame a meeting around ${state.dealName}'s quantified impact.\nDo not forecast this as controlled until the Economic Buyer confirms the pain, priority, and decision timing.`;
  }

  if (lower.includes("champion")) {
    return `Test the champion with action, not enthusiasm.\nAsk them to map the decision team, explain the political risk, and introduce you to one stakeholder you have not met. If they cannot or will not do that, treat Champion as unproven.\nTie their personal win to the ${next.name} gap so they have a reason to sell internally.`;
  }

  if (lower.includes("risk") || lower.includes("diagnose")) {
    return `The deal is ${healthText(percent).toLowerCase()} at ${percent}% qualified. The biggest exposed areas are ${next.name} and ${second.name}.\nYour manager will ask for proof, not confidence. Bring buyer-confirmed evidence for those two elements before you advance the stage.\nRecommended next step: schedule a mutual plan review and validate dates, owners, and exit criteria.`;
  }

  return `For ${state.dealName}, focus on ${next.name} first. ${next.guidance}\nUse this call opener: "${next.prompts[0]}"\nExit the meeting with one confirmed fact, one named owner, and one dated next step. If the customer cannot provide those, keep the opportunity out of commit.`;
}

function exportSummary() {
  const rows = elements.map((element) => {
    const note = state.notes[element.key] ? ` Notes: ${state.notes[element.key]}` : "";
    return `${element.name}: ${labels[state.scores[element.key]]}.${note}`;
  });
  const summary = [
    `Deal: ${state.dealName}`,
    `Stage: ${state.dealStage}`,
    `Close date: ${state.closeDate || "Not set"}`,
    `Qualification health: ${scorePercent()}% (${healthText(scorePercent())})`,
    "",
    ...rows,
    "",
    "Next actions:",
    ...makePlan().map((plan) => `- [${plan.priority.toUpperCase()}] ${plan.title}: ${plan.body}`)
  ].join("\n");

  navigator.clipboard.writeText(summary).then(() => {
    state.chat.push({
      role: "coach",
      text: "Summary copied to clipboard. Use it for a deal review or manager 1:1."
    });
    saveState();
    renderChat();
  });
}

function renderAll() {
  renderShell();
  renderScorecard();
  renderLibrary();
  renderPlan();
  renderChat();
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activateView(tab.dataset.view, tab.textContent.trim());
  });
});

function activateView(viewId, title) {
    tabs.forEach((item) => item.classList.remove("active"));
    views.forEach((view) => view.classList.remove("active"));
    const selectedTab = document.querySelector(`.nav-tab[data-view="${viewId}"]`);
    const selectedView = document.querySelector(`#${viewId}`);
    if (!selectedTab || !selectedView) return;
    selectedTab.classList.add("active");
    selectedView.classList.add("active");
    pageTitle.textContent = title || selectedTab.textContent.trim();
}

document.querySelectorAll("[data-jump]").forEach((button) => {
  button.addEventListener("click", () => {
    const viewId = button.dataset.jump;
    const selectedTab = document.querySelector(`.nav-tab[data-view="${viewId}"]`);
    activateView(viewId, selectedTab?.textContent.trim());
    document.querySelector("#workspace").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-lang]").forEach((languageButton) => {
      languageButton.classList.toggle("active", languageButton === button);
      languageButton.setAttribute("aria-pressed", String(languageButton === button));
    });
  });
});

document.querySelector("#dealName").addEventListener("input", (event) => {
  state.dealName = event.target.value || "Untitled deal";
  saveState();
});

document.querySelector("#dealStage").addEventListener("change", (event) => {
  state.dealStage = event.target.value;
  saveState();
});

document.querySelector("#closeDate").addEventListener("input", (event) => {
  state.closeDate = event.target.value;
  saveState();
});

scoreGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-score]");
  if (!button) return;
  state.scores[button.dataset.key] = Number(button.dataset.score);
  saveState();
  renderAll();
});

scoreGrid.addEventListener("input", (event) => {
  if (!event.target.matches("[data-note]")) return;
  state.notes[event.target.dataset.note] = event.target.value;
  saveState();
});

document.querySelector("#coachForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#coachPrompt");
  const prompt = input.value.trim();
  if (!prompt) return;
  state.chat.push({ role: "user", text: prompt });
  state.chat.push({ role: "coach", text: coachResponse(prompt) });
  input.value = "";
  saveState();
  renderChat();
});

document.querySelectorAll("[data-prompt]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#coachPrompt").value = button.dataset.prompt;
    document.querySelector("#coachForm").requestSubmit();
  });
});

document.querySelector("#clearChat").addEventListener("click", () => {
  state.chat = structuredClone(defaultState.chat);
  saveState();
  renderChat();
});

document.querySelector("#resetDeal").addEventListener("click", () => {
  state = structuredClone(defaultState);
  localStorage.removeItem("meddpicc-coach-state");
  renderAll();
});

document.querySelector("#regeneratePlan").addEventListener("click", renderPlan);
document.querySelector("#exportSummary").addEventListener("click", exportSummary);

if (!state.closeDate) {
  const date = new Date();
  date.setDate(date.getDate() + 30);
  state.closeDate = date.toISOString().slice(0, 10);
}

renderAll();
