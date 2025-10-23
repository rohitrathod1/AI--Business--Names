<div align="center">
 
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-2B6CB0?style=for-the-badge&logo=shadcnui&logoColor=white)
![Gemini](https://img.shields.io/badge/Gemini-1F2D3D?style=for-the-badge&logo=app-store&logoColor=white)

<h3 align="center">🤖 AI-Powered Business Name Generator</h3>

<div align="center">
Build AI-powered business name generator using <b>Next.js, Shadcn UI, TailwindCSS, Gemini.</b> Watch step-by-step video tutorial on <a href="https://www.youtube.com/@developergoswami/videos" target="_blank"><b>Developer Goswami</b></a> YouTube channel. Make sure to subscribe for more great content!
</div>

</div>

## 📋 Table of Contents

1. 🙋 [About the Creator](#about-the-creator)
2. 🤖 [Introduction](#introduction)
3. ⚙️ [Tech Stack](#tech-stack)
4. 📃 [Features](#features)
5. 🏗️ [Workflow](#workflow)
6. 🕸️ [Snippets](#snippets)
7. 🔗 [Resources](#resources)
8. 📌 [Future Enhancements](#future-enhancements)

## 🙋 About The Creator

Hi there! 👋 I'm Developer Goswami, a passionate software developer and tech enthusiast dedicated to helping others learn and grow in web development.  

I create beginner-friendly tutorials and in-depth coding videos on my [YouTube channel](https://www.youtube.com/@developergoswami), covering technologies like Next.js, React, TailwindCSS, PHP, Laravel, and more. My mission is to simplify complex topics and empower developers to build amazing projects with confidence.  

🌟 Why Follow Me?  
- 💻 Practical Tutorials: Build real-world projects.  
- 🧑‍🏫 Beginner-Friendly Approach: Step-by-step guidance.  
- 📚 Free Resources: Open-source code with explanations.  
- 🚀 Focus on Growth: Tips, tricks, and best practices.  

### Connect with Me
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rohit-rathod-163292333/)
[![Instagram](https://img.shields.io/badge/Instagram-E1306C?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/rohitrathod1592/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)]([https://github.com/Goswami2021Vaibhav](https://github.com/rohitrathod1))

## 🤖 Introduction

AI Business Name Generator is a responsive web application that helps entrepreneurs, startups, and small businesses generate unique and creative business names using AI. The application integrates domain availability checking to ensure the selected names are ready for online use.  

It is beginner-friendly, fully responsive, and uses AI technology to provide meaningful suggestions based on the user’s input.

## ⚙️ Tech Stack

- **Next.js**: Fast and scalable web application framework.  
- **TailwindCSS**: For responsive and visually appealing UI.  
- **Shadcn UI**: Modern, accessible components for smooth development.  
- **Gemini**: Google Generative AI integration for AI-powered name generation.  
- **JavaScript**: Core programming language for interactivity.  

## 📃 Features

- **AI-Powered Name Generation**: Generate unique business names tailored to your input.  
- **Domain Name Availability Check**: Instantly verify if a domain is available.  
- **Customizable Options**: Choose name style and randomness for personalized results.  
- **Responsive Design**: Optimized for desktop, tablet, and mobile.  
- **Clean & Interactive UI**: Hover effects and interactive elements.  
- **Infinite Scrolling**: Load more suggestions dynamically as you scroll.  

## 🏗️ Workflow

1. **Input Collection**: Users provide a keyword and description.  
2. **Customization**: Select Name Style (Modern, Classic, Quirky) and Randomness (Low, Medium, High).  
3. **AI Generation**: Gemini API generates multiple business names.  
4. **Infinite Scrolling**: Additional names load automatically as the user scrolls.  
5. **Domain Status Check**: Click a name to verify domain availability.  

## 🕸️ Snippets

<details>
<summary><code>helpers/constant.js</code></summary>

```js
export const nameStyle = [
  { id: 1, name: "Auto", description: "All Styles" },
  { id: 2, name: "Brandable", description: "like Google and Rolex" },
  { id: 3, name: "Evocative", description: "like RedBull and Forever21" },
  { id: 4, name: "Short Phrase", description: "like Dollar shave club" },
  { id: 5, name: "Compound Words", description: "like FedEx and Microsoft" },
  { id: 6, name: "Alternate Spelling", description: "like Lyft and Fiverr" },
  { id: 7, name: "Non-English Words", description: "like Toyota and Audi" },
  { id: 8, name: "Real Words", description: "like Apple and Amazon" },
];
export const Randomness = [
  { id: 1, name: "Low", description: "Less random. The most direct name ideas" },
  { id: 2, name: "Medium", description: "Balanced. More creative results" },
  { id: 3, name: "High", description: "Random ideas. More varied results" },
];
</details> <details> <summary><code>helpers/function.js</code></summary>
export const generatePrompt = (inputs) => {
    const prompt = `Hey gemini! i need your help in generating business name. i have name style, randomness and brand info so use these information to generate business name.
  
  here are inputs: 
  
  -Name Style: ${inputs?.nameStyle || "Auto"}
  -Randomness: ${inputs?.randomness || "Low"}
  -Brand Info: keyword: ${inputs?.keyword || "Coding"} & description:  ${inputs?.description || "A Coding YouTube Channel"}
  
  ### Requirements:
  - Provide 20 unique business names based on the inputs.
  - Format the response in JSON, including:
   - 'nameStyle': The style of the generated name.
   - 'randomness': The level of randomness used.
   - 'keyword': The provided keyword.
   - 'description': The provided brand description.
   - 'names': An array of suggested business names.
  
  Names I have: ${inputs.names || []}
  
  `;
    return prompt;
};

</details>
🔗 Resources

Google AI Studio: Google AI Studio

Domain Availability API: Domain Availability API

📌 Future Enhancements

Social media handle availability check.

Filter names by industry or niche.

Export generated names to CSV or PDF.

Advanced AI suggestions using more parameters.

