📸 React Image Gallery with Pagination

A modern React application that fetches images from the Picsum API and displays them in a responsive card layout with pagination support. Users can navigate between pages to explore different images dynamically.

This project demonstrates the use of React Hooks, API integration, and component-based architecture.

🚀 Features

Fetch images from a public API

Pagination with Next / Previous navigation

Responsive card layout

Loading state while fetching data

Clean component structure

Built with modern React practices

🛠️ Tech Stack

React.js

JavaScript (ES6+)

Axios – for API requests

Tailwind CSS – for styling

Picsum API – for random images

📂 Project Structure
project-folder
│
├── src
│   ├── components
│   │   └── Card.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│
├── package.json
└── README.md
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/react-image-gallery.git
2️⃣ Navigate to project directory
cd react-image-gallery
3️⃣ Install dependencies
npm install
4️⃣ Run the development server
npm run dev

The app will run on:

http://localhost:5173
📡 API Used

This project uses the Picsum Photos API to fetch images.

Example API endpoint:

https://picsum.photos/v2/list?page=1&limit=15
🧠 Concepts Used

This project demonstrates several important React concepts:

useState – for managing component state

useEffect – for performing side effects like API calls

Component Reusability

Conditional Rendering

Pagination Logic

Async / Await with Axios

📸 How It Works

When the page loads, the app fetches 15 images from the Picsum API.

Images are displayed using a reusable Card component.

Users can navigate using:

Next button → loads next page

Prev button → loads previous page

A loading message is displayed while new data is being fetched.

🔮 Future Improvements

Possible enhancements for the project:

Image modal preview

Infinite scrolling

Image search functionality

Favorites / bookmark feature

Skeleton loading animation

Lazy loading images

👨‍💻 Author

Shubham Chandrakar

BCA Student

Frontend Developer

Passionate about Web Development and Problem Solving

🔗 LinkedIn
https://www.linkedin.com/in/shubham-chandrakar-26280125a

⭐ Support

If you like this project, consider giving it a ⭐ on GitHub. It helps others discover the project!