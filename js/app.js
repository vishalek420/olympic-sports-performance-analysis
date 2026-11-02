// ============================================================
// Global Olympic Sports Performance Analytics (1992 - 2026)
// Application Engine & Chart.js Visualizations
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  initDashboard();
});

let currentScenario = "priya"; // priya | carlos | william | overview | story | dataset
let chartInstances = {};
let tableState = {
  sportSearch: "",
  sportCategory: "all",
  countrySortKey: "totalMedals",
  countrySortDir: "desc"
};

// Global Chart.js Defaults
Chart.defaults.color = "#94A3B8";
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.plugins.legend.labels.usePointStyle = true;
Chart.defaults.plugins.tooltip.backgroundColor = "#0D1527";
Chart.defaults.plugins.tooltip.borderColor = "#1E2D4A";
Chart.defaults.plugins.tooltip.borderWidth = 1;
Chart.defaults.plugins.tooltip.padding = 12;
Chart.defaults.plugins.tooltip.cornerRadius = 8;
Chart.defaults.scale.grid = { color: "rgba(30, 45, 74, 0.4)" };

function initDashboard() {
  setupNavigation();
  setupPersonaSelector();
  setupStoryStepper();
  setupTableInteractions();
  renderAllVisualizations();
  populateSportsTable();
  populateCountriesTable();
}

// ------------------------------------------------------------
// Navigation & Tab Switching
// ------------------------------------------------------------
function setupNavigation() {
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const tabId = link.dataset.tab;
      if (!tabId) return;

      document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      document.querySelectorAll(".dashboard-tab").forEach(tab => tab.classList.remove("active"));
      const targetTab = document.getElementById(`tab-${tabId}`);
      if (targetTab) targetTab.classList.add("active");

      updateBreadcrumb(tabId);
      renderTabVisualizations(tabId);
    });
  });
}

function updateBreadcrumb(tabId) {
  const titles = {
    overview: "Executive Overview & Global Benchmarks",
    priya: "Scenario 1: Ms. Priya — NOC Performance Strategy",
    carlos: "Scenario 2: Mr. Carlos — Sports Investment & Efficiency",
    william: "Scenario 3: William Robert — Media Broadcast & Storytelling",
    story: "Tableau Guided Story Walkthrough",
    dataset: "Historical Olympic Datasets (1992 - 2026)"
  };
  document.getElementById("current-tab-title").textContent = titles[tabId] || "Dashboard";
  document.getElementById("breadcrumb-current").textContent = titles[tabId] || "Dashboard";
}

// ------------------------------------------------------------
// Persona / Scenario Selector
// ------------------------------------------------------------
function setupPersonaSelector() {
  document.querySelectorAll(".persona-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".persona-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const persona = btn.dataset.persona;
      currentScenario = persona;

      // Automatically switch to corresponding tab
      document.querySelectorAll(".nav-link").forEach(l => {
        l.classList.toggle("active", l.dataset.tab === persona);
      });
      document.querySelectorAll(".dashboard-tab").forEach(t => t.classList.remove("active"));
      const target = document.getElementById(`tab-${persona}`);
      if (target) target.classList.add("active");

      updateBreadcrumb(persona);
      renderTabVisualizations(persona);
    });
  });
}

// ------------------------------------------------------------
// Helper to manage Chart instances
// ------------------------------------------------------------
function getOrCreateChart(canvasId, config) {
  if (chartInstances[canvasId]) {
    chartInstances[canvasId].destroy();
  }
  const canvas = document.getElementById(canvasId);
  if (!canvas) return null;
  chartInstances[canvasId] = new Chart(canvas.getContext("2d"), config);
  return chartInstances[canvasId];
}

// ------------------------------------------------------------
// Master Render Function
// ------------------------------------------------------------
function renderAllVisualizations() {
  renderOverviewCharts();
  renderPriyaCharts();
  renderCarlosCharts();
  renderWilliamCharts();
}

function renderTabVisualizations(tabId) {
  switch (tabId) {
    case "overview": renderOverviewCharts(); break;
    case "priya": renderPriyaCharts(); break;
    case "carlos": renderCarlosCharts(); break;
    case "william": renderWilliamCharts(); break;
  }
}

