import React from 'react'
import Card from './components/Card';
const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1WejKct0b3Zjuq3J4HkrwQw2UdFPs4k7sOZtpivpT742QpmHUbYQSEHSvLB_m37OwF7s&usqp=CAU",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://www.freeiconspng.com/uploads/amazon-icon-3.png",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpoGhnWW9wN-P9X7Ckt3y0snA59WDlcsjeHg&s",
    companyName: "Apple",
    datePosted: "10 days ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://i.ytimg.com/vi/GV3HUDMQ-F8/sddefault.jpg",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://fabrikbrands.com/wp-content/uploads/Tesla-Logo-1.png",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://media.designrush.com/inspiration_images/134780/conversions/_1521201654_259_UberLogoDesign-mobile.jpg",
    companyName: "Uber",
    datePosted: "2 days ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-0sgMITwNqzwWbNZfDxjhGmmje755YgLHQ&s",
    companyName: "Airbnb",
    datePosted: "3 weeks ago",
    post: "JavaScript Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://www.logo.wine/a/logo/Spotify/Spotify-Icon-Logo.wine.svg",
    companyName: "Spotify",
    datePosted: "1 week ago",
    post: "Web Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$46/hr",
    location: "Stockholm, Sweden"
  }
];

console.log(jobOpenings)
  return (
    <div className='parent'>
     {jobOpenings.map(function(elem , idx){
      return <div key={idx}>
        <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post}
        tag1 = {elem.tag1} brandLogo = {elem.brandLogo} pay={elem.pay} tag2={elem.tag2}
        location = {elem.location}
      />
      </div>
     })}
    </div>
  )
}

export default App
