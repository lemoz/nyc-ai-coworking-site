const projects = [
  {
    id: "imposter-artist",
    name: "Imposter Artist",
    owner: "Advik Lall",
    stage: "Prototype",
    status: "confirmed",
    theme: "AI games",
    description:
      "A hidden-role drawing game where frontier models reason, bluff, and reveal how they play against each other.",
    need: "Design feedback, replay clips, people who care about evals and game mechanics.",
    tags: ["demo", "agents", "evals", "consumer"],
    image: "tmp-demo-review/advik-late-01.png",
    x: 640,
    y: 250
  },
  {
    id: "got2eat",
    name: "Got2Eat",
    owner: "Jaison Jayaraj",
    stage: "Share packet sent",
    status: "likely",
    theme: "Consumer AI",
    description:
      "Food decision and discovery workflow with enough product surface to become a useful live-room demo.",
    need: "Sharper user story, GTM feedback, and consumer-product operators.",
    tags: ["demo", "consumer", "gtm"],
    image: "",
    x: 330,
    y: 210
  },
  {
    id: "rem",
    name: "Rem",
    owner: "Josh Kim",
    stage: "Share packet sent",
    status: "likely",
    theme: "Personal AI",
    description:
      "Personal workflow product with a presenter package already sent and a profile ready to enrich.",
    need: "Clearer demo goal, ideal customer feedback, and product positioning.",
    tags: ["demo", "personal ai", "workflow"],
    image: "",
    x: 845,
    y: 210
  },
  {
    id: "grantsville",
    name: "Grantsville",
    owner: "Jeremiah Richie",
    stage: "Field use",
    status: "confirmed",
    theme: "Healthcare ops",
    description:
      "Operational AI in a high-friction domain, useful for showing practical adoption rather than only lab demos.",
    need: "Workflow buyers, compliance-aware operators, and implementation feedback.",
    tags: ["healthcare ops", "enterprise", "workflow"],
    image: "",
    x: 970,
    y: 455
  },
  {
    id: "somo",
    name: "Somo",
    owner: "Brian Cheng",
    stage: "Users",
    status: "alternate",
    theme: "Vertical workflow AI",
    description:
      "A vertical workflow AI project that belongs in the network map even if the demo slot changes.",
    need: "Customer intros and practical feedback from operators in the room.",
    tags: ["vertical ai", "workflow", "operators"],
    image: "",
    x: 225,
    y: 455
  },
  {
    id: "green-compute",
    name: "Green AI Compute",
    owner: "Drew Miller",
    stage: "Needs context",
    status: "needs-context",
    theme: "Infrastructure",
    description:
      "Infrastructure-adjacent opportunity that needs a tighter project profile before it should be promoted.",
    need: "A one-paragraph description, links, and a clear ask from the network.",
    tags: ["infrastructure", "compute", "needs context"],
    image: "",
    x: 520,
    y: 570
  },
  {
    id: "codify-opennyc",
    name: "Codify / OpenNYC",
    owner: "Arion Hardison",
    stage: "Overflow demo candidate",
    status: "needs-context",
    theme: "Civic AI",
    description:
      "A civic and open-data oriented demo pitch that fits overflow handling and future-demo follow-up.",
    need: "Demo boundaries, strongest use case, and the right civic/operator feedback.",
    tags: ["civic ai", "demo", "needs context"],
    image: "",
    x: 995,
    y: 610
  },
  {
    id: "arf-ai",
    name: "ARF AI",
    owner: "Juan Petter",
    stage: "Future demo interest",
    status: "alternate",
    theme: "Applied AI",
    description:
      "Future-demo interest from an attendee who was a participant for the current event cycle.",
    need: "Clarify what should be shown and when it fits a future room.",
    tags: ["future demo", "applied ai", "needs context"],
    image: "",
    x: 160,
    y: 615
  }
];

