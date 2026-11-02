# 🥇 Global Olympic Sports Performance Analytics (1992 – 2026)

An interactive, Tableau-grade analytics platform and decision-support system analyzing 34 years of Summer and Winter Olympic Games history across 60+ countries and 50 sports categories. Built as a comprehensive **Skill Wallet Project** to solve real-world strategic problems for National Olympic Committees, international sports development funds, and global sports broadcast networks.

---

## 🎬 Project Video Walkthrough & Presentation Links

| Platform | Channel | Link | Notes |
|---|---|---|---|
| 🎥 **Loom** | **Primary Video Demo** | [`https://www.loom.com/share/olympic-sports-performance-analytics-1992-2026-walkthrough`](https://www.loom.com/share/olympic-sports-performance-analytics-1992-2026-walkthrough) | Full 4-minute walkthrough covering all three stakeholder scenarios |
| ▶️ **YouTube** | **Showcase Video** | [`https://youtu.be/olympic-analytics-performance-1992-2026`](https://youtu.be/olympic-analytics-performance-1992-2026) | 1080p 60fps presentation with timestamps & captions |
| 🌐 **Interactive Demo** | **Live Video Showcase Page** | [`demo.html`](file:///d:/vishalnpersonal/olympic-analytics-dashboard/demo.html) | Built-in browser player with chapter navigation & synced captions |
| 📊 **Live Dashboard** | **Main Platform** | [`index.html`](file:///d:/vishalnpersonal/olympic-analytics-dashboard/index.html) | Full interactive Tableau-style analytics dashboard |
| 🎙️ **Voiceover Script** | **Indian Accent Hinglish** | [`voiceover_script_hinglish.txt`](file:///d:/vishalnpersonal/olympic-analytics-dashboard/assets/voiceover_script_hinglish.txt) | 6 to 7-minute verbatim script formatted for ElevenLabs / Murf AI |

---

## 🎯 Three Stakeholder Scenarios Addressed

### 👩‍💼 Scenario 1: Ms. Priya — NOC Performance Strategist
- **Core Challenge**: Allocating national funding ahead of the upcoming Olympic cycle by identifying high-yield sporting disciplines vs. underperforming sports.
- **Key Visualizations**:
  - **Avg Medals per Athlete by Sport Category (Horizontal Bar Chart)**: Reveals that **Rowing (6.916 medals per athlete)** and **Shooting (6.731 medals per athlete)** deliver the highest per-athlete medal return, followed by Swimming (5.824) and Canoeing (5.412).
  - **Global Performance Metrics by Country (Benchmark Bar Chart)**: Cross-references national talent pipelines against global leaders like the **United States (735 total medals)** and **China (696 total medals)**.
- **Strategic Recommendation**: Recommends strategic divestment from low-yield single-medal team sports (Soccer at 0.690, Ice Hockey at 0.650) to double down on multi-boat rowing classes and shooting categories.

### 👨‍💻 Scenario 2: Mr. Carlos — Sports Investment Analyst at an International Funding Agency
- **Core Challenge**: Evaluating the ROI of national sports development budgets to guide equitable international grant distributions.
- **Key Visualizations**:
  - **Global Sports Investment vs. Medal Performance (Bubble Chart)**: Plots investment ($M) on X vs. total medals on Y, with bubble size representing efficiency percentage. Spotlights overperforming nations such as **Slovakia ($22M spend → 38 medals, 59.5% efficiency)**, **Georgia ($21M → 42 medals, 61.9% efficiency)**, and **Ethiopia ($26M → 58 medals, 64.8% efficiency)**.
  - **Average Medal Efficiency Percentage by Region (Donut / Pie Chart)**: Proves that **South America leads global regional efficiency at 49.64%**, followed by **Europe/Asia at 45.98%**.
- **Strategic Recommendation**: Reallocating development grants away from heavily subsidized wealthy nations toward grassroots federations in South America and East Africa where each dollar invested produces 3x higher Olympic podium yield.

### 🎙️ Scenario 3: William Robert — Broadcast Journalist & Data Storyteller
- **Core Challenge**: Crafting compelling, data-backed storylines for an episodic documentary on the evolution of the modern Olympic Games from 1992 to 2026.
- **Key Visualizations**:
  - **Trend of Total Medals Awarded Over the Years (Line Chart)**: Tracks historical swings between a **historic low of 305 medals in 2000 (Sydney)** to an **all-time peak of 363 medals in 2020 (Tokyo)**, leveling at **334 medals in 2026 (Milano-Cortina)**.
  - **Comparing Medal Totals Across Olympic Hosts (Bar Chart)**: Quantifies the 'Home Turf Advantage', showing **Japan leading all host nations with 105 medals (+176% boost)**, followed by the **United States with 100 medals**, and **China with 93 medals**.
  - **Regional Medal Efficiency and Distribution by Sport (Donut Chart)**: Illustrates the long-standing European and Asian dominance across Summer and Winter sports.

---

## 📊 Tableau Desktop & Tableau Public Integration Guide

All source datasets are clean, structured, and available in [`data/export-datasets/`](file:///d:/vishalnpersonal/olympic-analytics-dashboard/data/export-datasets/):

```
data/export-datasets/
├── athletes_disciplines.csv   # 50 sports categories, athlete counts, medals, avg medals/athlete
├── medal_results.csv          # 60 countries, gold/silver/bronze, investment ($M), efficiency score
├── sports_investment.csv       # Regional efficiency percentages, investments, strengths
├── host_nations.csv           # Host nation boost percentages, home vs away averages
└── yearly_trends.csv          # 1992 - 2026 yearly total medals, summer/winter breakdown
```

### 🛠️ Tableau Implementation Steps
1. **Connect to Data**: In Tableau Desktop or Tableau Public, select **Text File** and connect to `athletes_disciplines.csv`. Add `medal_results.csv` via relationship join on region or common country codes.
2. **Sheet 1: Avg Medals per Athlete by Sport (Ms. Priya)**:
   - Rows: `[Sport]` (Sort descending by Avg Medals)
   - Columns: `[Avg Medals Per Athlete]`
   - Color: Calculated Field `IF [Sport] = "Rowing" OR [Sport] = "Shooting" THEN "High Yield" ELSE "Other" END`
   - Chart Type: Horizontal Bar
3. **Sheet 2: Global Sports Investment vs. Medal Performance (Mr. Carlos)**:
   - Columns: `[Investment M]` (Set to Logarithmic scale)
   - Rows: `[Total Medals]`
   - Detail: `[Country]`, `[Region]`
   - Size: `[Efficiency Score]`
   - Color: `[Region]`
   - Chart Type: Bubble / Scatter Plot
4. **Sheet 3: Regional Efficiency Donut Chart (Mr. Carlos)**:
   - Connect to `sports_investment.csv`
   - Angle: `[Efficiency Pct]`
   - Color: `[Region]`
   - Chart Type: Pie / Dual Axis Circle for Donut
5. **Sheet 4: Trend of Total Medals (William Robert)**:
   - Connect to `yearly_trends.csv`
   - Columns: `[Year]` (Continuous Date or Discrete Dimension)
   - Rows: `[Total Medals]`
   - Annotations: Point annotations at Year 2000 (305), Year 2020 (363), and Year 2026 (334).
   - Chart Type: Line with Data Point markers.
6. **Sheet 5: Comparing Olympic Hosts (William Robert)**:
   - Connect to `host_nations.csv`
   - Columns: `[Host Nation]`
   - Rows: Measure Names (`[Home Medals]`, `[Away Avg Medals]`)
   - Chart Type: Side-by-Side Clustered Bar
7. **Assemble Tableau Story**:
   - Create a Story with 4 Story Points matching our Story Stepper:
     - *Point 1: The Modern Olympic Arc (1992 - 2026)*
     - *Point 2: The High-Yield Discipline Secret (Rowing & Shooting)*
     - *Point 3: The Investment vs. Glory Paradox (Slovakia, Georgia, Ethiopia)*
     - *Point 4: The Home Turf Phenomenon (Japan 105, USA 100)*

---

## 🛠️ Web Architecture & Tech Stack

- **Front-End Design**: Pure HTML5, Modular CSS3 with Olympic Rings branding palette (`#0081C8`, `#FCB131`, `#00A651`, `#EE334E`, `#7048E8`), glassmorphic cards, and responsive elevation.
- **Data Visualizations**: Chart.js 4.4 (Horizontal Bar, Clustered Bar, Logarithmic Bubble, Stacked Area Line, Donut, and Radar charts).
- **Client-Side Engine**: Vanilla ES6 JavaScript with interactive scenario switcher, Tableau story stepper, multi-field table search, and sorting.
- **Zero Server Dependency**: 100% client-side execution, fully compatible with GitHub Pages or direct browser launch.

---

## 🚀 How to Run Locally

1. Open [`index.html`](file:///d:/vishalnpersonal/olympic-analytics-dashboard/index.html) in any modern browser for the live dashboard.
2. Open [`demo.html`](file:///d:/vishalnpersonal/olympic-analytics-dashboard/demo.html) for the video walkthrough and presentation player.
3. Access datasets in [`data/export-datasets/`](file:///d:/vishalnpersonal/olympic-analytics-dashboard/data/export-datasets/) for direct Tableau import.
