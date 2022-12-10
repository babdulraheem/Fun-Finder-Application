//does the browser support service workers?
if ("serviceWorker" in navigator) {
    //defer service worker installation until page compeles loading
    window.addEventListener('load', () => {
        //then register our serive worker
        navigator.serviceWorker
            .register("/sw.js")
            .then((reg) => {
                //display a success message
                console.log(`service worker registration (Scope: ${reg.scope})`);
            })
            .catch((error) => {
                //display an error message
                console.log(`service worker error (${error})`);
            });
    })

} else {
    //happnes when the app isnt derved over a TLS connection (HTTPS)
    // or if thw browser dosnt support the service worker
    console.log("service worker not available");
};


// just for explanation
//Async/wait method
/* just for explanation
const myUsers = {
    userList: [],
};
const myFun = async() => {

    const response = await fetch('https://api.geoapify.com/v2/places?categories=commercial.supermarket&filter=rect%3A10.716463143326969%2C48.755151258420966%2C10.835314015356737%2C48.680903341613316&limit=20&apiKey=f9763cf4daae4f5e87172a65d2890168');
    const jsonUserData = await response.json();
    return jsonUserData;
};

const anotherFun = async() => {
    const data = await myFun();
    myUsers.userList = data;
    console.log(data);
}

anotherFun();
*/



// just for explanation
//promises method
//Here we have the places API

/*const places = fetch('https://api.geoapify.com/v2/places?categories=commercial.supermarket&filter=rect%3A10.716463143326969%2C48.755151258420966%2C10.835314015356737%2C48.680903341613316&limit=20&apiKey=f9763cf4daae4f5e87172a65d2890168');
//pending 
console.log(places);


fetch('https://api.geoapify.com/v2/places?categories=commercial.supermarket&filter=rect%3A10.716463143326969%2C48.755151258420966%2C10.835314015356737%2C48.680903341613316&limit=20&apiKey=f9763cf4daae4f5e87172a65d2890168')
    .then(resp => resp.json())
    .then((places) => {
        console.log(places);
    });
    */





const RespondClick = () => {

    // window.alert("Hi it works");
    //console.log("inside function");


    if (document.getElementById('yesterday').checked && document.getElementById('athletic').checked && document.getElementById('adrenaline').checked) {
        window.alert("rafting");
    }

    if (document.getElementById('a week ago').checked && document.getElementById('average').checked && document.getElementById('relaxing').checked) {
        window.alert("a nice walk by the lake");
    }

    if (document.getElementById('a month ago').checked && document.getElementById('foodie').checked && document.getElementById('loud').checked) {
        window.alert("attend a rock and roll show");
    }

};