const people = [
  {
    id: "advik-lall",
    name: "Advik Lall",
    title: "Builder, Imposter Artist",
    projectIds: ["imposter-artist"],
    focus: "AI games, model behavior, replayable demos",
    needs: "Design feedback and people who can pressure-test the game loop.",
    canHelp: "Interactive demos, model UX, playful eval surfaces.",
    followUp: "Capture demo clip permission and ask for the sharpest replay segment.",
    tags: ["demo", "agents", "evals"],
    x: 665,
    y: 110
  },
  {
    id: "jaison-jayaraj",
    name: "Jaison Jayaraj",
    title: "Builder, Got2Eat",
    projectIds: ["got2eat"],
    focus: "Consumer AI and food discovery",
    needs: "Consumer GTM feedback and demo framing.",
    canHelp: "Early consumer-product iteration.",
    followUp: "Presenter package sent; track next reply and strongest user story.",
    tags: ["consumer", "gtm"],
    x: 240,
    y: 120
  },
  {
    id: "josh-kim",
    name: "Josh Kim",
    title: "Builder, Rem",
    projectIds: ["rem"],
    focus: "Personal AI workflows",
    needs: "Positioning, workflow critique, and next-user targets.",
    canHelp: "Product thinking around personal workflow tools.",
    followUp: "Package sent; keep Rem profile attached to the right demo label.",
    tags: ["workflow", "personal ai"],
    x: 930,
    y: 120
  },
  {
    id: "brian-cheng",
    name: "Brian Cheng",
    title: "Builder, Somo",
    projectIds: ["somo"],
    focus: "Vertical workflow AI",
    needs: "Operator intros and user-discovery feedback.",
    canHelp: "Applied AI workflows and customer discovery.",
    followUp: "Keep as a strong alternate and profile candidate.",
    tags: ["vertical ai", "operators"],
    x: 110,
    y: 360
  },
  {
    id: "jeremiah-richie",
    name: "Jeremiah Richie",
    title: "Builder, Grantsville",
    projectIds: ["grantsville"],
    focus: "Healthcare operations",
    needs: "Implementation feedback and domain-specific intros.",
    canHelp: "Real-world adoption context for healthcare ops.",
    followUp: "Confirm demo boundaries and sensitive-screen constraints.",
    tags: ["healthcare ops", "enterprise"],
    x: 1090,
    y: 360
  },
  {
    id: "drew-miller",
    name: "Drew Miller",
    title: "Builder, Green AI Compute",
    projectIds: ["green-compute"],
    focus: "AI infrastructure and compute",
    needs: "Tighter description and high-signal infrastructure intros.",
    canHelp: "Compute and sustainability context.",
    followUp: "Request a short profile before featuring publicly.",
    tags: ["infrastructure", "compute"],
    x: 500,
    y: 705
  },
  {
    id: "arion-hardison",
    name: "Arion Hardison",
    title: "Builder, Codify / OpenNYC",
    projectIds: ["codify-opennyc"],
    focus: "Civic AI, open data, and demoable public workflows",
    needs: "Overflow-demo handling, civic data feedback, and clear demo boundaries.",
    canHelp: "Applied civic-data perspective and public-sector workflow context.",
    followUp: "Package next after Jaison; keep overflow language explicit.",
    tags: ["civic ai", "future demo"],
    x: 1090,
    y: 690
  },
  {
    id: "juan-petter",
    name: "Juan Petter",
    title: "Attendee, future ARF AI demo interest",
    projectIds: ["arf-ai"],
    focus: "Future demo interest and participant follow-up",
    needs: "Right next event slot and a clearer demo pitch.",
    canHelp: "Participant feedback from the room.",
    followUp: "Treat current reply as participant yes plus future-demo interest.",
    tags: ["future demo", "participant"],
    x: 90,
    y: 700
  }
];

const asks = [
  {
    id: "feedback",
    name: "Pitch feedback",
    kind: "ask",
    description: "Founder-useful feedback from the live room and private review packets.",
    tags: ["feedback", "demo"],
    x: 605,
    y: 485
  },
  {
    id: "users",
    name: "Early users",
    kind: "ask",
    description: "People in or adjacent to the room who can try the product quickly.",
    tags: ["users", "gtm"],
    x: 405,
    y: 390
  },
  {
    id: "intros",
    name: "Useful intros",
    kind: "ask",
    description: "Specific customer, operator, funder, venue, or collaborator introductions.",
    tags: ["intros", "network"],
    x: 800,
    y: 390
  },
  {
    id: "gtm-feedback",
    name: "GTM feedback",
    kind: "ask",
    description: "Messaging, buyer, and distribution feedback for projects close to users.",
    tags: ["gtm", "users"],
    x: 365,
    y: 610
  },
  {
    id: "media-packets",
    name: "Demo media packets",
    kind: "ask",
    description: "Video clips, notes, and founder-feedback packages created after demos.",
    tags: ["video", "follow-up"],
    x: 785,
    y: 610
  },
  {
    id: "profile-consent",
    name: "Profile consent",
    kind: "ask",
    description: "Public builder profiles are opt-in and confirmed by email before publishing.",
    tags: ["privacy", "profiles", "approval"],
    x: 1005,
    y: 320
  }
];

const meetupNodes = [
  {
    id: "nyc-ai-room",
    name: "NYC AI Co-working",
    kind: "meetup",
    description: "Recurring NYC co-working, demo nights, opt-in builder profiles, and useful intros for people shipping AI projects.",
    tags: ["meetup", "monthly", "opt-in profiles", "community"],
    x: 600,
    y: 370
  },
  {
    id: "live-coworking",
    name: "Planned live co-working",
    kind: "meetup",
    description:
      "A planned remote mode where builders can enter the network while working, share lightweight session context, and get useful help without publishing by default.",
    tags: ["remote", "presence", "opt-in", "live"],
    x: 260,
    y: 330
  },
  {
    id: "demo-night",
    name: "Demo night",
    kind: "meetup",
    description: "The visible spike: 4-6 real demos, a few alternates, and enough context to follow up well.",
    tags: ["demos", "event"],
    x: 600,
    y: 170
  },
  {
    id: "founder-feedback",
    name: "Founder feedback",
    kind: "meetup",
    description: "Private pitch-plus-Q&A review packets that turn event footage into useful founder feedback.",
    tags: ["feedback", "video", "follow-up"],
    x: 765,
    y: 520
  },
  {
    id: "telegram-group",
    name: "Telegram group",
    kind: "meetup",
    description: "The between-event surface for asks, demos, launches, hiring, and useful local AI-builder links.",
    tags: ["community", "between events"],
    x: 440,
    y: 520
  }
];

const futureNodes = [
  {
    id: "shenzhen-node",
    name: "Shenzhen node",
    kind: "future",
    description:
      "A real future node in the network: Shenzhen is visible as coming soon, but New York remains the active center for now.",
    tags: ["shenzhen", "future node", "coming soon"],
    x: 1060,
    y: 70
  }
];

const statusLabels = {
  confirmed: "Confirmed",
  likely: "Likely",
  alternate: "Alternate",
  "needs-context": "Needs context"
};

const filters = [
  "All",
  "Demo",
  "Agents",
  "Consumer",
  "Workflow",
  "Healthcare ops",
  "Civic AI",
  "Infrastructure",
  "Needs context"
];

