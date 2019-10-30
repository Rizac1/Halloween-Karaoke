let i = 0;
let song;
let backgroundImage = "./css/37928.jpg";
let startTime;
let title;
let audio = document.getElementById("halloween");

var $_GET = {};
if (document.location.toString().indexOf('?') !== -1) {
    var query = document.location
        .toString()
        // get the query string
        .replace(/^.*?\?/, '')
        // and remove any existing hash string (thanks, @vrijdenker)
        .replace(/#.*$/, '')
        .split('&');

    for (var x = 0, l = query.length; x < l; x++) {
        var aux = decodeURIComponent(query[x]).split('=');
        $_GET[aux[0]] = aux[1];
    }
}

if ($_GET['song'] == 'thisishalloween') {
    //the time below effects the words above
    song = [{ data: "Boys and girls of every age", time: 2000 }, { data: "Wouldn't you like to see something strange?", time: 1500 }, { data: "Come with us and you will see, This, our town of Halloween", time: 3000 },
    { data: "This is Halloween, this is Halloween", time: 5300 }, { data: "Pumpkins scream in the dead of night", time: 3000 }, { data: "This is Halloween, everybody make a scene", time: 2500 },
    { data: "Trick or treat till the neighbors gonna die of fright", time: 3000 }, { data: "It's our town, everybody scream", time: 3000 }, { data: "In this town of Halloween", time: 2800 },
    { data: "I am the one hiding under your bed", time: 2500 }, { data: "Teeth ground sharp and eyes glowing red", time: 2700 }, { data: "I am the one hiding under your stairs", time: 2500 },
    { data: "Fingers like snakes and spiders in my hair", time: 3400 }, { data: "This is Halloween, this is Halloween", time: 2900 }, { data: "Halloween! Halloween! Halloween! Halloween!", time: 2800 },
    { data: "In this town we call home", time: 3800 }, { data: "Everyone hail to the pumpkin song", time: 3000 }, { data: "In this town, don't we love it now?", time: 3000 },
    { data: "Everybody's waiting for the next surprise", time: 3000 }, { data: "'Round that corner, man hiding in the trash can", time: 3000 },
    { data: "Something's waiting now to pounce, and how you'll", time: 3000 }, { data: "Scream! This is Halloween", time: 2500 }, { data: "Red 'n' black, and slimy green", time: 1500 },
    { data: "Aren't you scared?", time: 1500 }, { data: "Well, that's just fine", time: 950 }, { data: "Say it once, say it twice", time: 1800 },
    { data: "Take a chance and roll the dice", time: 1700 }, { data: "Ride with the moon in the dead of night", time: 1300 }, { data: "Everybody scream, everybody scream", time: 2700 },
    { data: "In our town of Halloween!", time: 2900 }, { data: "I am the clown with the tear-away face", time: 2500 }, { data: "Here in a flash and gone without a trace", time: 2900 },
    { data: "I am the who when you call, Who's there?", time: 2900 }, { data: "I am the wind blowing through your hair", time: 2900 }, { data: "I am the shadow on the moon at night", time: 2400 },
    { data: "Filling your dreams to the brim with fright", time: 2900 }, { data: "This is Halloween, this is Halloween", time: 2900 }, { data: "Halloween! Halloween! Halloween! Halloween!", time: 3000 },
    { data: "Halloween! Halloween!", time: 2500 }, { data: "Tender lumplings everywhere", time: 3050 }, { data: "Life's no fun without a good scare", time: 2700 },
    { data: "That's our job, but we're not mean", time: 3350 }, { data: "In our town of Halloween", time: 2850 }, { data: "In this town", time: 2500 },
    { data: "Don't we love it now?", time: 1800 }, { data: "Everybody's waiting for the next surprise", time: 1400 }, { data: "Skeleton Jack might catch you in the back", time: 2800 },
    { data: "And scream like a banshee", time: 2000 }, { data: "Make you jump out of your skin", time: 1650 }, { data: "This is Halloween, everybody scream", time: 2500 },
    { data: "Won't ya please make way for a very special guy", time: 1800 }, { data: "Our man Jack is King of the Pumpkin patch", time: 3500 },
    { data: "Everyone hail to the Pumpkin King, now!", time: 1800 }, { data: "This is Halloween, this is Halloween", time: 3200 }, { data: "Halloween! Halloween! Halloween! Halloween!", time: 3000 },
    { data: "In this town we call home", time: 4100 }, { data: "Everyone hail to the pumpkin song", time: 3000 }, { data: "La la la la la la la la la la (Halloween! Halloween!)", time: 2500 }];

    startTime = 14000;
    backgroundImage = './css/nightmare.jpg';
    title = "This is Halloween";
    audio.src = "audio/The Nightmare Before Christmas- This Is Halloween.mp3"

} else if ($_GET['song'] == 'spookyscary') {
    song = [{ data: "Spooky scary skeletons", time: 0 }, { data: "Send shivers down your spine", time: 3500 }, { data: "Shrieking skulls will shock your soul", time: 3500 },
    { data: "Seal your doom tonight", time: 3000 }, { data: "Spooky scary skeletons", time: 3150 }, { data: "Speak with such a screech", time: 3400 },
    { data: "You'll shake and shudder in surprise", time: 2900 }, { data: "When you hear these zombies shriek", time: 2900 }, { data: "We're so sorry skeletons", time: 3000 },
    { data: "You're so misunderstood", time: 3550 }, { data: "You only want to socialize", time: 3100 }, { data: "But I don't think we should", time: 3000 },
    { data: "Cause spooky scary skeletons", time: 3000 }, { data: "Shout startling shrilly screams", time: 3000 }, { data: "They'll sneak from their sarcophagus", time: 3000 },
    { data: "And just won't leave you be", time: 3000 }, { data: "Instrumental", time: 3000}, { data: "Spirits supernatural", time: 13000 }, { data: "Are shy whats all the fuss", time: 3000 },
    { data: "But bags of bones seem so unsafe", time: 3000 }, { data: "It's semi-serious!", time: 3000 }, { data: "Spooky scary skeletons", time: 3000 },
    { data: "Are silly all the same", time: 3000 }, { data: "They'll smile and scrabble slowly by", time: 3500 }, { data: "And drive you so insane", time: 3000 },
    { data: "Sticks and stones will break your bones", time: 3000 }, { data: "They seldom let you snooze", time: 3000 }, { data: "Spooky scary skeletons", time: 3000 },
    { data: "Will wake you with a boo!", time: 3000 }]

    startTime = 120;
    backgroundImage = './css/test.jpg';
    title = 'Spooky Scary Skeletons';
    audio.src = 'audio/Andrew Gold - Spooky Scary Skeletons.mp3';
    document.getElementById('song1').style.color = "white";
    document.getElementById('song2').style.color = "white";

} else if ($_GET['song'] == 'newsong') {

} else if ($_GET['song'] =='new') {

} else if ($_GET['song'] == 'pie') {

} else if ($_GET['song'] == 'pie') {

} else {
    document.getElementById('songbox').style.display = 'none';
    title = 'Halloween Fun';
    // var para = document.createElement("P");
    // para.innerText = "Hello and welcome to the Halloween Fun select a song to begin"
    // document.getElementById("para").appendChild(para);
    let para = document.getElementById("para");
    para.innerHTML = "<p id='para'>Hello and welcome to the Halloween Fun select a song to begin</p><p id='para'>Pick a song and play it.<br> You can even sing along.</p>"
}

document.body.style.backgroundImage = "url('" + backgroundImage + "')";
document.title = title;
document.getElementById("song2").innerHTML += "<h1>" + title + "</h1>"
document.getElementById("start").innerHTML += title;

dropDownMenu = () => {
    document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function getReady() {
    var audio = document.getElementById("halloween");
    audio.play();
    setTimeout(start, startTime);
}

function newTimer() {
    console.log(i)
    console.log(song.length);
    setTimeout(() => {

        if (i == (song.length - 1)) {
            codeHalloween(song[i].data)
        } else {
            codeHalloween(song[i].data)
            i++;
            newTimer()
        }

    }, song[i].time)
}

function codeHalloween(song) {
    document.getElementById('song1').innerHTML = (song)
}

function start() {
    newTimer();
    counter = 0,

        document.getElementById('start').addEventListener("click", codeHalloween(song[0].data));

}