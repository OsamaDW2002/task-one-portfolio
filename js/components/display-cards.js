import {repos} from "../../assets/data/repos.js";

const projects = document.getElementById('projects');

repos.forEach((repo)=>{
    const card = document.createElement("div");
    card.onclick = () => {
        window.open(repo.link, "_blank");
    };
    card.classList.add("card");
    card.innerHTML = `
        <img loading="lazy" src="${repo.image}" alt="The repo image of Osama's portfolio cards">
        <div>
            <p>${repo.title}</p>
            <p>${repo.description}</p>
            <a href="${repo.link}" target="_blank">Visit Repo</a>
        </div>
    `;
    projects.appendChild(card);
})