const links = [
  ["nyc-ai-room", "demo-night", "meetup", true],
  ["nyc-ai-room", "live-coworking", "remote co-working", true],
  ["nyc-ai-room", "telegram-group", "community", true],
  ["nyc-ai-room", "founder-feedback", "follow-up", true],
  ["nyc-ai-room", "shenzhen-node", "coming soon", false],
  ["live-coworking", "profile-consent", "privacy gate", true],
  ["live-coworking", "intros", "mid-work intros", true],
  ["live-coworking", "users", "active testers", false],
  ["profile-consent", "intros", "approved context", true],
  ["intros", "nyc-ai-room", "network request", false],
  ["founder-feedback", "media-packets", "video", true],
  ["profile-consent", "founder-feedback", "publish approval", false],
  ["telegram-group", "users", "between-event asks", false],
  ["telegram-group", "intros", "warm intros", false],
  ["demo-night", "imposter-artist", "demo", true],
  ["demo-night", "got2eat", "demo", true],
  ["demo-night", "rem", "demo", true],
  ["demo-night", "grantsville", "demo", true],
  ["demo-night", "somo", "alternate", false],
  ["demo-night", "codify-opennyc", "overflow", false],
  ["demo-night", "arf-ai", "future", false],
  ["advik-lall", "imposter-artist", "builds", true],
  ["jaison-jayaraj", "got2eat", "builds", true],
  ["josh-kim", "rem", "builds", true],
  ["brian-cheng", "somo", "builds", true],
  ["jeremiah-richie", "grantsville", "builds", true],
  ["drew-miller", "green-compute", "builds", true],
  ["arion-hardison", "codify-opennyc", "builds", true],
  ["juan-petter", "arf-ai", "future demo", true],
  ["imposter-artist", "feedback", "wants", true],
  ["got2eat", "users", "wants", true],
  ["got2eat", "gtm-feedback", "wants", true],
  ["rem", "feedback", "wants", false],
  ["somo", "users", "wants", false],
  ["somo", "intros", "wants", true],
  ["grantsville", "intros", "wants", true],
  ["green-compute", "intros", "wants", false],
  ["green-compute", "feedback", "wants", true],
  ["codify-opennyc", "feedback", "wants", true],
  ["codify-opennyc", "intros", "wants", false],
  ["arf-ai", "feedback", "wants", true],
  ["feedback", "founder-feedback", "becomes", true],
  ["media-packets", "imposter-artist", "source", false],
  ["media-packets", "got2eat", "source", false],
  ["media-packets", "rem", "source", false]
].map(([source, target, label, strong]) => ({ source, target, label, strong }));

const pathPrompts = [
  {
    id: "advik-feedback",
    label: "Advik to feedback packet",
    path: ["advik-lall", "imposter-artist", "feedback", "founder-feedback"],
    note: "This should become a clean demo clip plus concrete game-loop feedback."
  },
  {
    id: "jaison-users",
    label: "Jaison to early users",
    path: ["jaison-jayaraj", "got2eat", "users", "telegram-group", "nyc-ai-room"],
    note: "The room should help find the first people who will actually try the workflow."
  },
  {
    id: "arion-demo",
    label: "Arion to next demo slot",
    path: ["arion-hardison", "codify-opennyc", "demo-night", "nyc-ai-room"],
    note: "Overflow interest becomes useful only if the next slot and pitch boundary are clear."
  },
  {
    id: "drew-intros",
    label: "Drew to infra intros",
    path: ["drew-miller", "green-compute", "intros", "nyc-ai-room"],
    note: "Infrastructure projects need fewer generic attendees and more specific high-signal intros."
  },
  {
    id: "live-intro",
    label: "Planned live session to intro",
    path: ["live-coworking", "profile-consent", "intros", "nyc-ai-room"],
    note: "Online presence becomes valuable only when it stays opt-in and turns current work into timely help."
  },
  {
    id: "nyc-shenzhen",
    label: "NYC to Shenzhen",
    path: ["nyc-ai-room", "shenzhen-node"],
    note: "Shenzhen should read as a real future expansion node, not a fake venue pin or side decoration."
  }
];

const graphBaseViewBox = { x: 0, y: 0, width: 1200, height: 760 };
const graphMobileViewBox = { x: 260, y: -220, width: 760, height: 650 };

const graphLayout = {
  "nyc-ai-room": [690, 365],
  "demo-night": [690, 160],
  "live-coworking": [420, 355],
  "telegram-group": [505, 565],
  "founder-feedback": [760, 565],
  "shenzhen-node": [1065, 125],
  "imposter-artist": [790, 255],
  got2eat: [500, 225],
  rem: [825, 300],
  grantsville: [805, 445],
  somo: [315, 470],
  "green-compute": [585, 650],
  "codify-opennyc": [790, 665],
  "arf-ai": [235, 645],
  "advik-lall": [830, 92],
  "jaison-jayaraj": [410, 112],
  "josh-kim": [1030, 198],
  "brian-cheng": [160, 445],
  "jeremiah-richie": [1110, 390],
  "drew-miller": [520, 720],
  "arion-hardison": [1088, 700],
  "juan-petter": [120, 662],
  feedback: [705, 510],
  users: [440, 300],
  intros: [935, 445],
  "gtm-feedback": [385, 610],
  "media-packets": [805, 625],
  "profile-consent": [285, 250]
};

const defaultAtlasIds = new Set([
  "nyc-ai-room",
  "demo-night",
  "live-coworking",
  "telegram-group",
  "founder-feedback",
  "shenzhen-node",
  ...projects.filter((project) => ["confirmed", "likely"].includes(project.status)).map((project) => project.id)
]);

