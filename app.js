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
    x: 450,
    y: 250
  },
  {
    id: "got2eat",
    name: "Got2eat",
    owner: "Jaison Jayaraj",
    stage: "Early product",
    status: "likely",
    theme: "Consumer AI",
    description:
      "Food decision and discovery workflow with enough product surface to become a useful live-room demo.",
    need: "Sharper user story, GTM feedback, and consumer-product operators.",
    tags: ["demo", "consumer", "gtm"],
    image: "",
    x: 265,
    y: 142
  },
  {
    id: "rem",
    name: "Rem",
    owner: "Josh Kim",
    stage: "Product demo",
    status: "likely",
    theme: "Personal AI",
    description:
      "Personal workflow product with a demo-context request already sent and a profile ready to enrich.",
    need: "Clearer demo goal, ideal customer feedback, and product positioning.",
    tags: ["demo", "personal ai", "workflow"],
    image: "",
    x: 610,
    y: 140
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
    x: 175,
    y: 336
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
    x: 725,
    y: 330
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
    x: 380,
    y: 430
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
    x: 470,
    y: 82
  },
  {
    id: "jaison-jayaraj",
    name: "Jaison Jayaraj",
    title: "Builder, Got2eat",
    projectIds: ["got2eat"],
    focus: "Consumer AI and food discovery",
    needs: "Consumer GTM feedback and demo framing.",
    canHelp: "Early consumer-product iteration.",
    followUp: "Ask what feedback would be most useful from the room.",
    tags: ["consumer", "gtm"],
    x: 120,
    y: 140
  },
  {
    id: "josh-kim",
    name: "Josh Kim",
    title: "Builder, Rem",
    projectIds: ["rem"],
    focus: "Personal AI workflows",
    needs: "Positioning, workflow critique, and next-user targets.",
    canHelp: "Product thinking around personal workflow tools.",
    followUp: "Log product link and demo objective once received.",
    tags: ["workflow", "personal ai"],
    x: 780,
    y: 125
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
    x: 105,
    y: 455
  },
  {
    id: "jeremiah-richie",
    name: "Jeremiah Richie",
    title: "Builder, Grantsville",
    projectIds: ["grantsville"],
    focus: "Healthcare operations",
    needs: "Implementation feedback and domain-specific intros.",
    canHelp: "Real-world adoption context for healthcare ops.",
    followUp: "Confirm demo boundaries and any sensitive-screen constraints.",
    tags: ["healthcare ops", "enterprise"],
    x: 795,
    y: 465
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
    x: 515,
    y: 486
  }
];

const asks = [
  { id: "users", name: "Users", x: 260, y: 275, tags: ["gtm", "consumer"] },
  { id: "intros", name: "Useful intros", x: 625, y: 276, tags: ["operators", "network"] },
  { id: "feedback", name: "Feedback", x: 450, y: 555, tags: ["demo", "product"] }
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
  "Infrastructure",
  "Needs context"
];

const state = {
  filter: "All",
  mode: "all",
  query: "",
  selectedId: "imposter-artist"
};

const projectGrid = document.querySelector("#projectGrid");
const peopleGrid = document.querySelector("#peopleGrid");
const detailPanel = document.querySelector("#detailPanel");
const networkGraph = document.querySelector("#networkGraph");
const filterChips = document.querySelector("#filterChips");
const searchInput = document.querySelector("#searchInput");
const pipelineColumns = document.querySelector("#pipelineColumns");
const modeButtons = Array.from(document.querySelectorAll(".mode-button"));

function normalize(value) {
  return String(value || "").toLowerCase();
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

function renderFilters() {
  filterChips.innerHTML = filters
    .map(
      (filter) =>
        `<button class="chip ${state.filter === filter ? "is-active" : ""}" type="button" data-filter="${filter}">${filter}</button>`
    )
    .join("");
}

function projectCard(project) {
  const statusClass = project.status;
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
          <span class="status-pill ${statusClass}">${statusLabels[project.status]}</span>
          <span class="tag">${project.theme}</span>
        </div>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div class="project-meta">
          <div class="meta-row"><span>Builder</span><strong>${project.owner}</strong></div>
          <div class="meta-row"><span>Stage</span><strong>${project.stage}</strong></div>
          <div class="meta-row"><span>Need</span><strong>${project.need}</strong></div>
        </div>
        <button type="button" data-select="${project.id}">View profile</button>
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
      <button type="button" data-select="${person.id}">View profile</button>
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
      rows: [
        ["Builder", project.owner],
        ["Theme", project.theme],
        ["Stage", project.stage],
        ["Demo status", statusLabels[project.status]],
        ["Useful next move", project.need],
        ["People link", owner ? owner.focus : "Add builder profile"]
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
      rows: [
        ["Focus", person.focus],
        ["Project", linkedProjects],
        ["Needs", person.needs],
        ["Can help with", person.canHelp],
        ["Next follow-up", person.followUp]
      ]
    };
  }

  const ask = asks.find((item) => item.id === state.selectedId);
  if (ask) {
    return {
      type: "Need",
      title: ask.name,
      subtitle: "A shared network need that can connect multiple builders.",
      tags: ask.tags,
      rows: [["Use", "Connect this need back to project and people profiles."]]
    };
  }

  return null;
}

