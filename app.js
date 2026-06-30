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
    description: "The center node: recurring NYC co-working, demo nights, remote sessions, profiles, and useful intros.",
    tags: ["meetup", "monthly", "center node", "community"],
    x: 600,
    y: 370
  },
  {
    id: "live-coworking",
    name: "Opt-in live co-working",
    kind: "meetup",
    description:
      "A future remote mode where builders can enter the network while working, share lightweight session context, and get useful help without publishing by default.",
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
    label: "Live session to mid-work intro",
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

const state = {
  filter: "All",
  mode: "all",
  query: "",
  selectedId: "nyc-ai-room",
  activePathId: null
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
const modeButtons = Array.from(document.querySelectorAll(".mode-button"));

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
        <button type="button" data-select="${project.id}" data-focus-profile="true">Open profile</button>
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
      <button type="button" data-select="${person.id}" data-focus-profile="true">Open profile</button>
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
        ["Theme", project.theme],
        ["Stage", project.stage],
        ["Demo status", statusLabels[project.status]],
        ["Useful next move", project.need],
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
            ["Mode", "Optional remote co-working session"],
            ["Signal", "What you are working on, current blocker, and useful help"],
            ["Privacy default", "Presence and session context are opt-in; public profile requires approval"]
          ]
        : [
            ["Cadence", "Regular monthly co-working and demos"],
            ["Job", "Turn one room into a durable builder graph"],
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
      ${detail.rows
        .map(([label, value]) => `<div class="detail-item"><span>${label}</span><strong>${value}</strong></div>`)
        .join("")}
    </div>`;
}

function nodeVisible(node) {
  if (node.nodeType === "ask" || node.nodeType === "meetup" || node.nodeType === "future") return state.mode === "all";
  if (node.nodeType === "project") return visibleProjects().some((project) => project.id === node.id);
  return visiblePeople().some((person) => person.id === node.id);
}

function renderGraph() {
  const nodes = allNodes();
  const map = new Map(nodes.map((node) => [node.id, node]));
  const visibleIds = new Set(nodes.filter(nodeVisible).map((node) => node.id));
  const pathNodes = activePathSet();
  const pathEdges = activePathEdges();

  const linkMarkup = links
    .map((link) => {
      const source = map.get(link.source);
      const target = map.get(link.target);
      if (!source || !target) return "";
      const visible = visibleIds.has(source.id) && visibleIds.has(target.id);
      const inPath = pathEdges.has(`${source.id}:${target.id}`);
      return `<line class="graph-link ${link.strong ? "is-strong" : ""} ${inPath ? "is-path" : ""} ${!visible || (pathNodes.size && !inPath) ? "is-dimmed" : ""}" x1="${source.x}" y1="${source.y}" x2="${target.x}" y2="${target.y}" />`;
    })
    .join("");

  const nodeMarkup = nodes
    .map((node) => {
      const dimmed = !visibleIds.has(node.id) || (pathNodes.size > 0 && !pathNodes.has(node.id));
      const selected = node.id === state.selectedId;
      const inPath = pathNodes.has(node.id);
      const isCore = node.id === "nyc-ai-room";
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
      const radius =
        isCore ? 62 : node.nodeType === "meetup" ? 34 : node.nodeType === "ask" ? 26 : node.nodeType === "future" ? 24 : 30;
      const shape =
        node.nodeType === "project"
          ? `<rect x="${node.x - 31}" y="${node.y - 31}" width="62" height="62" rx="10" fill="${fill}" />`
          : `<circle cx="${node.x}" cy="${node.y}" r="${radius}" fill="${fill}" />`;
      const labelY = node.y + radius + 23;
      const subLabel =
        node.nodeType === "project"
          ? node.stage
            : node.nodeType === "person"
              ? "builder"
              : node.nodeType === "ask"
                ? "ask"
                : node.nodeType === "future"
                  ? "coming soon"
                  : "meetup";
      const labelMarkup = isCore
        ? `<text class="core-label" x="${node.x}" y="${node.y - 5}" text-anchor="middle">NYC AI</text>
           <text class="core-label" x="${node.x}" y="${node.y + 22}" text-anchor="middle">Co-working</text>`
        : `<text x="${node.x}" y="${labelY}" text-anchor="middle">${node.name}</text>
           <text class="sub-label" x="${node.x}" y="${labelY + 18}" text-anchor="middle">${subLabel}</text>`;
      return `
        <g class="graph-node ${isCore ? "is-core" : ""} ${node.nodeType === "future" ? "is-future" : ""} ${dimmed ? "is-dimmed" : ""} ${selected ? "is-selected" : ""} ${inPath ? "is-path" : ""}" data-select="${node.id}" tabindex="0" role="button" aria-label="${node.name}">
          ${shape}
          ${labelMarkup}
        </g>`;
    })
    .join("");

  networkGraph.innerHTML = linkMarkup + nodeMarkup;
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
          <h3>${label}<span>${items.length}</span></h3>
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
  state.selectedId = id;
  renderDetail();
  renderGraph();
  if (options.focusProfile) {
    document.querySelector("#atlas").scrollIntoView({ behavior: "smooth", block: "start" });
    profilePanel.animate(
      [
        { boxShadow: "0 0 0 0 rgba(241, 187, 76, 0)" },
        { boxShadow: "0 0 0 4px rgba(241, 187, 76, 0.35)" },
        { boxShadow: "0 0 0 0 rgba(241, 187, 76, 0)" }
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
    renderDetail();
    renderGraph();
    renderPathPrompts();
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

renderAll();