const state = {
  filter: "All",
  mode: "all",
  query: "",
  selectedId: "nyc-ai-room",
  activePathId: null,
  graphViewBox: null,
  graphUserMoved: false
};

const projectGrid = document.querySelector("#projectGrid");
const peopleGrid = document.querySelector("#peopleGrid");
const profilePanel = document.querySelector("#profilePanel");
const networkGraph = document.querySelector("#networkGraph");
const filterChips = document.querySelector("#filterChips");
const searchInput = document.querySelector("#searchInput");
const pipelineColumns = document.querySelector("#pipelineColumns");
const pathPromptsEl = document.querySelector("#pathPrompts");
const activePathEl = document.querySelector("#activePath");
const modeButtons = Array.from(document.querySelectorAll(".mode"));

function normalize(value) {
  return String(value || "").toLowerCase();
}

function allNodes() {
  return [
    ...meetupNodes.map((item) => ({ ...item, nodeType: "meetup" })),
    ...futureNodes.map((item) => ({ ...item, nodeType: "future" })),
    ...projects.map((item) => ({ ...item, nodeType: "project" })),
    ...people.map((item) => ({ ...item, nodeType: "person" })),
    ...asks.map((item) => ({ ...item, nodeType: "ask" }))
  ];
}

function nodeMap() {
  return new Map(allNodes().map((node) => [node.id, node]));
}

function nodeName(id) {
  return nodeMap().get(id)?.name || id;
}

function matchesText(item) {
  const haystack = normalize(
    [
      item.name,
      item.owner,
      item.title,
      item.stage,
      item.status,
      item.theme,
      item.description,
      item.need,
      item.needs,
      item.canHelp,
      item.focus,
      item.followUp,
      ...(item.tags || [])
    ].join(" ")
  );
  return !state.query || haystack.includes(normalize(state.query));
}

function matchesFilter(item) {
  if (state.filter === "All") return true;
  const token = normalize(state.filter);
  return normalize([item.status, item.theme, ...(item.tags || [])].join(" ")).includes(token);
}

function visibleProjects() {
  if (state.mode === "people") return [];
  return projects.filter((project) => matchesText(project) && matchesFilter(project));
}

function visiblePeople() {
  if (state.mode === "projects") return [];
  return people.filter((person) => {
    const linkedProjects = person.projectIds.map((id) => projects.find((project) => project.id === id));
    return (
      matchesText(person) &&
      (matchesFilter(person) || linkedProjects.some((project) => project && matchesFilter(project)))
    );
  });
}

function activePath() {
  return pathPrompts.find((item) => item.id === state.activePathId);
}

function activePathSet() {
  return new Set(activePath()?.path || []);
}

function activePathEdges() {
  const path = activePath()?.path || [];
  const edges = new Set();
  for (let index = 0; index < path.length - 1; index += 1) {
    edges.add(`${path[index]}:${path[index + 1]}`);
    edges.add(`${path[index + 1]}:${path[index]}`);
  }
  return edges;
}

function renderFilters() {
  filterChips.innerHTML = filters
    .map(
      (filter) =>
        `<button class="chip ${state.filter === filter ? "is-active" : ""}" type="button" data-filter="${filter}">${filter}</button>`
    )
    .join("");
}

function projectCard(project) {
  const image = project.image
    ? `<img src="${project.image}" alt="${project.name} demo screenshot" />`
    : `<div class="signal-card" aria-hidden="true">
        <div class="signal-row"><span class="signal-node"></span><span class="signal-line"></span></div>
        <div class="signal-row"><span class="signal-node"></span><span class="signal-line"></span></div>
        <div class="signal-row"><span class="signal-node"></span><span class="signal-line"></span></div>
      </div>`;

  return `
    <article class="project-card ${project.image ? "is-featured" : ""}" data-id="${project.id}">
      <div class="project-media ${project.image ? "" : "no-image"}">${image}</div>
      <div class="project-body">
        <div class="card-topline">
          <span class="status-pill ${project.status}">${statusLabels[project.status]}</span>
          <span class="tag">${project.theme}</span>
        </div>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div class="project-meta">
          <div class="meta-row"><span>Builder</span><strong>${project.owner}</strong></div>
          <div class="meta-row"><span>Stage</span><strong>${project.stage}</strong></div>
          <div class="meta-row"><span>Need</span><strong>${project.need}</strong></div>
        </div>
        <button class="card-btn" type="button" data-select="${project.id}" data-focus-profile="true">Open profile</button>
      </div>
    </article>`;
}

function personCard(person) {
  const initials = person.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
  const projectNames = person.projectIds
    .map((id) => projects.find((project) => project.id === id)?.name)
    .filter(Boolean)
    .join(", ");

  return `
    <article class="person-card" data-id="${person.id}">
      <div class="person-head">
        <span class="avatar" aria-hidden="true">${initials}</span>
        <div>
          <h3>${person.name}</h3>
          <small>${person.title}</small>
        </div>
      </div>
      <p>${person.focus}</p>
      <div class="project-meta">
        <div class="meta-row"><span>Project</span><strong>${projectNames}</strong></div>
        <div class="meta-row"><span>Needs</span><strong>${person.needs}</strong></div>
        <div class="meta-row"><span>Follow-up</span><strong>${person.followUp}</strong></div>
      </div>
      <button class="card-btn" type="button" data-select="${person.id}" data-focus-profile="true">Open profile</button>
    </article>`;
}

