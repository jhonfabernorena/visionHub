function addStartup(startups) {
    const container = document.getElementById('startup-container');

    const tarjeta = document.createElement('div');
    tarjeta.classList.add('startup-tarjeta');
    tarjeta.innerHTML = `
        <img src="/Visionhub/img/${startups.Image}" alt="#" class="startup-image">
        <h3 class="startup-name">${startups.Name}</h3>
        <p class="brief-description">${startups.Description}</p>
        <p class="sector">${startups.Sector}</p>
        <p class="country">${startups.Country}</p>
    `;

    container.appendChild(tarjeta);
}
const startups = [
  {
    id: 1,
    Image: "testproyects.jpg",
    Name: "Startup Name 1",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Country: "United States",
    City: "San Francisco",
    Sector: "Technology",
    ProjectType: "Software as a Service",
    BusinessModel: "Subscription",
    SocialImpact: "Environmental sustainability",
    DevelopmentStage: "Early stage",
    FundingRound: "Seed",
    TotalAmountSought: 100000,
    FundingPurpose: "Product development",
    MarginsAndFinances: "Projected profit margin of 30%",
    ROI: "Expected ROI of 3x",
    Stats: {
      Employees: 10,
      Customers: 1000,
      Revenue: 50000,
    },
  },
  {
    id: 2,
    Image: "testproyects.jpg",
    Name: "Startup Name 2",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Country: "United Kingdom",
    City: "London",
    Sector: "Finance",
    ProjectType: "Fintech",
    BusinessModel: "Transaction fees",
    SocialImpact: "Financial inclusion",
    DevelopmentStage: "Growth stage",
    FundingRound: "Series A",
    TotalAmountSought: 500000,
    FundingPurpose: "Expansion",
    MarginsAndFinances: "Average profit margin of 20%",
    ROI: "Expected ROI of 5x",
    Stats: {
      Employees: 20,
      Customers: 500,
      Revenue: 100000,
    },
  },
  {
    id: 3,
    Image: "testproyects.jpg",
    Name: "Startup Name 3",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Country: "Germany",
    City: "Berlin",
    Sector: "Healthcare",
    ProjectType: "MedTech",
    BusinessModel: "SaaS",
    SocialImpact: "Improved patient care",
    DevelopmentStage: "Late stage",
    FundingRound: "Series B",
    TotalAmountSought: 800000,
    FundingPurpose: "Research and development",
    MarginsAndFinances: "Stable revenue growth",
    ROI: "Expected ROI of 7x",
    Stats: {
      Employees: 50,
      Customers: 2000,
      Revenue: 200000,
    },
  },
  {
    id: 4,
    Image: "testproyects.jpg",
    Name: "Startup Name 4",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Country: "France",
    City: "Paris",
    Sector: "Education",
    ProjectType: "EdTech",
    BusinessModel: "Freemium",
    SocialImpact: "Accessible education for all",
    DevelopmentStage: "Early stage",
    FundingRound: "Seed",
    TotalAmountSought: 150000,
    FundingPurpose: "Platform development",
    MarginsAndFinances: "Break-even point expected in 2 years",
    ROI: "Expected ROI of 4x",
    Stats: {
      Employees: 15,
      Customers: 500,
      Revenue: 30000,
    },
  },
  {
    id: 5,
    Image: "testproyects.jpg",
    Name: "Startup Name 5",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Country: "Australia",
    City: "Sydney",
    Sector: "E-commerce",
    ProjectType: "Online marketplace",
    BusinessModel: "Commission-based",
    SocialImpact: "Supporting small businesses",
    DevelopmentStage: "Growth stage",
    FundingRound: "Series A",
    TotalAmountSought: 400000,
    FundingPurpose: "Marketing and expansion",
    MarginsAndFinances: "Profitable operations",
    ROI: "Expected ROI of 6x",
    Stats: {
      Employees: 30,
      Customers: 1000,
      Revenue: 100000,
    },
  },
  {
    id: 6,
    Image: "testproyects.jpg",
    Name: "Startup Name 6",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Country: "Canada",
    City: "Toronto",
    Sector: "FoodTech",
    ProjectType: "Meal delivery service",
    BusinessModel: "Subscription",
    SocialImpact: "Reducing food waste",
    DevelopmentStage: "Early stage",
    FundingRound: "Seed",
    TotalAmountSought: 120000,
    FundingPurpose: "Platform development",
    MarginsAndFinances: "Break-even point expected in 1 year",
    ROI: "Expected ROI of 5x",
    Stats: {
      Employees: 20,
      Customers: 300,
      Revenue: 20000,
    },
  },
  {
    id: 7,
    Image: "testproyects.jpg",
    Name: "Startup Name 7",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Country: "Japan",
    City: "Tokyo",
    Sector: "TravelTech",
    ProjectType: "Booking platform",
    BusinessModel: "Commission-based",
    SocialImpact: "Promoting sustainable tourism",
    DevelopmentStage: "Growth stage",
    FundingRound: "Series B",
    TotalAmountSought: 600000,
    FundingPurpose: "International expansion",
    MarginsAndFinances: "Stable revenue growth",
    ROI: "Expected ROI of 8x",
    Stats: {
      Employees: 40,
      Customers: 2000,
      Revenue: 150000,
    },
  },
  {
    id: 8,
    Image: "testproyects.jpg",
    Name: "Startup Name 8",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Country: "Brazil",
    City: "Sao Paulo",
    Sector: "FashionTech",
    ProjectType: "E-commerce platform",
    BusinessModel: "Dropshipping",
    SocialImpact: "Supporting independent designers",
    DevelopmentStage: "Late stage",
    FundingRound: "Series C",
    TotalAmountSought: 1000000,
    FundingPurpose: "Global expansion",
    MarginsAndFinances: "High-profit margins",
    ROI: "Expected ROI of 10x",
    Stats: {
      Employees: 100,
      Customers: 5000,
      Revenue: 500000,
    },
  },
  {
    id: 9,
    Image: "testproyects.jpg",
    Name: "Startup Name 9",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Country: "China",
    City: "Shanghai",
    Sector: "Renewable Energy",
    ProjectType: "Solar panel manufacturing",
    BusinessModel: "B2B",
    SocialImpact: "Reducing carbon emissions",
    DevelopmentStage: "Late stage",
    FundingRound: "Series D",
    TotalAmountSought: 2000000,
    FundingPurpose: "Factory expansion",
    MarginsAndFinances: "Stable revenue growth",
    ROI: "Expected ROI of 12x",
    Stats: {
      Employees: 200,
      Customers: 10000,
      Revenue: 1000000,
    },
  }
];

for (let i = 0; i < startups.length; i++) {
    addStartup(startups[i]); 
}

const tarjetas = document.querySelectorAll('.startup-tarjeta');


tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
        
        window.location.href = 'index.html'; 
    });
});