const sort = (users) => {
    users.sort((a,b) => a.name.localeCompare(b.name));
    console.log(users);
}

export {sort}