function renderCards() {
  const projectItems = visibleProjects();
  const peopleItems = visiblePeople();

  projectGrid.innerHTML = projectItems.length
    ? projectItems.map(projectCard).join("")
    : `<p class="empty-state">No project profiles match the current view.</p>`;

  peopleGrid.innerHTML = peopleItems.length
    ? peopleItems.map(personCard).join("")
    : `<p class="empty-state">No people profiles match the current view.</p>`;
}

function detailForSelected() {
  const project = projects.find((item) => item.id === state.selectedId);
  if (project) {
    const owner = people.find((person) => person.projectIds.includes(project.id));
    return {
      type: "Project",
      title: project.name,
      subtitle: project.description,
      tags: project.tags,
      actions: [
        ["Show builder", owner?.id],
        ["Highlight feedback path", "feedback"]
      ].filter((item) => item[1]),
      rows: [
        ["Builder", project.owner],
        ["Useful next move", project.need],
        ["Stage", project.stage],
        ["Demo status", statusLabels[project.status]],
        ["Theme", project.theme],
        ["Network role", owner ? owner.focus : "Add builder profile"],
        ["Publishing rule", "Project and profile details should be confirmed by the builder before public launch."]
      ]
    };
  }

  const person = people.find((item) => item.id === state.selectedId);
  if (person) {
    const linkedProjects = person.projectIds
      .map((id) => projects.find((projectItem) => projectItem.id === id)?.name)
      .filter(Boolean)
      .join(", ");
    return {
      type: "Person",
      title: person.name,
      subtitle: person.title,
      tags: person.tags,
      actions: person.projectIds.map((projectId) => ["Show project", projectId]),
      rows: [
        ["Focus", person.focus],
        ["Project", linkedProjects],
        ["Needs", person.needs],
        ["Can help with", person.canHelp],
        ["Next follow-up", person.followUp],
        ["Profile state", "Private until the builder approves a public profile by email."]
      ]
    };
  }

  const ask = asks.find((item) => item.id === state.selectedId);
  if (ask) {
    return {
      type: "Ask",
      title: ask.name,
      subtitle: ask.description,
      tags: ask.tags,
      actions: [["Show room", "nyc-ai-room"]],
      rows: [
        ["Use", "Connect this ask back to a project and a person."],
        ["Why it matters", "The meetup is useful only if asks become concrete follow-ups."]
      ]
    };
  }

  const meetup = meetupNodes.find((item) => item.id === state.selectedId);
  if (meetup) {
      const liveRows =
      meetup.id === "live-coworking"
        ? [
            ["Mode", "Planned optional remote co-working session"],
            ["Signal", "What you are working on, current blocker, and useful help"],
            ["Privacy default", "Presence and session context are opt-in; public profile requires approval"]
          ]
        : [
            ["Cadence", "Regular monthly co-working and demos"],
            ["Builder value", "Sharper feedback, useful intros, and visible demo follow-up"],
            ["Success signal", "Useful intros, better demos, and follow-up records after each event"]
          ];
    return {
      type: "Meetup surface",
      title: meetup.name,
      subtitle: meetup.description,
      tags: meetup.tags,
      actions: [
        ["Show demos", "demo-night"],
        ["Show follow-up", "founder-feedback"]
      ],
      rows: liveRows
    };
  }

  const future = futureNodes.find((item) => item.id === state.selectedId);
  if (future) {
    return {
      type: "Future node",
      title: future.name,
      subtitle: future.description,
      tags: future.tags,
      actions: [["Show NYC center", "nyc-ai-room"]],
      rows: [
        ["State", "Coming soon"],
        ["Role", "Future expansion node in the same builder graph"],
        ["Current emphasis", "Keep New York active and make Shenzhen visible without pretending it is launched"]
      ]
    };
  }

  return null;
}

function renderDetail() {
  const detail = detailForSelected();
  if (!detail) return;
  const rowLimit = detail.type === "Project" ? 2 : detail.type === "Person" ? 3 : 2;
  const visibleRows = detail.rows.slice(0, rowLimit);

  profilePanel.innerHTML = `
    <p class="eyebrow">${detail.type}</p>
    <h2>${detail.title}</h2>
    <p>${detail.subtitle}</p>
    <div class="profile-actions">
      ${detail.actions
        .map(([label, id]) => `<button class="profile-action" type="button" data-select="${id}">${label}</button>`)
        .join("")}
    </div>
    <div class="tag-list">${detail.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
    <div class="detail-stack">
      ${visibleRows
        .map(([label, value]) => `<div class="detail-item"><span>${label}</span><strong>${value}</strong></div>`)
        .join("")}
    </div>`;
}

function defaultGraphViewBox() {
  const mobile = window.matchMedia("(max-width: 720px)").matches;
  return { ...(mobile ? graphMobileViewBox : graphBaseViewBox) };
}

