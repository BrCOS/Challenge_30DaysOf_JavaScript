//get the card item that matches with our json object from the api
const activity = document.getElementById('activity');
const type = document.getElementById('type');
const participants = document.getElementById('participants');
const price = document.getElementById('price');
const link = document.getElementById('link');
const linkContainer = document.getElementById('link-container');
const list = document.getElementById('list');
const placeholderCard = document.getElementById('placeholder-card');

//save the current activity in localstorage
let currentActivity;

//first let's make the network request to the bored api with the button
const fetchNewActivity = () => {
    //we need to send a get request to the api
    fetch('https://bored.api.lewagon.com/api/activity/')
    .then((res) => res.json())
    .then((data) => {
        activity.innerText = data.activity;
        type.innerText = data.type;
        participants.innerText = data.participants;
        price.innerText = data.price;

         //links are getting too much space from the container, if there is no link we hide the container
        if (data.link.length) {
            link.href = data.link;
            linkContainer.hidden = false;
        } else {
            linkContainer.hidden = true;
      }

        //we can't acces the data var in the returned promise, since it's in a different scope
        //but we can pass it to our empty var created on top of the code
        currentActivity = data;
    })
    .catch((error) => console.log(error));
};

//main button handler
const onBoredClicked = () => {
    fetchNewActivity();
};

//main button
const boredButton = document.getElementById('bored-button');
boredButton.onclick = onBoredClicked;

//nope button handler
const onNopeClicked = () => {
    fetchNewActivity();
};

//nope button
const nopeButton = document.getElementById('nope-button');
nopeButton.onclick = onNopeClicked;

//love it button handler
const onLikeClicked = () => {
    const savedActivitiesString = localStorage.getItem('activities');
    const savedActivities = JSON.parse(savedActivitiesString) ?? [];

    savedActivities.push(currentActivity);//adds the activity to the array

    localStorage.setItem('activities', JSON.stringify(savedActivities));

    fetchNewActivity();
    renderList();
};

const likeButton = document.getElementById('like-button');
likeButton.onclick = onLikeClicked;

const deleteActivity = (key) => {
    const savedActivitiesString = localStorage.getItem('activities');
    const savedActivities = JSON.parse(savedActivitiesString) ?? [];

    const updatedActivities = savedActivities.filter((activity) => activity.key !== key);

    localStorage.setItem('activities', JSON.stringify(updatedActivities));//adds the json object with a key 'activities' to the localstorage

    renderList();
};

//we delete the activities from UI first so when we render the list it will be correct
const clearList = () => {
    while (list.firstChild) {
        list.removeChild(list.lastChild);
    }
};

const renderList = () => {
    clearList();

    const savedActivitiesString = localStorage.getItem('activities');
    const savedActivities = JSON.parse(savedActivitiesString) ?? [];

    savedActivities.forEach((savedActivity) => {
        const newCard = placeholderCard.cloneNode(true);
        console.log(savedActivity);
        newCard.id = savedActivity.key;

        const newCardActivity = newCard.querySelector('.activity');
        newCardActivity.innerText = savedActivity.activity;

        const newCardType = newCard.querySelector('.type');
        newCardType.innerText = savedActivity.type;

        const newCardParticipants = newCard.querySelector('.participants');
        newCardParticipants.innerText = savedActivity.participants;

        const newCardPrice = newCard.querySelector('.price');
        newCardPrice.innerText = savedActivity.price;

        if (savedActivity.link) {
            const newCardLink = newCard.querySelector('.link');
            const newCardLinkContainer = newCard.querySelector('.link-container');

            newCardLink.href = savedActivity.link;
            newCardLinkContainer.hidden = false;
        }

        const newCardDeleteButton = newCard.querySelector('.delete-button');

        newCardDeleteButton.onclick = () => {
            deleteActivity(savedActivity.key);
        };

        list.appendChild(newCard);
    });
};


window.onload = () => {
    renderList();
    fetchNewActivity();
};