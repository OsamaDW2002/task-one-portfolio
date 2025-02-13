import {repos} from "../../assets/data/repos.js";

const projects = document.getElementById('projects');

repos.forEach((repo)=>{
    const card = document.createElement("div");
    card.classList.add("card"); // Add a class for styling (optional)

    card.innerHTML = `
        <img loading="lazy" src="${repo.image}" alt="repo image">
        <div>
            <p>${repo.title}</p>
            <p>${repo.description}</p>
            <a href="${repo.link}" target="_blank">Visit Repo</a>
        </div>
    `;
    projects.appendChild(card);
})