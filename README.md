<div align="center">
 
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-2B6CB0?style=for-the-badge&logo=shadcnui&logoColor=white)
![Gemini](https://img.shields.io/badge/Gemini-1F2D3D?style=for-the-badge&logo=app-store&logoColor=white)

<h3 align="center">🤖 AI-Powered Business Name Generator</h3>

<div align="center">
Build AI-powered business name generator using <b><a href="https://nextjs.org/" target="_blank">Next.js</a>, <a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a>, <a href="https://ui.shadcn.com/" target="_blank">Shadcn UI</a>, <a href="https://aistudio.google.com/" target="_blank">Gemini</a></b>
</div>

</div>

## 📋 Table of Contents

1. 🙋 [About the Developer](#about-the-developer)
2. 🤖 [Introduction](#introduction)
3. ⚙️ [Tech Stack](#tech-stack)
4. 📃 [Features](#features)
5. 🏗️ [Workflow](#workflow)
6. 🕸️ [Snippets](#snippets)
7. 🔗 [Resources](#resources)
8. 📌 [Future Enhancements](#future-enhancements)

## 🙋 About the Developer

Hi there! 👋 I'm **Rohit Rathod**, a passionate software developer dedicated to building modern web applications and AI-powered tools.  

I focus on clean, responsive, and interactive user interfaces while integrating cutting-edge technologies like AI APIs. My goal is to create practical and beginner-friendly projects that help other developers learn and grow.  

### Connect with Me
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rohit-rathod-163292333/)
[![Instagram](https://img.shields.io/badge/Instagram-E1306C?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/rohitrathod1592/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rohitrathod1)

## 🤖 Introduction

AI Business Name Generator is a fully responsive web application that helps entrepreneurs, startups, and small businesses generate unique and creative business names using AI.  

- Generates multiple unique business name suggestions.  
- Checks domain availability instantly.  
- Provides options to customize name style and randomness.  
- Beginner-friendly, clean code, and fully responsive UI.  

## ⚙️ Tech Stack

- **[Next.js](https://nextjs.org/)**: Fast and scalable web application framework.  
- **[TailwindCSS](https://tailwindcss.com/)**: Responsive and visually appealing UI.  
- **[Shadcn UI](https://ui.shadcn.com/)**: Modern, accessible components.  
- **[Gemini](https://aistudio.google.com/)**: AI-powered business name generation.  
- **JavaScript**: Core language for interactivity and logic.  

## 📃 Features

- **AI-Powered Name Generation**: Generate unique business names tailored to your input.  
- **Domain Name Availability Check**: Instantly verify if a domain is available.  
- **Customizable Options**: Choose name style and randomness for personalized results.  
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.  
- **Clean & Interactive UI**: Hover effects and dynamic elements.  
- **Infinite Scrolling**: Load more suggestions dynamically.  

## 🏗️ Workflow

1. **Input Collection**: Users provide a keyword and brand description.  
2. **Customization**: Select Name Style (Auto, Brandable, Evocative, Short Phrase, etc.) and Randomness (Low, Medium, High).  
3. **AI Generation**: Gemini API generates multiple business names.  
4. **Infinite Scrolling**: Load additional suggestions dynamically as the user scrolls.  
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
js
Copy code
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
Google AI Studio

Domain Availability API

Next.js Official

TailwindCSS Official

Shadcn UI Official

📌 Future Enhancements
Social media handle availability check.

Filter names by industry or niche.

Export generated names to CSV or PDF.

Advanced AI suggestions using more parameters.
