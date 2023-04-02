let repos = "https://api.github.com/users/Jon-117/repos"

fetch(repos)
    .then(response =>response.json())