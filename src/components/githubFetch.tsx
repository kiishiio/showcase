import React from "react";
import { data } from "react-router-dom";

export const fetchRepos = async (name: string) => { //fetches repos
    const response = await fetch(`https://api.github.com/users/${name}/repos`);
    const data = await response.json();
    return data;
}

export const fetchRepoContents = async (repo: string, name: string) => {
    const response = await fetch(`https://api.github.com/repos/${name}/${repo}/contents/`)
    const data = await response.json();
    return data;
}

export const getCachedRepos = () => {
    const cached = sessionStorage.getItem("repos");
    return cached ? JSON.parse(cached) : null;
}