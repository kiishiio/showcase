import Cookies from "js-cookie";

const fetchRepos = async (name: string) => { //fetches repos
    const response = await fetch(`https://api.github.com/users/${name}/repos`);
    if (!response.ok) throw new Error("github api error");
    const data = await response.json();
    return data;
}

const fetchUser = async (name: string) => {
    const response = await fetch(`https://api.github.com/users/${name}`);
    if (!response.ok) throw new Error("github api error");
    return response.json();
}

export const fetchCacheUser = async (name: string) => {
    const theothercache = Cookies.get("githubUser");
    const cache = theothercache ? JSON.parse(theothercache) : null;
    if (cache) return cache;

    const repo = await fetchUser(name);
    Cookies.set("githubUser", JSON.stringify(repo), {expires: .5})
    return repo;
}

export const fetchCache = async (name: string) => {
    const cache = getCachedRepos();
    if (cache) return cache;

    const repo = await fetchRepos(name);
    Cookies.set("githubRepos", JSON.stringify(repo), {expires: .5})
    return repo;
}

const fetchRepoContents = async (repo: string, name: string) => {
    const response = await fetch(`https://api.github.com/repos/${name}/${repo}/contents/`)
    const data = await response.json();
    return data;
}

const getCachedRepos = () => {
    const cached = Cookies.get("githubRepos");
    return cached ? JSON.parse(cached) : null;
}

export const getRepoContent = async (name: string, repo: string, file: string) => {
    const f = await fetchRepoContents(repo, name);
    const get = f.find((files) => files.name.includes(file));
    
    return get ? get.download_url : null;
  }