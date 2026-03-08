# React Job Listings UI ⚛️

This project is a small React UI built to practice **props drilling and dynamic rendering of components** using data.

The application displays multiple job cards by passing job-related information from a parent component to child components.

---

## 📚 Purpose

The main purpose of this project is to understand how **data flows in React** and how **props are used to pass information between components**.

Instead of hardcoding UI elements, job data is stored in an array of objects and dynamically rendered using React components.

---

## 🧠 Concepts Practiced

### 1️⃣ Props in React

Props are used to pass data from a **parent component to a child component**.

Example:

```javascript
<Card 
  company={elem.companyName}
  datePosted={elem.datePosted}
  post={elem.post}
  tag1={elem.tag1}
  tag2={elem.tag2}
  pay={elem.pay}
  location={elem.location}
  brandLogo={elem.brandLogo}
/>
```

The parent component (`App`) sends job information to the `Card` component using props.

---

### 2️⃣ Props Drilling

Props drilling happens when data is passed through components so that child components can access it.

In this project, the **job data stored in the parent component is passed down to the card component**, which uses the data to render job details.

---

### 3️⃣ Dynamic Rendering with `.map()`

Instead of manually creating multiple components, the UI is generated dynamically using `.map()`.

Example:

```javascript
jobOpenings.map((elem, idx) => {
  return <Card key={idx} ... />
})
```

This allows multiple job cards to be rendered from a single data source.

---

## ⚙️ Technologies Used

* React
* JavaScript (ES6)
* TailwindCSS
* Vite
* Remix Icon

---

## 🚀 How to Run the Project

Clone the repository

```bash
git clone https://github.com/your-username/react.git
```

Navigate into the project folder

```bash
cd react
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

---

## 🎯 Learning Outcome

Through this project I practiced:

* Passing data using **props**
* Understanding **props drilling**
* Rendering UI dynamically with **map()**
* Structuring React components
* Building reusable UI components

---

This project is part of my **React learning journey**, where I build small applications to strengthen my understanding of React concepts.