// ============================================================
// 1. OVERVIEW CHARTS
// ============================================================
function renderOverviewCharts() {
  // Top 10 Countries Total Medals
  const top10 = OLYMPIC_DATA.countries.slice(0, 10);
  getOrCreateChart("chart-overview-top-countries", {
    type: "bar",
    data: {
      labels: top10.map(c => c.country),
      datasets: [
        { label: "Gold", data: top10.map(c => c.gold), backgroundColor: "#FCB131", borderRadius: 4 },
        { label: "Silver", data: top10.map(c => c.silver), backgroundColor: "#94A3B8", borderRadius: 4 },
        { label: "Bronze", data: top10.map(c => c.bronze), backgroundColor: "#B45309", borderRadius: 4 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: "top" } },
      scales: {
        x: { stacked: true, ticks: { font: { size: 10 }, maxRotation: 45 } },
        y: { stacked: true, title: { display: true, text: "Total Medals (1992 - 2026)" } }
      }
    }
  });

  // Regional Share of Total Medals
  getOrCreateChart("chart-overview-regional-share", {
    type: "doughnut",
    data: {
      labels: OLYMPIC_DATA.regionalEfficiency.map(r => r.region),
      datasets: [{
        data: OLYMPIC_DATA.regionalEfficiency.map(r => r.totalMedals),
        backgroundColor: ["#00A651", "#0081C8", "#FCB131", "#EE334E", "#7048E8"],
        borderWidth: 0,
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "65%",
      plugins: {
        legend: { position: "right", labels: { font: { size: 11 } } },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.label}: ${ctx.raw.toLocaleString()} medals`
          }
        }
      }
    }
  });
}

// ============================================================
// 2. SCENARIO 1: MS. PRIYA (NOC PERFORMANCE STRATEGIST)
// ============================================================
function renderPriyaCharts() {
  // A. Avg Medals per Athlete by Sport Category (Horizontal Bar Chart)
  // Highlighting Rowing at 6.916 and Shooting at 6.731
  const sortedSports = [...OLYMPIC_DATA.sports].slice(0, 15);
  getOrCreateChart("chart-priya-avg-medals-per-athlete", {
    type: "bar",
    data: {
      labels: sortedSports.map(s => s.sport),
      datasets: [{
        label: "Avg Medals per Athlete",
        data: sortedSports.map(s => s.avgMedalsPerAthlete),
        backgroundColor: sortedSports.map(s => {
          if (s.sport === "Rowing") return "#00A651"; // highlighted green
          if (s.sport === "Shooting") return "#FCB131"; // highlighted gold
          return s.avgMedalsPerAthlete >= 5.0 ? "#0081C8" : "rgba(0, 129, 200, 0.4)";
        }),
        borderRadius: 6,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: "y",
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.parsed.x.toFixed(3)} medals per athlete (${sortedSports[ctx.dataIndex].yieldCategory})`
          }
        }
      },
      scales: {
        x: {
          title: { display: true, text: "Per-Athlete Medal Yield Rate" },
          ticks: { callback: v => v.toFixed(1) }
        },
        y: { ticks: { font: { size: 10 } } }
      }
    }
  });

  // B. Global Performance Metrics by Country (Horizontal Bar / Benchmark)
  // USA (735), China (696)
  const topCountries = OLYMPIC_DATA.countries.slice(0, 14);
  getOrCreateChart("chart-priya-global-metrics", {
    type: "bar",
    data: {
      labels: topCountries.map(c => c.country),
      datasets: [{
        label: "Total Olympic Medals",
        data: topCountries.map(c => c.totalMedals),
        backgroundColor: topCountries.map(c => {
          if (c.country === "United States") return "#0081C8";
          if (c.country === "China") return "#EE334E";
          return "rgba(148, 163, 184, 0.35)";
        }),
        borderRadius: 5,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.parsed.y} Medals (Gold: ${topCountries[ctx.dataIndex].gold}, Silver: ${topCountries[ctx.dataIndex].silver}, Bronze: ${topCountries[ctx.dataIndex].bronze})`
          }
        }
      },
      scales: {
        y: { title: { display: true, text: "Total Medals" } },
        x: { ticks: { font: { size: 10 }, maxRotation: 45 } }
      }
    }
  });

  // C. Discipline Portfolio Allocation Radar (Investment Decision Matrix)
  getOrCreateChart("chart-priya-discipline-matrix", {
    type: "radar",
    data: {
      labels: ["Water Sports", "Precision Sports", "Aquatics", "Combat Sports", "Artistic & Gymnastics", "Track & Field", "Ice & Snow"],
      datasets: [
        {
          label: "Recommended NOC Focus (High-Yield)",
          data: [92, 88, 82, 65, 75, 70, 68],
          borderColor: "#00A651",
          backgroundColor: "rgba(0, 166, 81, 0.2)",
          borderWidth: 2
        },
        {
          label: "Historical Allocation (Traditional)",
          data: [45, 35, 80, 75, 60, 95, 40],
          borderColor: "rgba(148, 163, 184, 0.6)",
          backgroundColor: "rgba(148, 163, 184, 0.08)",
          borderWidth: 1.5
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: "top" } },
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: { display: false },
          grid: { color: "rgba(30, 45, 74, 0.5)" },
          pointLabels: { font: { size: 10.5 } }
        }
      }
    }
  });
}

// ============================================================
// 3. SCENARIO 2: MR. CARLOS (SPORTS INVESTMENT ANALYST)
// ============================================================
function renderCarlosCharts() {
  // A. Global Sports Investment vs. Medal Performance (Bubble Chart)
  // Highlighting overperforming nations: Slovakia, Georgia, Ethiopia, Kenya, Jamaica
  const bubbleData = OLYMPIC_DATA.countries.map(c => ({
    x: c.investmentM,
    y: c.totalMedals,
    r: Math.max(c.efficiencyScore / 4, 4),
    country: c.country,
    region: c.region,
    efficiency: c.efficiencyScore,
    status: c.status
  }));

  getOrCreateChart("chart-carlos-investment-vs-medals", {
    type: "bubble",
    data: {
      datasets: [
        {
          label: "Overperforming Nations (High ROI)",
          data: bubbleData.filter(d => ["Slovakia", "Georgia", "Ethiopia", "Kenya", "Jamaica", "Colombia"].includes(d.country)),
          backgroundColor: "rgba(0, 166, 81, 0.65)",
          borderColor: "#00A651",
          borderWidth: 2
        },
        {
          label: "Global Superpowers (High Spend)",
          data: bubbleData.filter(d => ["United States", "China", "Russia / ROC", "Germany", "Great Britain"].includes(d.country)),
          backgroundColor: "rgba(0, 129, 200, 0.5)",
          borderColor: "#0081C8",
          borderWidth: 2
        },
        {
          label: "Other Olympic Nations",
          data: bubbleData.filter(d => !["Slovakia", "Georgia", "Ethiopia", "Kenya", "Jamaica", "Colombia", "United States", "China", "Russia / ROC", "Germany", "Great Britain"].includes(d.country)),
          backgroundColor: "rgba(148, 163, 184, 0.3)",
          borderColor: "rgba(148, 163, 184, 0.6)",
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "top" },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const d = ctx.raw;
              return `${d.country} (${d.region}): $${d.x}M Invested → ${d.y} Medals | Efficiency: ${d.efficiency}% (${d.status})`;
            }
          }
        }
      },
      scales: {
        x: {
          title: { display: true, text: "Sports Infrastructure & Development Investment ($ Millions USD)" },
          type: "logarithmic"
        },
        y: {
          title: { display: true, text: "Actual Medal Count (1992 - 2026)" },
          type: "linear"
        }
      }
    }
  });

  // B. Average Medal Efficiency Percentage by Region (Donut / Pie Chart)
  // South America leads at 49.64%, followed by Europe/Asia at 45.98%
  getOrCreateChart("chart-carlos-regional-efficiency", {
    type: "doughnut",
    data: {
      labels: OLYMPIC_DATA.regionalEfficiency.map(r => r.region),
      datasets: [{
        data: OLYMPIC_DATA.regionalEfficiency.map(r => r.efficiencyPct),
        backgroundColor: ["#00A651", "#0081C8", "#FCB131", "#EE334E", "#7048E8"],
        borderWidth: 0,
        hoverOffset: 12
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "60%",
      plugins: {
        legend: { position: "right", labels: { font: { size: 11 }, padding: 12 } },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.label}: ${ctx.raw}% Average Medal Efficiency`
          }
        }
      }
    }
  });

  // C. Top Grant Allocation Candidates (Efficiency Score Bar)
  const topEfficient = [...OLYMPIC_DATA.countries].sort((a, b) => b.efficiencyScore - a.efficiencyScore).slice(0, 10);
  getOrCreateChart("chart-carlos-grant-priorities", {
    type: "bar",
    data: {
      labels: topEfficient.map(c => c.country),
      datasets: [{
        label: "Medal Efficiency Score (%)",
        data: topEfficient.map(c => c.efficiencyScore),
        backgroundColor: topEfficient.map((_, i) => i < 5 ? "#00A651" : "#0081C8"),
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { title: { display: true, text: "Efficiency %" }, max: 80 },
        x: { ticks: { font: { size: 10 }, maxRotation: 45 } }
      }
    }
  });
}

