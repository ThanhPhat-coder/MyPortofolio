const projectData = {
    title: "Projects",
    subtitle:
        "Explore some of the works I've built — from slick frontend UIs, powerful backend APIs, to fullstack apps connected with real-time databases.",

    projects: [
        {
            icon: "bx bx-food-menu",
            title: "Meal Planner",
            type: "Frontend",
            features: [
                "Mock Auth & User Profiles",
                "Recipe CRUD (Create, Edit, Delete)",
                "Drag-and-drop Meal Planner",
                "Search, filter & sort recipes",
                "Comment & reply system",
                "5-star rating system",
                "Dark/Light mode toggle",
                "Responsive design (mobile/tablet/desktop)",
                "LocalStorage & mock API support",
                "Nutritional summary for meals"
            ]
            ,
            tech: ["React"],
            year: 2025,
            status: "Completed",
            demo: "https://myrecipes-app.vercel.app/",
            github: "https://github.com/ThanhPhat-coder/MealPlanner_Ver2"
        },
        {
            icon: "bx bx-id-card",
            title: "Personal Portfolio",
            type: "Frontend",
            features: [
                "Tailwind CSS",
                "Dark/light mode",
                "Animated tabs",
                "Project & skill showcase"
            ],
            tech: ["React", "Tailwind"],
            year: 2025,
            status: "Completed",
            demo: "#home",
            github: "https://github.com/ThanhPhat-coder/MyPortofolio"
        },
        {
            icon: "bx bx-food-menu",
            title: "MyRecipe",
            type: "Frontend + Backend",
            features: [
                "Weekly and monthly meal planning",
                "Drag-and-drop meal scheduling",
                "Personalized meal creation",
                "Overview of planned meals",
                "Efficient diet organization",
                "User-friendly and responsive UI"
            ]
            ,
            tech: ["React", "Express", "Node.js"],
            year: 2025,
            status: "Completed",
            demo: "#home",
            github: "https://github.com/ThanhPhat-coder/PlaningMealWebSite"
        },

        {
            icon: "bx bx-money",
            title: "Money Management",
            type: "Frontend",
            features: [
                "Exchange rate API",
                "Real-time currency change",
                "Simple UX",
                "Mobile responsive"
            ],
            tech: ["React"],
            year: 2025,
            status: "Completed",
            demo: "#home",
            github: "#home"
        },
        {
            icon: "bx bx-keyboard",
            title: "10FastFingers",
            type: "Frontend",
            features: [
                "Real-time typing speed test",
                "WPM (words per minute) calculation",
                "Timer countdown & word generator",
                "Typing accuracy tracking",
                "Responsive design for all devices"
            ],
            tech: ["HTML", "CSS", "JavaScript"],
            year: 2024,
            status: "Completed",
            demo: "#home",
            github: "https://github.com/ThanhPhat-coder/10-fast-finger"
        },
        {
            icon: "bx bx-movie-play",
            title: "Movie Booking App",
            type: "Mobile App (Frontend)",
            features: [
                "Browse and search movies using TMDb API",
                "View movie details, ratings, and trailers",
                "Select showtimes and book tickets",
                "Add movies to favorites",
                "Persist data using AsyncStorage",
                "Modern and responsive mobile UI"
            ],
            tech: ["React Native", "TMDb API", "AsyncStorage"],
            year: 2025,
            status: "Completed",
            demo: "#home",
            github: "https://github.com/ThanhPhat-coder/MovieBookingApp"
        },
        {
            icon: "bx bx-cart",
            title: "Item Cart",
            type: "Frontend",
            features: [
                "Add, remove, and update items in cart",
                "Real-time total price calculation",
                "Quantity adjustment with validation",
                "Responsive and modular UI components",
                "State management with Angular services"
            ],
            tech: ["Angular", "SCSS", "TypeScript"],
            year: 2025,
            status: "Completed",
            demo: "#home",
            github: "https://github.com/ThanhPhat-coder/item-cart_angular"
        }




    ]
};

export default projectData;
