const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=500')
        .then(res => res.json())
        .then(data => displayBuddies(data));
}
loadBuddies();

const displayBuddies = data => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById('random-user');
    for(const buddy of buddies){
        console.log(buddy);
        const p = document.createElement('p');
        p.classList.add('user');
        p.innerText = `
        Name: ${buddy.name.first}
        Email: ${buddy.email},Phone: ${buddy.cell}
        Gender: ${buddy.gender}
        Birth-date: ${buddy.dob.date}
        Zone: ${buddy.location.city},${buddy.location.timezone.offset},Latitude: ${buddy.location.coordinates.latitude},State: ${buddy.location.state}, Country: ${buddy.location.country}
        `;
        buddiesDiv.appendChild(p);
    }
}