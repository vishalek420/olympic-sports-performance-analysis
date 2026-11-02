// ============================================================
// Global Olympic Sports Performance Analysis (1992 - 2026)
// Data Pipeline for Tableau & Web Analytics Platform
// ============================================================

const OLYMPIC_DATA = {
  "summary": {
    "timeRange": "1992 - 2026",
    "totalCountriesTracked": 40,
    "totalSportsDisciplines": 50,
    "totalMedalsAwarded": 5965,
    "topPerformer": "United States (735)",
    "runnerUp": "China (696)",
    "topPerAthleteSport": "Rowing (6.916)",
    "highestRegionalEfficiency": "South America (49.64%)",
    "hostMedalLeader": "Japan (105 Medals)",
    "yearlyPeak": "2020 Tokyo (363 Medals)",
    "yearlyLow": "2000 Sydney (305 Medals)",
    "milanoCortinaMedals": "2026 (334 Medals)"
  },
  "sports": [
    {
      "sport": "Rowing",
      "avgMedalsPerAthlete": 6.916,
      "totalAthletes": 412,
      "totalMedals": 2850,
      "category": "Water Sports",
      "season": "Summer",
      "yieldCategory": "High-Yield"
    },
    {
      "sport": "Shooting",
      "avgMedalsPerAthlete": 6.731,
      "totalAthletes": 398,
      "totalMedals": 2679,
      "category": "Precision",
      "season": "Summer",
      "yieldCategory": "High-Yield"
    },
    {
      "sport": "Swimming",
      "avgMedalsPerAthlete": 5.824,
      "totalAthletes": 850,
      "totalMedals": 4950,
      "category": "Aquatics",
      "season": "Summer",
      "yieldCategory": "High-Yield"
    },
    {
      "sport": "Canoeing / Kayak",
      "avgMedalsPerAthlete": 5.412,
      "totalAthletes": 360,
      "totalMedals": 1948,
      "category": "Water Sports",
      "season": "Summer",
      "yieldCategory": "High-Yield"
    },
    {
      "sport": "Gymnastics (Artistic)",
      "avgMedalsPerAthlete": 5.15,
      "totalAthletes": 420,
      "totalMedals": 2163,
      "category": "Artistic",
      "season": "Summer",
      "yieldCategory": "High-Yield"
    },
    {
      "sport": "Cycling (Track)",
      "avgMedalsPerAthlete": 4.98,
      "totalAthletes": 340,
      "totalMedals": 1693,
      "category": "Cycling",
      "season": "Summer",
      "yieldCategory": "High-Yield"
    },
    {
      "sport": "Athletics (Track & Field)",
      "avgMedalsPerAthlete": 4.68,
      "totalAthletes": 1850,
      "totalMedals": 8658,
      "category": "Track & Field",
      "season": "Summer",
      "yieldCategory": "Moderate-Yield"
    },
    {
      "sport": "Sailing",
      "avgMedalsPerAthlete": 4.35,
      "totalAthletes": 380,
      "totalMedals": 1653,
      "category": "Water Sports",
      "season": "Summer",
      "yieldCategory": "Moderate-Yield"
    },
    {
      "sport": "Equestrian",
      "avgMedalsPerAthlete": 3.92,
      "totalAthletes": 290,
      "totalMedals": 1137,
      "category": "Mounted",
      "season": "Summer",
      "yieldCategory": "Moderate-Yield"
    },
    {
      "sport": "Speed Skating",
      "avgMedalsPerAthlete": 3.86,
      "totalAthletes": 280,
      "totalMedals": 1081,
      "category": "Ice Sports",
      "season": "Winter",
      "yieldCategory": "Moderate-Yield"
    },
    {
      "sport": "Fencing",
      "avgMedalsPerAthlete": 3.75,
      "totalAthletes": 310,
      "totalMedals": 1162,
      "category": "Combat",
      "season": "Summer",
      "yieldCategory": "Moderate-Yield"
    },
    {
      "sport": "Biathlon",
      "avgMedalsPerAthlete": 3.64,
      "totalAthletes": 260,
      "totalMedals": 946,
      "category": "Snow Sports",
      "season": "Winter",
      "yieldCategory": "Moderate-Yield"
    },
    {
      "sport": "Cross-Country Skiing",
      "avgMedalsPerAthlete": 3.51,
      "totalAthletes": 340,
      "totalMedals": 1193,
      "category": "Snow Sports",
      "season": "Winter",
      "yieldCategory": "Moderate-Yield"
    },
    {
      "sport": "Weightlifting",
      "avgMedalsPerAthlete": 3.42,
      "totalAthletes": 320,
      "totalMedals": 1094,
      "category": "Strength",
      "season": "Summer",
      "yieldCategory": "Moderate-Yield"
    },
    {
      "sport": "Judo",
      "avgMedalsPerAthlete": 3.25,
      "totalAthletes": 380,
      "totalMedals": 1235,
      "category": "Combat",
      "season": "Summer",
      "yieldCategory": "Moderate-Yield"
    },
    {
      "sport": "Wrestling (Freestyle/Greco)",
      "avgMedalsPerAthlete": 3.12,
      "totalAthletes": 410,
      "totalMedals": 1279,
      "category": "Combat",
      "season": "Summer",
      "yieldCategory": "Moderate-Yield"
    },
    {
      "sport": "Archery",
      "avgMedalsPerAthlete": 2.94,
      "totalAthletes": 240,
      "totalMedals": 706,
      "category": "Precision",
      "season": "Summer",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Boxing",
      "avgMedalsPerAthlete": 2.85,
      "totalAthletes": 390,
      "totalMedals": 1111,
      "category": "Combat",
      "season": "Summer",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Alpine Skiing",
      "avgMedalsPerAthlete": 2.76,
      "totalAthletes": 330,
      "totalMedals": 911,
      "category": "Snow Sports",
      "season": "Winter",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Diving",
      "avgMedalsPerAthlete": 2.68,
      "totalAthletes": 250,
      "totalMedals": 670,
      "category": "Aquatics",
      "season": "Summer",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Figure Skating",
      "avgMedalsPerAthlete": 2.54,
      "totalAthletes": 190,
      "totalMedals": 483,
      "category": "Ice Sports",
      "season": "Winter",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Short Track Speed Skating",
      "avgMedalsPerAthlete": 2.45,
      "totalAthletes": 180,
      "totalMedals": 441,
      "category": "Ice Sports",
      "season": "Winter",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Badminton",
      "avgMedalsPerAthlete": 2.38,
      "totalAthletes": 210,
      "totalMedals": 500,
      "category": "Racquet",
      "season": "Summer",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Table Tennis",
      "avgMedalsPerAthlete": 2.29,
      "totalAthletes": 210,
      "totalMedals": 481,
      "category": "Racquet",
      "season": "Summer",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Snowboard",
      "avgMedalsPerAthlete": 2.18,
      "totalAthletes": 220,
      "totalMedals": 480,
      "category": "Snow Sports",
      "season": "Winter",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Freestyle Skiing",
      "avgMedalsPerAthlete": 2.12,
      "totalAthletes": 230,
      "totalMedals": 488,
      "category": "Snow Sports",
      "season": "Winter",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Taekwondo",
      "avgMedalsPerAthlete": 1.98,
      "totalAthletes": 210,
      "totalMedals": 416,
      "category": "Combat",
      "season": "Summer",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Triathlon",
      "avgMedalsPerAthlete": 1.85,
      "totalAthletes": 160,
      "totalMedals": 296,
      "category": "Endurance",
      "season": "Summer",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Bobsleigh",
      "avgMedalsPerAthlete": 1.76,
      "totalAthletes": 180,
      "totalMedals": 317,
      "category": "Sliding",
      "season": "Winter",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Luge",
      "avgMedalsPerAthlete": 1.68,
      "totalAthletes": 150,
      "totalMedals": 252,
      "category": "Sliding",
      "season": "Winter",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Skeleton",
      "avgMedalsPerAthlete": 1.54,
      "totalAthletes": 110,
      "totalMedals": 169,
      "category": "Sliding",
      "season": "Winter",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Ski Jumping",
      "avgMedalsPerAthlete": 1.48,
      "totalAthletes": 150,
      "totalMedals": 222,
      "category": "Snow Sports",
      "season": "Winter",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Nordic Combined",
      "avgMedalsPerAthlete": 1.42,
      "totalAthletes": 110,
      "totalMedals": 156,
      "category": "Snow Sports",
      "season": "Winter",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Modern Pentathlon",
      "avgMedalsPerAthlete": 1.35,
      "totalAthletes": 120,
      "totalMedals": 162,
      "category": "Multi-discipline",
      "season": "Summer",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Curling",
      "avgMedalsPerAthlete": 1.28,
      "totalAthletes": 140,
      "totalMedals": 179,
      "category": "Ice Sports",
      "season": "Winter",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Tennis",
      "avgMedalsPerAthlete": 1.21,
      "totalAthletes": 240,
      "totalMedals": 290,
      "category": "Racquet",
      "season": "Summer",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Beach Volleyball",
      "avgMedalsPerAthlete": 1.15,
      "totalAthletes": 140,
      "totalMedals": 161,
      "category": "Team",
      "season": "Summer",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Water Polo",
      "avgMedalsPerAthlete": 0.98,
      "totalAthletes": 280,
      "totalMedals": 274,
      "category": "Team",
      "season": "Summer",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Handball",
      "avgMedalsPerAthlete": 0.89,
      "totalAthletes": 360,
      "totalMedals": 320,
      "category": "Team",
      "season": "Summer",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Basketball",
      "avgMedalsPerAthlete": 0.82,
      "totalAthletes": 340,
      "totalMedals": 279,
      "category": "Team",
      "season": "Summer",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Volleyball",
      "avgMedalsPerAthlete": 0.79,
      "totalAthletes": 340,
      "totalMedals": 269,
      "category": "Team",
      "season": "Summer",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Field Hockey",
      "avgMedalsPerAthlete": 0.74,
      "totalAthletes": 380,
      "totalMedals": 281,
      "category": "Team",
      "season": "Summer",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Football (Soccer)",
      "avgMedalsPerAthlete": 0.69,
      "totalAthletes": 480,
      "totalMedals": 331,
      "category": "Team",
      "season": "Summer",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Ice Hockey",
      "avgMedalsPerAthlete": 0.65,
      "totalAthletes": 420,
      "totalMedals": 273,
      "category": "Team",
      "season": "Winter",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Rugby Sevens",
      "avgMedalsPerAthlete": 0.61,
      "totalAthletes": 260,
      "totalMedals": 159,
      "category": "Team",
      "season": "Summer",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Skateboarding",
      "avgMedalsPerAthlete": 0.58,
      "totalAthletes": 120,
      "totalMedals": 70,
      "category": "Urban",
      "season": "Summer",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Sport Climbing",
      "avgMedalsPerAthlete": 0.52,
      "totalAthletes": 110,
      "totalMedals": 57,
      "category": "Urban",
      "season": "Summer",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Surfing",
      "avgMedalsPerAthlete": 0.49,
      "totalAthletes": 110,
      "totalMedals": 54,
      "category": "Water Sports",
      "season": "Summer",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Breaking",
      "avgMedalsPerAthlete": 0.45,
      "totalAthletes": 90,
      "totalMedals": 41,
      "category": "Urban",
      "season": "Summer",
      "yieldCategory": "Low-Yield"
    },
    {
      "sport": "Ski Mountaineering",
      "avgMedalsPerAthlete": 0.42,
      "totalAthletes": 85,
      "totalMedals": 36,
      "category": "Snow Sports",
      "season": "Winter",
      "yieldCategory": "Low-Yield"
    }
  ],
  "countries": [
    {
      "country": "United States",
      "code": "USA",
      "region": "North America",
      "totalMedals": 735,
      "gold": 284,
      "silver": 242,
      "bronze": 209,
      "investmentM": 920.0,
      "efficiencyScore": 38.5,
      "efficiencyRank": 28,
      "status": "Global Leader"
    },
    {
      "country": "China",
      "code": "CHN",
      "region": "Europe/Asia",
      "totalMedals": 696,
      "gold": 275,
      "silver": 218,
      "bronze": 203,
      "investmentM": 850.0,
      "efficiencyScore": 42.1,
      "efficiencyRank": 21,
      "status": "Global Leader"
    },
    {
      "country": "Great Britain",
      "code": "GBR",
      "region": "Europe/Asia",
      "totalMedals": 442,
      "gold": 164,
      "silver": 152,
      "bronze": 126,
      "investmentM": 540.0,
      "efficiencyScore": 44.8,
      "efficiencyRank": 16,
      "status": "Top Tier"
    },
    {
      "country": "Germany",
      "code": "GER",
      "region": "Europe/Asia",
      "totalMedals": 485,
      "gold": 172,
      "silver": 168,
      "bronze": 145,
      "investmentM": 590.0,
      "efficiencyScore": 43.2,
      "efficiencyRank": 19,
      "status": "Top Tier"
    },
    {
      "country": "Russia / ROC",
      "code": "RUS",
      "region": "Europe/Asia",
      "totalMedals": 520,
      "gold": 188,
      "silver": 174,
      "bronze": 158,
      "investmentM": 610.0,
      "efficiencyScore": 45.1,
      "efficiencyRank": 15,
      "status": "Top Tier"
    },
    {
      "country": "France",
      "code": "FRA",
      "region": "Europe/Asia",
      "totalMedals": 395,
      "gold": 135,
      "silver": 132,
      "bronze": 128,
      "investmentM": 490.0,
      "efficiencyScore": 43.6,
      "efficiencyRank": 18,
      "status": "Top Tier"
    },
    {
      "country": "Australia",
      "code": "AUS",
      "region": "Oceania",
      "totalMedals": 388,
      "gold": 138,
      "silver": 135,
      "bronze": 115,
      "investmentM": 475.0,
      "efficiencyScore": 41.5,
      "efficiencyRank": 23,
      "status": "Top Tier"
    },
    {
      "country": "Japan",
      "code": "JPN",
      "region": "Europe/Asia",
      "totalMedals": 365,
      "gold": 130,
      "silver": 115,
      "bronze": 120,
      "investmentM": 450.0,
      "efficiencyScore": 44.2,
      "efficiencyRank": 17,
      "status": "Top Tier"
    },
    {
      "country": "Italy",
      "code": "ITA",
      "region": "Europe/Asia",
      "totalMedals": 340,
      "gold": 112,
      "silver": 118,
      "bronze": 110,
      "investmentM": 420.0,
      "efficiencyScore": 43.9,
      "efficiencyRank": 18,
      "status": "Major Contender"
    },
    {
      "country": "Netherlands",
      "code": "NED",
      "region": "Europe/Asia",
      "totalMedals": 285,
      "gold": 105,
      "silver": 98,
      "bronze": 82,
      "investmentM": 290.0,
      "efficiencyScore": 51.2,
      "efficiencyRank": 9,
      "status": "High Efficiency"
    },
    {
      "country": "South Korea",
      "code": "KOR",
      "region": "Europe/Asia",
      "totalMedals": 275,
      "gold": 98,
      "silver": 92,
      "bronze": 85,
      "investmentM": 310.0,
      "efficiencyScore": 47.3,
      "efficiencyRank": 12,
      "status": "Major Contender"
    },
    {
      "country": "Canada",
      "code": "CAN",
      "region": "North America",
      "totalMedals": 295,
      "gold": 94,
      "silver": 102,
      "bronze": 99,
      "investmentM": 360.0,
      "efficiencyScore": 42.8,
      "efficiencyRank": 20,
      "status": "Major Contender"
    },
    {
      "country": "Brazil",
      "code": "BRA",
      "region": "South America",
      "totalMedals": 128,
      "gold": 38,
      "silver": 44,
      "bronze": 46,
      "investmentM": 145.0,
      "efficiencyScore": 52.4,
      "efficiencyRank": 8,
      "status": "Regional Leader"
    },
    {
      "country": "Kenya",
      "code": "KEN",
      "region": "Africa",
      "totalMedals": 98,
      "gold": 36,
      "silver": 34,
      "bronze": 28,
      "investmentM": 42.0,
      "efficiencyScore": 68.4,
      "efficiencyRank": 1,
      "status": "Super Overperformer"
    },
    {
      "country": "Jamaica",
      "code": "JAM",
      "region": "North America",
      "totalMedals": 84,
      "gold": 31,
      "silver": 29,
      "bronze": 24,
      "investmentM": 38.0,
      "efficiencyScore": 65.2,
      "efficiencyRank": 2,
      "status": "Super Overperformer"
    },
    {
      "country": "Ethiopia",
      "code": "ETH",
      "region": "Africa",
      "totalMedals": 58,
      "gold": 23,
      "silver": 16,
      "bronze": 19,
      "investmentM": 26.0,
      "efficiencyScore": 64.8,
      "efficiencyRank": 3,
      "status": "Super Overperformer"
    },
    {
      "country": "Georgia",
      "code": "GEO",
      "region": "Europe/Asia",
      "totalMedals": 42,
      "gold": 12,
      "silver": 14,
      "bronze": 16,
      "investmentM": 21.0,
      "efficiencyScore": 61.9,
      "efficiencyRank": 4,
      "status": "High Overperformer"
    },
    {
      "country": "Slovakia",
      "code": "SVK",
      "region": "Europe/Asia",
      "totalMedals": 38,
      "gold": 13,
      "silver": 14,
      "bronze": 11,
      "investmentM": 22.0,
      "efficiencyScore": 59.5,
      "efficiencyRank": 5,
      "status": "High Overperformer"
    },
    {
      "country": "Colombia",
      "code": "COL",
      "region": "South America",
      "totalMedals": 34,
      "gold": 8,
      "silver": 14,
      "bronze": 12,
      "investmentM": 24.0,
      "efficiencyScore": 55.6,
      "efficiencyRank": 6,
      "status": "High Overperformer"
    },
    {
      "country": "New Zealand",
      "code": "NZL",
      "region": "Oceania",
      "totalMedals": 112,
      "gold": 42,
      "silver": 38,
      "bronze": 32,
      "investmentM": 125.0,
      "efficiencyScore": 53.8,
      "efficiencyRank": 7,
      "status": "High Efficiency"
    },
    {
      "country": "Norway",
      "code": "NOR",
      "region": "Europe/Asia",
      "totalMedals": 265,
      "gold": 118,
      "silver": 78,
      "bronze": 69,
      "investmentM": 280.0,
      "efficiencyScore": 50.8,
      "efficiencyRank": 10,
      "status": "Winter Powerhouse"
    },
    {
      "country": "Cuba",
      "code": "CUB",
      "region": "North America",
      "totalMedals": 142,
      "gold": 48,
      "silver": 46,
      "bronze": 48,
      "investmentM": 85.0,
      "efficiencyScore": 58.2,
      "efficiencyRank": 5,
      "status": "High Efficiency"
    },
    {
      "country": "Hungary",
      "code": "HUN",
      "region": "Europe/Asia",
      "totalMedals": 178,
      "gold": 62,
      "silver": 58,
      "bronze": 58,
      "investmentM": 175.0,
      "efficiencyScore": 48.7,
      "efficiencyRank": 11,
      "status": "Consistent Contender"
    },
    {
      "country": "Ukraine",
      "code": "UKR",
      "region": "Europe/Asia",
      "totalMedals": 148,
      "gold": 38,
      "silver": 42,
      "bronze": 68,
      "investmentM": 120.0,
      "efficiencyScore": 52.1,
      "efficiencyRank": 8,
      "status": "High Efficiency"
    },
    {
      "country": "Spain",
      "code": "ESP",
      "region": "Europe/Asia",
      "totalMedals": 135,
      "gold": 42,
      "silver": 52,
      "bronze": 41,
      "investmentM": 210.0,
      "efficiencyScore": 42.0,
      "efficiencyRank": 22,
      "status": "Major Contender"
    },
    {
      "country": "Sweden",
      "code": "SWE",
      "region": "Europe/Asia",
      "totalMedals": 168,
      "gold": 52,
      "silver": 64,
      "bronze": 52,
      "investmentM": 195.0,
      "efficiencyScore": 45.4,
      "efficiencyRank": 14,
      "status": "Balanced Performer"
    },
    {
      "country": "Poland",
      "code": "POL",
      "region": "Europe/Asia",
      "totalMedals": 118,
      "gold": 32,
      "silver": 38,
      "bronze": 48,
      "investmentM": 140.0,
      "efficiencyScore": 44.5,
      "efficiencyRank": 16,
      "status": "Consistent Contender"
    },
    {
      "country": "Czech Republic",
      "code": "CZE",
      "region": "Europe/Asia",
      "totalMedals": 96,
      "gold": 28,
      "silver": 32,
      "bronze": 36,
      "investmentM": 110.0,
      "efficiencyScore": 46.2,
      "efficiencyRank": 13,
      "status": "Consistent Contender"
    },
    {
      "country": "South Africa",
      "code": "RSA",
      "region": "Africa",
      "totalMedals": 44,
      "gold": 14,
      "silver": 18,
      "bronze": 12,
      "investmentM": 58.0,
      "efficiencyScore": 44.2,
      "efficiencyRank": 17,
      "status": "Emerging Contender"
    },
    {
      "country": "Ecuador",
      "code": "ECU",
      "region": "South America",
      "totalMedals": 12,
      "gold": 4,
      "silver": 4,
      "bronze": 4,
      "investmentM": 9.5,
      "efficiencyScore": 58.9,
      "efficiencyRank": 5,
      "status": "Emerging Overperformer"
    },
    {
      "country": "Argentina",
      "code": "ARG",
      "region": "South America",
      "totalMedals": 32,
      "gold": 8,
      "silver": 11,
      "bronze": 13,
      "investmentM": 45.0,
      "efficiencyScore": 46.8,
      "efficiencyRank": 13,
      "status": "Regional Contender"
    },
    {
      "country": "Iran",
      "code": "IRI",
      "region": "Europe/Asia",
      "totalMedals": 56,
      "gold": 21,
      "silver": 18,
      "bronze": 17,
      "investmentM": 48.0,
      "efficiencyScore": 54.2,
      "efficiencyRank": 7,
      "status": "High Efficiency"
    },
    {
      "country": "Kazakhstan",
      "code": "KAZ",
      "region": "Europe/Asia",
      "totalMedals": 64,
      "gold": 16,
      "silver": 22,
      "bronze": 26,
      "investmentM": 62.0,
      "efficiencyScore": 51.0,
      "efficiencyRank": 10,
      "status": "Strong Contender"
    },
    {
      "country": "Uzbekistan",
      "code": "UZB",
      "region": "Europe/Asia",
      "totalMedals": 48,
      "gold": 18,
      "silver": 11,
      "bronze": 19,
      "investmentM": 40.0,
      "efficiencyScore": 56.4,
      "efficiencyRank": 6,
      "status": "High Overperformer"
    },
    {
      "country": "India",
      "code": "IND",
      "region": "Europe/Asia",
      "totalMedals": 28,
      "gold": 3,
      "silver": 9,
      "bronze": 16,
      "investmentM": 180.0,
      "efficiencyScore": 28.5,
      "efficiencyRank": 45,
      "status": "High Potential / Developing"
    },
    {
      "country": "Turkey",
      "code": "TUR",
      "region": "Europe/Asia",
      "totalMedals": 52,
      "gold": 18,
      "silver": 16,
      "bronze": 18,
      "investmentM": 75.0,
      "efficiencyScore": 46.2,
      "efficiencyRank": 13,
      "status": "Regional Contender"
    },
    {
      "country": "Denmark",
      "code": "DEN",
      "region": "Europe/Asia",
      "totalMedals": 68,
      "gold": 22,
      "silver": 24,
      "bronze": 22,
      "investmentM": 82.0,
      "efficiencyScore": 48.1,
      "efficiencyRank": 12,
      "status": "High Efficiency"
    },
    {
      "country": "Switzerland",
      "code": "SUI",
      "region": "Europe/Asia",
      "totalMedals": 134,
      "gold": 46,
      "silver": 44,
      "bronze": 44,
      "investmentM": 165.0,
      "efficiencyScore": 45.8,
      "efficiencyRank": 14,
      "status": "Winter / Summer Balanced"
    },
    {
      "country": "Austria",
      "code": "AUT",
      "region": "Europe/Asia",
      "totalMedals": 122,
      "gold": 38,
      "silver": 42,
      "bronze": 42,
      "investmentM": 150.0,
      "efficiencyScore": 46.0,
      "efficiencyRank": 14,
      "status": "Winter Contender"
    },
    {
      "country": "Croatia",
      "code": "CRO",
      "region": "Europe/Asia",
      "totalMedals": 48,
      "gold": 16,
      "silver": 17,
      "bronze": 15,
      "investmentM": 42.0,
      "efficiencyScore": 53.6,
      "efficiencyRank": 7,
      "status": "High Efficiency"
    }
  ],
  "regionalEfficiency": [
    {
      "region": "South America",
      "efficiencyPct": 49.64,
      "totalMedals": 248,
      "investmentM": 298.5,
      "participatingNations": 10,
      "keyStrength": "Combat, Track, Sailing"
    },
    {
      "region": "Europe/Asia",
      "efficiencyPct": 45.98,
      "totalMedals": 4820,
      "investmentM": 5420.0,
      "participatingNations": 42,
      "keyStrength": "Aquatics, Precision, Ice & Snow"
    },
    {
      "region": "Africa",
      "efficiencyPct": 42.15,
      "totalMedals": 312,
      "investmentM": 320.0,
      "participatingNations": 18,
      "keyStrength": "Distance Running, Boxing"
    },
    {
      "region": "Oceania",
      "efficiencyPct": 38.7,
      "totalMedals": 524,
      "investmentM": 625.0,
      "participatingNations": 4,
      "keyStrength": "Swimming, Rowing, Cycling"
    },
    {
      "region": "North America",
      "efficiencyPct": 35.4,
      "totalMedals": 1284,
      "investmentM": 1485.0,
      "participatingNations": 6,
      "keyStrength": "Track, Swimming, Gymnastics"
    }
  ],
  "yearlyTrends": [
    {
      "year": 1992,
      "season": "Summer/Winter",
      "hostCity": "Barcelona / Albertville",
      "totalMedals": 310,
      "summerMedals": 257,
      "winterMedals": 53,
      "hostNationMedals": 22
    },
    {
      "year": 1994,
      "season": "Winter",
      "hostCity": "Lillehammer",
      "totalMedals": 314,
      "summerMedals": 0,
      "winterMedals": 61,
      "hostNationMedals": 26
    },
    {
      "year": 1996,
      "season": "Summer",
      "hostCity": "Atlanta",
      "totalMedals": 320,
      "summerMedals": 271,
      "winterMedals": 0,
      "hostNationMedals": 101
    },
    {
      "year": 1998,
      "season": "Winter",
      "hostCity": "Nagano",
      "totalMedals": 318,
      "summerMedals": 0,
      "winterMedals": 68,
      "hostNationMedals": 10
    },
    {
      "year": 2000,
      "season": "Summer",
      "hostCity": "Sydney",
      "totalMedals": 305,
      "summerMedals": 300,
      "winterMedals": 5,
      "hostNationMedals": 58
    },
    {
      "year": 2002,
      "season": "Winter",
      "hostCity": "Salt Lake City",
      "totalMedals": 316,
      "summerMedals": 0,
      "winterMedals": 78,
      "hostNationMedals": 34
    },
    {
      "year": 2004,
      "season": "Summer",
      "hostCity": "Athens",
      "totalMedals": 318,
      "summerMedals": 301,
      "winterMedals": 0,
      "hostNationMedals": 16
    },
    {
      "year": 2006,
      "season": "Winter",
      "hostCity": "Torino",
      "totalMedals": 325,
      "summerMedals": 0,
      "winterMedals": 84,
      "hostNationMedals": 11
    },
    {
      "year": 2008,
      "season": "Summer",
      "hostCity": "Beijing",
      "totalMedals": 335,
      "summerMedals": 302,
      "winterMedals": 0,
      "hostNationMedals": 100
    },
    {
      "year": 2010,
      "season": "Winter",
      "hostCity": "Vancouver",
      "totalMedals": 330,
      "summerMedals": 0,
      "winterMedals": 86,
      "hostNationMedals": 26
    },
    {
      "year": 2012,
      "season": "Summer",
      "hostCity": "London",
      "totalMedals": 340,
      "summerMedals": 302,
      "winterMedals": 0,
      "hostNationMedals": 65
    },
    {
      "year": 2014,
      "season": "Winter",
      "hostCity": "Sochi",
      "totalMedals": 342,
      "summerMedals": 0,
      "winterMedals": 98,
      "hostNationMedals": 33
    },
    {
      "year": 2016,
      "season": "Summer",
      "hostCity": "Rio de Janeiro",
      "totalMedals": 350,
      "summerMedals": 306,
      "winterMedals": 0,
      "hostNationMedals": 19
    },
    {
      "year": 2018,
      "season": "Winter",
      "hostCity": "PyeongChang",
      "totalMedals": 345,
      "summerMedals": 0,
      "winterMedals": 102,
      "hostNationMedals": 17
    },
    {
      "year": 2020,
      "season": "Summer",
      "hostCity": "Tokyo (2021)",
      "totalMedals": 363,
      "summerMedals": 339,
      "winterMedals": 0,
      "hostNationMedals": 58
    },
    {
      "year": 2022,
      "season": "Winter",
      "hostCity": "Beijing",
      "totalMedals": 352,
      "summerMedals": 0,
      "winterMedals": 109,
      "hostNationMedals": 15
    },
    {
      "year": 2024,
      "season": "Summer",
      "hostCity": "Paris",
      "totalMedals": 348,
      "summerMedals": 329,
      "winterMedals": 0,
      "hostNationMedals": 64
    },
    {
      "year": 2026,
      "season": "Winter",
      "hostCity": "Milano-Cortina",
      "totalMedals": 334,
      "summerMedals": 0,
      "winterMedals": 116,
      "hostNationMedals": 28
    }
  ],
  "hostNations": [
    {
      "hostNation": "Japan",
      "hostEdition": "Tokyo 1964/2020 & Nagano 1998",
      "homeMedals": 105,
      "awayAvgMedals": 38,
      "boostPct": 176.3,
      "flag": "\ud83c\uddef\ud83c\uddf5"
    },
    {
      "hostNation": "United States",
      "hostEdition": "Atlanta 1996 & Salt Lake 2002",
      "homeMedals": 100,
      "awayAvgMedals": 74,
      "boostPct": 35.1,
      "flag": "\ud83c\uddfa\ud83c\uddf8"
    },
    {
      "hostNation": "China",
      "hostEdition": "Beijing 2008 & Beijing 2022",
      "homeMedals": 93,
      "awayAvgMedals": 56,
      "boostPct": 66.1,
      "flag": "\ud83c\udde8\ud83c\uddf3"
    },
    {
      "hostNation": "Great Britain",
      "hostEdition": "London 2012",
      "homeMedals": 65,
      "awayAvgMedals": 41,
      "boostPct": 58.5,
      "flag": "\ud83c\uddec\ud83c\udde7"
    },
    {
      "hostNation": "France",
      "hostEdition": "Paris 2024 & Albertville 1992",
      "homeMedals": 64,
      "awayAvgMedals": 36,
      "boostPct": 77.8,
      "flag": "\ud83c\uddeb\ud83c\uddf7"
    },
    {
      "hostNation": "Australia",
      "hostEdition": "Sydney 2000",
      "homeMedals": 58,
      "awayAvgMedals": 35,
      "boostPct": 65.7,
      "flag": "\ud83c\udde6\ud83c\uddfa"
    },
    {
      "hostNation": "Italy",
      "hostEdition": "Torino 2006 & Milano-Cortina 2026",
      "homeMedals": 42,
      "awayAvgMedals": 28,
      "boostPct": 50.0,
      "flag": "\ud83c\uddee\ud83c\uddf9"
    },
    {
      "hostNation": "Russia",
      "hostEdition": "Sochi 2014",
      "homeMedals": 33,
      "awayAvgMedals": 24,
      "boostPct": 37.5,
      "flag": "\ud83c\uddf7\ud83c\uddfa"
    },
    {
      "hostNation": "Canada",
      "hostEdition": "Vancouver 2010",
      "homeMedals": 26,
      "awayAvgMedals": 18,
      "boostPct": 44.4,
      "flag": "\ud83c\udde8\ud83c\udde6"
    },
    {
      "hostNation": "Norway",
      "hostEdition": "Lillehammer 1994",
      "homeMedals": 26,
      "awayAvgMedals": 19,
      "boostPct": 36.8,
      "flag": "\ud83c\uddf3\ud83c\uddf4"
    },
    {
      "hostNation": "Brazil",
      "hostEdition": "Rio 2016",
      "homeMedals": 19,
      "awayAvgMedals": 12,
      "boostPct": 58.3,
      "flag": "\ud83c\udde7\ud83c\uddf7"
    },
    {
      "hostNation": "South Korea",
      "hostEdition": "PyeongChang 2018",
      "homeMedals": 17,
      "awayAvgMedals": 11,
      "boostPct": 54.5,
      "flag": "\ud83c\uddf0\ud83c\uddf7"
    },
    {
      "hostNation": "Greece",
      "hostEdition": "Athens 2004",
      "homeMedals": 16,
      "awayAvgMedals": 5,
      "boostPct": 220.0,
      "flag": "\ud83c\uddec\ud83c\uddf7"
    }
  ]
};
