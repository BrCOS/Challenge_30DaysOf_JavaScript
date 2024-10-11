// forms
//they have an onsubmit event we can add a function call to, this allows us to access the form
//they also have an action atribute, the url in there is where the form will submit it's data to
//if we don't submit data to a URL, we need to call e.preventDefault() in our event handler
//we can access the form data with the FormClass, then we make an object
const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
};