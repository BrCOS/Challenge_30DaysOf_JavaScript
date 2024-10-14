//get the card item that matches with our json object from the api
const activity = document.getElementById('activity');
const type = document.getElementById('type');
const participants = document.getElementById('participants');
const price = document.getElementById('price');
const link = document.getElementById('link');
const linkContainer = document.getElementById('link-container');

//save the current activity in localstorage
export let currentActivity;

//first let's make the network request to the bored api with the button
export const fetchNewActivity = () => {
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