function ensureGraphViewBox() {
  if (!state.graphViewBox) state.graphViewBox = defaultGraphViewBox();
  return state.graphViewBox;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function clampGraphViewBox(viewBox) {
  const width = clamp(viewBox.width, 420, graphBaseViewBox.width);
  const height = clamp(viewBox.height, 300, graphBaseViewBox.height);
  const marginX = 90;
  const marginY = 80;
  const minX = graphBaseViewBox.x - marginX;
  const minY = graphBaseViewBox.y - marginY;
  const maxX = graphBaseViewBox.x + graphBaseViewBox.width - width + marginX;
  const maxY = graphBaseViewBox.y + graphBaseViewBox.height - height + marginY;

  return {
    x: clamp(viewBox.x, minX, maxX),
    y: clamp(viewBox.y, minY, maxY),
    width,
    height
  };
}

function setGraphViewBox(viewBox, userMoved = true) {
  state.graphViewBox = clampGraphViewBox(viewBox);
  state.graphUserMoved = userMoved;
  renderGraph();
}

function resetGraphView() {
  setGraphViewBox(defaultGraphViewBox(), false);
}

function zoomGraph(factor, event) {
  const viewBox = ensureGraphViewBox();
  const rect = networkGraph.getBoundingClientRect();
  const anchorX = event && rect.width ? clamp((event.clientX - rect.left) / rect.width, 0, 1) : 0.5;
  const anchorY = event && rect.height ? clamp((event.clientY - rect.top) / rect.height, 0, 1) : 0.5;
  const nextWidth = viewBox.width * factor;
  const nextHeight = viewBox.height * factor;
  const anchorGraphX = viewBox.x + viewBox.width * anchorX;
  const anchorGraphY = viewBox.y + viewBox.height * anchorY;

  setGraphViewBox({
    x: anchorGraphX - nextWidth * anchorX,
    y: anchorGraphY - nextHeight * anchorY,
    width: nextWidth,
    height: nextHeight
  });
}

function positionedNode(node) {
  const position = graphLayout[node.id];
  if (!position) return node;
  return { ...node, x: position[0], y: position[1] };
}

function positionedNodes() {
  return allNodes().map(positionedNode);
}

function focusGraphOnNode(id, render = true) {
  const node = positionedNodes().find((item) => item.id === id);
  if (!node) return;
  const current = ensureGraphViewBox();
  const mobile = window.matchMedia("(max-width: 720px)").matches;
  const width = Math.min(current.width, mobile ? 620 : 760);
  const height = Math.min(current.height, mobile ? 500 : 500);

  state.graphViewBox = clampGraphViewBox({
    x: node.x - width * 0.5,
    y: node.y - height * 0.52,
    width,
    height
  });
  state.graphUserMoved = true;
  if (render) renderGraph();
}

function linkedIdsFor(id) {
  const ids = new Set([id]);
  links.forEach((link) => {
    if (link.source === id) ids.add(link.target);
    if (link.target === id) ids.add(link.source);
  });
  return ids;
}

function neighborhoodIdsFor(id) {
  const ids = linkedIdsFor(id);
  ids.add("nyc-ai-room");
  return ids;
}

function nodeVisible(node) {
  if (node.id === "nyc-ai-room") return true;
  if (node.nodeType === "ask") return state.mode === "all" && Boolean(state.query);
  if (node.nodeType === "meetup" || node.nodeType === "future") return state.mode === "all";
  if (node.nodeType === "project") return visibleProjects().some((project) => project.id === node.id);
  return (state.mode === "people" || Boolean(state.query)) && visiblePeople().some((person) => person.id === node.id);
}

function visibleGraphIds(nodes) {
  const pathNodes = activePathSet();
  if (pathNodes.size) return new Set([...pathNodes, "nyc-ai-room"]);

  if (state.selectedId !== "nyc-ai-room") {
    return neighborhoodIdsFor(state.selectedId);
  }

  const ids = new Set();
  nodes.forEach((node) => {
    if (
      nodeVisible(node) &&
      (node.nodeType !== "project" || state.mode !== "all" || state.query || state.filter !== "All" || defaultAtlasIds.has(node.id))
    ) {
      ids.add(node.id);
      return;
    }
    if (defaultAtlasIds.has(node.id) && node.nodeType !== "project") ids.add(node.id);
  });
  ids.add("nyc-ai-room");
  return ids;
}

function linkIsVisible(link, visibleIds, pathEdges) {
  if (!visibleIds.has(link.source) || !visibleIds.has(link.target)) return false;
  if (pathEdges.size) return pathEdges.has(`${link.source}:${link.target}`);
  if (link.source === state.selectedId || link.target === state.selectedId) return true;
  if (state.selectedId === "nyc-ai-room") {
    return (
      link.strong &&
      (link.source === "nyc-ai-room" ||
        link.target === "nyc-ai-room" ||
        link.source === "demo-night" ||
        link.target === "demo-night")
    );
  }
  return link.strong || link.source === "nyc-ai-room" || link.target === "nyc-ai-room";
}

function nodeSubtitle(node) {
  if (node.nodeType === "project") return node.stage;
  if (node.nodeType === "person") return "builder";
  if (node.nodeType === "ask") return "ask";
  if (node.nodeType === "future") return "coming soon";
  return "meetup";
}

function labelLines(label) {
  if (label.length <= 16) return [label];
  const words = label.split(" ");
  const lines = [];
  let current = "";

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (next.length > 16 && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  });

  if (current) lines.push(current);
  return lines.slice(0, 2);
}

function nodeLabelMarkup(node, labelY) {
  const lines = labelLines(node.name);
  const titleLines = lines
    .map((line, index) => `<tspan x="${node.x}" dy="${index === 0 ? 0 : 16}">${line}</tspan>`)
    .join("");
  const subY = labelY + lines.length * 16 + 1;

  return `<text class="node-label" x="${node.x}" y="${labelY}" text-anchor="middle">${titleLines}</text>
    <text class="sub-label" x="${node.x}" y="${subY}" text-anchor="middle">${nodeSubtitle(node)}</text>`;
}

