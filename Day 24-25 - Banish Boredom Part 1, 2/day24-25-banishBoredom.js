//get the card item that matches with our json object from the api
const activity = document.getElementById('activity');
const type = document.getElementById('type');
const participants = document.getElementById('participants');
const price = document.getElementById('price');
const link = document.getElementById('link');

const linkContainer = document.getElementById('link-container')

const list = document.getElementById('list');
const placeholderCard = document.getElementById('placeholder-card');

//save the current activity in localstorage
let currentActivity;

//first let's make the network request to the bored api with the button
const onBoredClicked = () => {
    console.log('bored');

    //we need to send a get request to the api
    fetch('https://bored.api.lewagon.com/api/activity/')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);

        activity.innerText = data.activity;
        type.innerText = data.type;
        participants.innerText = data.participants;
        price.innerHTML = data.price;
        
        //links are getting too much space from the container, if there is no link we hide the container
        if (data.link.lenght) {
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


//nope button
//just get's us a new activity, same as the main button
const onNopeClicked = () => {
    onBoredClicked();
};


//love it button
const onLikeClicked = () => {
    const savedActivitiesString = localStorage.getItem('activities');
    const savedActivities = JSON.parse(savedActivitiesString) ?? [];

    savedActivities.push(currentActivity);//adds the activity to the array

    localStorage.setItem('activities', JSON.stringify(savedActivities));//adds the json object with a key 'activities' to the localstorage

    onBoredClicked();
};


//buttons handlers
//bored button
const boredButton = document.getElementById('bored-button');
boredButton.onclick = onBoredClicked;

//nope button
const nopeButton = document.getElementById('nope-button');
nopeButton.onclick = onNopeClicked;

//love it button
const likeButton = document.getElementById('like-button');
likeButton.onclick = onLikeClicked;


//add onload handler to make it load a new activity when the page loads
//and we need to load any saved activies from localstorage
window.onload = () => {
    //get the activities saved from localstorage and turn into an array
    const savedActivitiesString = localStorage.getItem('activities');
    const savedActivities = JSON.parse(savedActivitiesString) ?? [];

    //loop over each activity, clone the placeholder and replace them with the details in the card
    //with the activities details from each saved activity
    savedActivities.forEach((savedActivity) => {
        const newCard = placeholderCard.cloneNode(true);
        console.log(newCard);

        //we set the card id to the JSON's key
        newCard.id = savedActivity.key;

        //we can't use getElementById() on a DOM node, so we have to use .querySelector()
        //the reason why, is because querySelector() let us manipulate a  specific node within the DOM
        //and getElementById() can only be used on the whole document
        //like <div> and a <p> inside the div we'd use the querySelector and for the div getElementById
        const newCardActivity = newCard.querySelector('.activity');
        newCardActivity.innerText = savedActivity.activity;

        const newCardType = newCard.querySelector('.type');
        newCardType.innerText = savedActivity.type;

        const newCardParticipants = newCard.querySelector('.participants');
        newCardParticipants.innerText = savedActivity.participants;

        const newCardPrice = newCard.querySelector('.price');
        newCardPrice.innerText = savedActivity.price;

        //if there's a link, add at the container and make it visible
        if (savedActivity.link) {
            const newCardLink = newCard.querySelector('.link');
            const newCardLinkContainer = newCard.querySelector('.link-container');

            console.log(newCardLinkContainer);

            newCardLink.href = savedActivity.link;
            newCardLinkContainer.hidden = false;
        }

        //button to delete the activity from the localstorage
        const newCardDeleteButton = newCard.querySelector('.delete-button');

        newCardDeleteButton.onclick = () => {
            console.log('delete: ', savedActivity.key);
        };

        //add the new generated card to the DOM
        list.appendChild(newCard);
    });

    onBoredClicked();
};