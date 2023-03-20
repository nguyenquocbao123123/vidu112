import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDZucO0GrV6SPbiSEI4zU-6XQHc_FKMOM4",
    authDomain: "datasensor-78105.firebaseapp.com",
    databaseURL: "https://datasensor-78105-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "datasensor-78105",
    storageBucket: "datasensor-78105.appspot.com",
    messagingSenderId: "307376217981",
    appId: "1:307376217981:web:56f12f687d1a1352b57614",
    measurementId: "G-7Y3EZ0H3PD"
};
//----------------------------------------------------------------


firebase.initializeApp(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Realtime Database and get a reference to the service
const database = firebase.database();
const db = getDatabase(app);

//import{getDatabase, ref, set, child, update, remove};
//den01
var btnOn = document.getElementById("btnOnid_01");
var btnOff = document.getElementById("btnOffid_01");


btnOn.onclick = function() {
   // document.getElementById("denid_01").scr = "light_bulb_on2.png";

    database.ref("/tt_iot").update({
        "led" : 1
    });
};
btnOff.onclick = function() {
   // document.getElementById("denid_01").scr = "light_bulb_off.png";

    database.ref("/tt_iot").update({
        "led" : 0
    });
};
//get data from database------------
database.ref("/tt_iot/Temp").on("value", function(snapshot){
    var temp = snapshot.val();
    document.getElementById("nhietdo").innerHTML = temp; 
});
database.ref("/tt_iot/Hum").on("value", function(snapshot){
    var humidity = snapshot.val();
    document.getElementById("doam").innerHTML = humidity; 
});
//tu dong cap nhat trang thai den--------
database.ref("/tt_iot/led").on("value", function(snapshot){
    var ss = snapshot.val();
    if(ss==1)
    document.getElementById("denid_01").scr= "light_bulb_on2.png"; 
    else
    document.getElementById("denid_01").scr="light_bulb_off.png";
});
//-------read-data-----------------
sendbtn.addEventListener('click',(e)=>{
    var nhietdo = document.getElementById('temp').value;
    var doam = document.getElementById('hum').value;

    //const userId = push(child(ref(database),'users')).key;

    set(ref(db, 'setup/' ), {
        nhietdo: nhietdo,
        doam: doam,
    });
alert("saved user");
});
//--------------------slider--------------------
var slider = document.getElementById("myRange");