// ============================================================
// 4. SCENARIO 3: WILLIAM ROBERT (BROADCAST JOURNALIST & STORYTELLER)
// ============================================================
function renderWilliamCharts() {
  // A. Trend of Total Medals Awarded Over the Years (1992 to 2026 Line Chart)
  // Low of 305 in 2000, peak of 363 in 2020, and 2026 recorded 334
  const trends = OLYMPIC_DATA.yearlyTrends;
  getOrCreateChart("chart-william-medal-trend", {
    type: "line",
    data: {
      labels: trends.map(t => `${t.year} (${t.hostCity.split(" ")[0]})`),
      datasets: [{
        label: "Total Medals Awarded",
        data: trends.map(t => t.totalMedals),
        borderColor: "#0081C8",
        backgroundColor: "rgba(0, 129, 200, 0.12)",
        fill: true,
        tension: 0.35,
        borderWidth: 3,
        pointRadius: trends.map(t => [2000, 2020, 2026].includes(t.year) ? 7 : 4),
        pointBackgroundColor: trends.map(t => {
          if (t.year === 2000) return "#EE334E"; // Low
          if (t.year === 2020) return "#00A651"; // Peak
          if (t.year === 2026) return "#FCB131"; // 2026
          return "#0081C8";
        }),
        pointBorderColor: "#fff",
        pointBorderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            title: (items) => `${trends[items[0].dataIndex].year} — ${trends[items[0].dataIndex].hostCity}`,
            label: (ctx) => {
              const item = trends[ctx.dataIndex];
              let note = "";
              if (item.year === 2000) note = " (HISTORIC LOW: 305 Medals)";
              if (item.year === 2020) note = " (ALL-TIME PEAK: 363 Medals)";
              if (item.year === 2026) note = " (MILANO-CORTINA: 334 Medals)";
              return `Total Medals: ${item.totalMedals}${note}`;
            }
          }
        }
      },
      scales: {
        y: { min: 280, max: 390, title: { display: true, text: "Total Medals Awarded" } },
        x: { ticks: { font: { size: 9.5 }, maxRotation: 45 } }
      }
    }
  });

  // B. Comparing Medal Totals Across Olympic Hosts (Bar Chart)
  // Japan as host nation led with 105 medals, USA with 100, China with 93
  const hosts = OLYMPIC_DATA.hostNations;
  getOrCreateChart("chart-william-host-comparison", {
    type: "bar",
    data: {
      labels: hosts.map(h => `${h.flag} ${h.hostNation}`),
      datasets: [
        {
          label: "Medals Won as Host Nation",
          data: hosts.map(h => h.homeMedals),
          backgroundColor: hosts.map(h => {
            if (h.hostNation === "Japan") return "#00A651"; // 105 medals
            if (h.hostNation === "United States") return "#0081C8"; // 100 medals
            if (h.hostNation === "China") return "#EE334E"; // 93 medals
            return "rgba(252, 177, 49, 0.75)";
          }),
          borderRadius: 6
        },
        {
          label: "Historical Away Average Medals",
          data: hosts.map(h => h.awayAvgMedals),
          backgroundColor: "rgba(148, 163, 184, 0.3)",
          borderRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "top" },
        tooltip: {
          callbacks: {
            afterBody: (items) => {
              const h = hosts[items[0].dataIndex];
              return `Home Turf Boost: +${h.boostPct}% (${h.hostEdition})`;
            }
          }
        }
      },
      scales: {
        y: { title: { display: true, text: "Medal Count" } },
        x: { ticks: { font: { size: 10 } } }
      }
    }
  });

  // C. Regional Medal Efficiency & Distribution by Sport (Donut Chart)
  getOrCreateChart("chart-william-regional-dominance", {
    type: "doughnut",
    data: {
      labels: ["Europe/Asia (Historical Superpower)", "North America (High Density)", "Oceania (Per-Capita Leader)", "Africa (Endurance Focus)", "South America (High Efficiency)"],
      datasets: [{
        data: [4820, 1284, 524, 312, 248],
        backgroundColor: ["#0081C8", "#EE334E", "#FCB131", "#7048E8", "#00A651"],
        borderWidth: 0,
        hoverOffset: 10
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "60%",
      plugins: {
        legend: { position: "right", labels: { font: { size: 10.5 } } }
      }
    }
  });
}

// ============================================================
// 5. TABLEAU INTERACTIVE STORY STEPPER
// ============================================================
function setupStoryStepper() {
  document.querySelectorAll(".story-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".story-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const step = btn.dataset.step;
      document.querySelectorAll(".story-slide").forEach(slide => slide.classList.remove("active"));
      const targetSlide = document.getElementById(`story-slide-${step}`);
      if (targetSlide) targetSlide.classList.add("active");
    });
  });
}