function nodeShapeMarkup(node, fill) {
  if (node.id === "nyc-ai-room") {
    return `<circle class="node-shape" cx="${node.x}" cy="${node.y}" r="62" fill="rgba(6, 12, 16, 0.96)" />
      <circle class="core-ring" cx="${node.x}" cy="${node.y}" r="42" fill="none" />`;
  }

  if (node.nodeType === "project") {
    return `<rect class="node-shape" x="${node.x - 35}" y="${node.y - 27}" width="70" height="54" rx="11" fill="${fill}" />`;
  }

  if (node.nodeType === "ask") {
    return `<rect class="node-shape" x="${node.x - 21}" y="${node.y - 21}" width="42" height="42" rx="8" transform="rotate(45 ${node.x} ${node.y})" fill="${fill}" />`;
  }

  if (node.nodeType === "meetup") {
    return `<rect class="node-shape" x="${node.x - 43}" y="${node.y - 25}" width="86" height="50" rx="17" fill="${fill}" />`;
  }

  const radius = node.nodeType === "future" ? 26 : 27;
  return `<circle class="node-shape" cx="${node.x}" cy="${node.y}" r="${radius}" fill="${fill}" />`;
}

function nodeHitRadius(node) {
  if (node.id === "nyc-ai-room") return 78;
  if (node.nodeType === "project" || node.nodeType === "meetup") return 48;
  return 42;
}

function nodeLabelY(node) {
  if (node.id === "nyc-ai-room") return node.y - 6;
  if (node.nodeType === "project") return node.y + 48;
  if (node.nodeType === "meetup") return node.y + 47;
  if (node.nodeType === "ask") return node.y + 45;
  return node.y + 45;
}

function nodeIsLabeled(node, neighborIds, pathNodes) {
  if (node.id === "nyc-ai-room") return true;
  if (node.id === state.selectedId || neighborIds.has(node.id) || pathNodes.has(node.id)) return true;
  if (state.query && nodeVisible(node)) return true;
  return state.selectedId === "nyc-ai-room" && defaultAtlasIds.has(node.id) && node.nodeType !== "person" && node.nodeType !== "ask";
}

function renderGraph() {
  const nodes = positionedNodes();
  const map = new Map(nodes.map((node) => [node.id, node]));
  const viewBox = ensureGraphViewBox();
  networkGraph.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);

  const visibleIds = visibleGraphIds(nodes);
  const neighborIds = neighborhoodIdsFor(state.selectedId);
  const pathNodes = activePathSet();
  const pathEdges = activePathEdges();
  const edgeLabels = [];

  const linkMarkup = links
    .map((link) => {
      const source = map.get(link.source);
      const target = map.get(link.target);
      if (!source || !target) return "";
      if (!linkIsVisible(link, visibleIds, pathEdges)) return "";
      const inPath = pathEdges.has(`${source.id}:${target.id}`);
      const direct = link.source === state.selectedId || link.target === state.selectedId;
      const muted = pathNodes.size > 0 && !inPath;
      const labelEdge = !muted && (inPath || direct);
      if (labelEdge) {
        edgeLabels.push(
          `<text class="edge-label ${inPath ? "is-path" : ""}" x="${(source.x + target.x) / 2}" y="${(source.y + target.y) / 2 - 7}" text-anchor="middle">${link.label}</text>`
        );
      }
      return `<line class="graph-link ${link.strong ? "is-strong" : ""} ${direct ? "is-direct" : ""} ${inPath ? "is-path" : ""} ${muted ? "is-muted" : ""}" x1="${source.x}" y1="${source.y}" x2="${target.x}" y2="${target.y}" />`;
    })
    .join("");

  const nodeMarkup = nodes
    .map((node) => {
      if (!visibleIds.has(node.id)) return "";
      const selected = node.id === state.selectedId;
      const labeled = nodeIsLabeled(node, neighborIds, pathNodes);
      const inPath = pathNodes.has(node.id);
      const isCore = node.id === "nyc-ai-room";
      const muted = pathNodes.size > 0 && !inPath;
      const fill =
        node.nodeType === "project"
          ? "var(--teal)"
          : node.nodeType === "person"
            ? "var(--coral)"
            : node.nodeType === "ask"
              ? "var(--gold)"
              : node.nodeType === "future"
                ? "var(--muted-2)"
                : "var(--violet)";
      const labelY = nodeLabelY(node);
      const labelMarkup = isCore
        ? `<text class="core-label" x="${node.x}" y="${node.y - 5}" text-anchor="middle">NYC AI</text>
           <text class="core-label" x="${node.x}" y="${node.y + 22}" text-anchor="middle">Co-working</text>`
        : nodeLabelMarkup(node, labelY);
      return `
        <g class="graph-node ${isCore ? "is-core" : ""} is-${node.nodeType} ${node.nodeType === "future" ? "is-future" : ""} ${muted ? "is-muted" : ""} ${selected ? "is-selected" : ""} ${labeled ? "is-labeled" : ""} ${inPath ? "is-path" : ""}" data-select="${node.id}" tabindex="0" role="button" aria-label="${node.name}">
          <circle class="graph-hit" cx="${node.x}" cy="${node.y}" r="${nodeHitRadius(node)}"></circle>
          ${nodeShapeMarkup(node, fill)}
          ${labelMarkup}
        </g>`;
    })
    .join("");

  networkGraph.innerHTML = `
    <g class="graph-backdrop" aria-hidden="true">
      <circle class="orbit orbit-outer" cx="690" cy="365" r="330"></circle>
      <circle class="orbit orbit-mid" cx="690" cy="365" r="215"></circle>
      <line class="axis-line" x1="690" y1="80" x2="690" y2="700"></line>
      <line class="axis-line" x1="250" y1="365" x2="1100" y2="365"></line>
    </g>
    <g class="graph-links">${linkMarkup}</g>
    <g class="graph-edge-labels">${edgeLabels.join("")}</g>
    <g class="graph-nodes">${nodeMarkup}</g>`;
}

