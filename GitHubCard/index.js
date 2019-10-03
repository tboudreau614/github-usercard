/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'tboudreau614',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

followersArray.forEach(item => {
  axios.get(`https://api.github.com/users/${item}`)
    .then(response =>{
      const newCards = cardBuild(response.data);
      profile.appendChild(newCards);
    })
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

axios.get('https://api.github.com/users/tboudreau614')
.then(function (response) {
  console.log(response);
})
.catch(function(error) {
  console.log(error);
})
.finally(function(){
});

const profile = document.querySelector('.cards');

//function start

function cardBuild (arr) {
    const divCard = document.createElement('div');
    const userImg = document.createElement('img')
    const cardInfo = document.createElement('div');
    const cardName = document.createElement('h3');
    const userName = document.createElement('p')
    const userLocation = document.createElement('p');
    const userProfile = document.createElement('p')
    const pageLink = document.createElement('a');
    const followers = document.createElement('p')
    const following = document.createElement('p');
    const userBio = document.createElement('p')

    //appends (elem attach)

    profile.appendChild(divCard);
    divCard.appendChild(userImg);
    divCard.appendChild(cardInfo);
    cardInfo.appendChild(cardName);
    cardInfo.appendChild(userName);
    cardInfo.appendChild(userLocation);
    cardInfo.appendChild(userProfile);
    cardInfo.appendChild(followers);
    cardInfo.appendChild(following);
    cardInfo.appendChild(userBio);
    userProfile.appendChild(pageLink);

    //classLists

    divCard.classList.add('card');
    cardInfo.classList.add('card-info');
    cardName.classList.add('name');
    userName.classList.add('username');

    //content

    userImg.src = arr.avatar_url;
    cardName.textContent = arr.name;
    userName.textContent = arr.login;
    userLocation.textContent = `Location: ${arr.location}`;
    userProfile.textContent = `Profile: `;
    pageLink.href = arr.html_url;
    userProfile.textContent = `Profile: ${pageLink.href}`;
    followers.textContent = `Followers: ${arr.followers}`;
    following.textContent = `Following: ${arr.following}`;
    userBio.textContent = `Bio: ${arr.bio}`;

  return divCard

}

console.log(cardBuild);

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