// ============================================================
// 6. TABLES & DATA CATALOG
// ============================================================
function populateSportsTable() {
  const tbody = document.getElementById("sports-table-body");
  if (!tbody) return;

  let sports = [...OLYMPIC_DATA.sports];

  if (tableState.sportCategory !== "all") {
    sports = sports.filter(s => s.category === tableState.sportCategory);
  }
  if (tableState.sportSearch) {
    const q = tableState.sportSearch.toLowerCase();
    sports = sports.filter(s => s.sport.toLowerCase().includes(q) || s.category.toLowerCase().includes(q));
  }

  tbody.innerHTML = sports.map((s, idx) => `
    <tr>
      <td><strong>#${idx + 1}</strong></td>
      <td style="color:#fff; font-weight:600;">${s.sport}</td>
      <td>${s.category}</td>
      <td><span class="table-badge ${s.season === 'Summer' ? 'badge-mod' : 'badge-high'}">${s.season}</span></td>
      <td>${s.totalAthletes.toLocaleString()}</td>
      <td>${s.totalMedals.toLocaleString()}</td>
      <td style="color:${s.avgMedalsPerAthlete >= 5 ? '#00A651' : '#FCB131'}; font-weight:700;">
        ${s.avgMedalsPerAthlete.toFixed(3)}
      </td>
      <td>
        <span class="table-badge ${s.yieldCategory === 'High-Yield' ? 'badge-high' : s.yieldCategory === 'Moderate-Yield' ? 'badge-mod' : 'badge-low'}">
          ${s.yieldCategory}
        </span>
      </td>
    </tr>
  `).join("");
}