function renderPathPrompts() {
  pathPromptsEl.innerHTML = pathPrompts
    .map(
      (prompt) =>
        `<button class="path-prompt ${state.activePathId === prompt.id ? "is-active" : ""}" type="button" data-path="${prompt.id}">${prompt.label}</button>`
    )
    .join("");

  const prompt = activePath();
  if (!prompt) {
    activePathEl.innerHTML = `<strong>No path selected</strong><p>Choose a prompt to highlight a connection route.</p>`;
    return;
  }

  activePathEl.innerHTML = `
    <strong>${prompt.label}</strong>
    <div class="path-step-list">
      ${prompt.path.map((id) => `<span class="path-step">${nodeName(id)}</span>`).join("")}
    </div>
    <p>${prompt.note}</p>`;
}

function renderPipeline() {
  const buckets = [
    ["confirmed", "Confirmed"],
    ["likely", "Likely"],
    ["alternate", "Alternates"],
    ["needs-context", "Needs context"]
  ];

  pipelineColumns.innerHTML = buckets
    .map(([status, label]) => {
      const items = projects.filter((project) => project.status === status);
      return `
        <div class="pipeline-column">
          <div class="col-head">${label}<span>${items.length}</span></div>
          ${items
            .map(
              (item) =>
                `<button class="pipeline-card" type="button" data-select="${item.id}" data-focus-profile="true">
                  <strong>${item.name}</strong>
                  <p>${item.owner}</p>
                </button>`
            )
            .join("")}
        </div>`;
    })
    .join("");
}

function selectItem(id, options = {}) {
  if (state.activePathId && !activePathSet().has(id)) {
    state.activePathId = null;
  }
  state.selectedId = id;
  if (options.focusProfile || options.focusGraph) {
    focusGraphOnNode(id, false);
  }
  renderDetail();
  renderGraph();
  renderPathPrompts();
  if (options.focusProfile) {
    document.querySelector("#atlas").scrollIntoView({ behavior: "smooth", block: "start" });
    profilePanel.animate(
      [
        { boxShadow: "0 0 0 0 rgba(198, 242, 78, 0)" },
        { boxShadow: "0 0 0 4px rgba(198, 242, 78, 0.38)" },
        { boxShadow: "0 0 0 0 rgba(198, 242, 78, 0)" }
      ],
      { duration: 900, easing: "ease-out" }
    );
  }
}

function renderAll() {
  renderFilters();
  renderCards();
  renderDetail();
  renderGraph();
  renderPathPrompts();
  renderPipeline();
}

document.addEventListener("click", (event) => {
  const filter = event.target.closest("[data-filter]");
  if (filter) {
    state.filter = filter.dataset.filter;
    renderAll();
    return;
  }

  const path = event.target.closest("[data-path]");
  if (path) {
    state.activePathId = path.dataset.path;
    const prompt = activePath();
    if (prompt) state.selectedId = prompt.path[0];
    if (prompt) focusGraphOnNode(prompt.path[0], false);
    renderDetail();
    renderGraph();
    renderPathPrompts();
    return;
  }

  const graphZoom = event.target.closest("[data-graph-zoom]");
  if (graphZoom) {
    zoomGraph(Number(graphZoom.dataset.graphZoom));
    return;
  }

  const graphFocus = event.target.closest("[data-graph-focus]");
  if (graphFocus) {
    focusGraphOnNode(state.selectedId);
    return;
  }

  const graphReset = event.target.closest("[data-graph-reset]");
  if (graphReset) {
    resetGraphView();
    return;
  }

  const select = event.target.closest("[data-select]");
  if (select) {
    selectItem(select.dataset.select, { focusProfile: select.dataset.focusProfile === "true" });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const select = event.target.closest("[data-select]");
  if (select) {
    event.preventDefault();
    selectItem(select.dataset.select, { focusProfile: select.dataset.focusProfile === "true" });
  }
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderAll();
});

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modeButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    state.mode = button.dataset.mode;
    renderAll();
  });
});

let graphDrag = null;

networkGraph.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();
    zoomGraph(event.deltaY < 0 ? 0.88 : 1.12, event);
  },
  { passive: false }
);

networkGraph.addEventListener("pointerdown", (event) => {
  if (event.button !== 0 || event.target.closest("[data-select]")) return;
  graphDrag = {
    pointerId: event.pointerId,
    clientX: event.clientX,
    clientY: event.clientY,
    viewBox: { ...ensureGraphViewBox() }
  };
  networkGraph.classList.add("is-dragging");
  networkGraph.setPointerCapture(event.pointerId);
});

networkGraph.addEventListener("pointermove", (event) => {
  if (!graphDrag || graphDrag.pointerId !== event.pointerId) return;
  const rect = networkGraph.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const dx = (event.clientX - graphDrag.clientX) * (graphDrag.viewBox.width / rect.width);
  const dy = (event.clientY - graphDrag.clientY) * (graphDrag.viewBox.height / rect.height);
  state.graphViewBox = clampGraphViewBox({
    x: graphDrag.viewBox.x - dx,
    y: graphDrag.viewBox.y - dy,
    width: graphDrag.viewBox.width,
    height: graphDrag.viewBox.height
  });
  state.graphUserMoved = true;
  renderGraph();
});

function endGraphDrag(event) {
  if (!graphDrag || graphDrag.pointerId !== event.pointerId) return;
  graphDrag = null;
  networkGraph.classList.remove("is-dragging");
}

networkGraph.addEventListener("pointerup", endGraphDrag);
networkGraph.addEventListener("pointercancel", endGraphDrag);

window.addEventListener("resize", () => {
  if (state.graphUserMoved) return;
  state.graphViewBox = defaultGraphViewBox();
  renderGraph();
});

renderAll();