function renderDetail() {
  const detail = detailForSelected();
  if (!detail) return;

  detailPanel.innerHTML = `
    <p class="eyebrow">${detail.type}</p>
    <h2>${detail.title}</h2>
    <p>${detail.subtitle}</p>
    <div class="tag-list">${detail.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
    <div class="detail-stack">
      ${detail.rows
        .map(
          ([label, value]) =>
            `<div class="detail-item"><span>${label}</span><strong>${value}</strong></div>`
        )
        .join("")}
    </div>`;
}

function graphConnections() {
  const ownerLinks = projects
    .map((project) => {
      const person = people.find((item) => item.projectIds.includes(project.id));
      return person ? { source: person.id, target: project.id, strong: true } : null;
    })
    .filter(Boolean);

  return [
    ...ownerLinks,
    { source: "imposter-artist", target: "feedback", strong: true },
    { source: "got2eat", target: "users", strong: true },
    { source: "rem", target: "feedback", strong: false },
    { source: "somo", target: "intros", strong: true },
    { source: "grantsville", target: "intros", strong: true },
    { source: "green-compute", target: "intros", strong: false },
    { source: "green-compute", target: "feedback", strong: true }
  ];
}

function allGraphNodes() {
  return [
    ...projects.map((item) => ({ ...item, nodeType: "project" })),
    ...people.map((item) => ({ ...item, nodeType: "person" })),
    ...asks.map((item) => ({ ...item, nodeType: "ask" }))
  ];
}

function nodeVisible(node) {
  if (node.nodeType === "ask") return state.mode === "all";
  if (node.nodeType === "project") return visibleProjects().some((project) => project.id === node.id);
  return visiblePeople().some((person) => person.id === node.id);
}

function renderGraph() {
  const nodes = allGraphNodes();
  const nodeMap = new Map(nodes.map((node) => [node.id, node]));
  const links = graphConnections();
  const visibleIds = new Set(nodes.filter(nodeVisible).map((node) => node.id));

  const linkMarkup = links
    .map((link) => {
      const source = nodeMap.get(link.source);
      const target = nodeMap.get(link.target);
      const isVisible = visibleIds.has(source.id) && visibleIds.has(target.id);
      return `<line class="graph-link ${link.strong ? "is-strong" : ""}" x1="${source.x}" y1="${source.y}" x2="${target.x}" y2="${target.y}" opacity="${isVisible ? 1 : 0.16}" />`;
    })
    .join("");

  const nodeMarkup = nodes
    .map((node) => {
      const dimmed = !visibleIds.has(node.id);
      const selected = node.id === state.selectedId;
      const fill =
        node.nodeType === "project"
          ? "var(--teal)"
          : node.nodeType === "person"
            ? "var(--coral)"
            : "var(--gold)";
      const shape =
        node.nodeType === "project"
          ? `<rect x="${node.x - 28}" y="${node.y - 28}" width="56" height="56" rx="8" fill="${fill}" />`
          : `<circle cx="${node.x}" cy="${node.y}" r="${node.nodeType === "ask" ? 23 : 26}" fill="${fill}" />`;
      const labelY = node.nodeType === "ask" ? node.y + 48 : node.y + 50;
      const subLabel = node.nodeType === "project" ? node.stage : node.nodeType === "person" ? "builder" : "network need";
      return `
        <g class="graph-node ${dimmed ? "is-dimmed" : ""} ${selected ? "is-selected" : ""}" data-select="${node.id}" tabindex="0" role="button" aria-label="${node.name}">
          ${shape}
          <text x="${node.x}" y="${labelY}" text-anchor="middle">${node.name}</text>
          <text class="sub-label" x="${node.x}" y="${labelY + 17}" text-anchor="middle">${subLabel}</text>
        </g>`;
    })
    .join("");

  networkGraph.innerHTML = linkMarkup + nodeMarkup;
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
                `<button class="pipeline-card" type="button" data-select="${item.id}">
                  <strong>${item.name}</strong>
                  <p>${item.owner}</p>
                </button>`
            )
            .join("")}
        </div>`;
    })
    .join("");
}

function selectItem(id) {
  state.selectedId = id;
  renderDetail();
  renderGraph();
}

function renderAll() {
  renderFilters();
  renderCards();
  renderDetail();
  renderGraph();
  renderPipeline();
}

document.addEventListener("click", (event) => {
  const filter = event.target.closest("[data-filter]");
  if (filter) {
    state.filter = filter.dataset.filter;
    renderAll();
    return;
  }

  const select = event.target.closest("[data-select]");
  if (select) {
    selectItem(select.dataset.select);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const select = event.target.closest("[data-select]");
  if (select) {
    event.preventDefault();
    selectItem(select.dataset.select);
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