function populateCountriesTable() {
  const tbody = document.getElementById("countries-table-body");
  if (!tbody) return;

  let countries = [...OLYMPIC_DATA.countries];

  countries.sort((a, b) => {
    const valA = a[tableState.countrySortKey];
    const valB = b[tableState.countrySortKey];
    return tableState.countrySortDir === "desc" ? valB - valA : valA - valB;
  });

  tbody.innerHTML = countries.map((c, idx) => `
    <tr>
      <td><strong>#${idx + 1}</strong></td>
      <td style="color:#fff; font-weight:600;">${c.country} (${c.code})</td>
      <td>${c.region}</td>
      <td style="color:#FCB131; font-weight:700;">${c.gold}</td>
      <td>${c.silver}</td>
      <td>${c.bronze}</td>
      <td style="color:#0081C8; font-weight:800;">${c.totalMedals}</td>
      <td>$${c.investmentM}M</td>
      <td style="color:${c.efficiencyScore >= 50 ? '#00A651' : '#94A3B8'}; font-weight:700;">
        ${c.efficiencyScore}%
      </td>
      <td>
        <span class="table-badge ${c.efficiencyScore >= 55 ? 'badge-high' : 'badge-mod'}">
          ${c.status}
        </span>
      </td>
    </tr>
  `).join("");
}

function setupTableInteractions() {
  const sportInput = document.getElementById("sport-search-input");
  if (sportInput) {
    sportInput.addEventListener("input", e => {
      tableState.sportSearch = e.target.value;
      populateSportsTable();
    });
  }

  const categoryFilter = document.getElementById("sport-category-select");
  if (categoryFilter) {
    categoryFilter.addEventListener("change", e => {
      tableState.sportCategory = e.target.value;
      populateSportsTable();
    });
  }
}
