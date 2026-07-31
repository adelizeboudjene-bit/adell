// ===============================
// PROJECT NESRINE
// Made by Adel ❤️
// ===============================


// ELEMENTS

const intro = document.getElementById("intro");
const game = document.getElementById("game");
const startBtn = document.getElementById("startBtn");
const playBtn = document.getElementById("play");
const chapter = document.getElementById("chapterContainer");

const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("music");

let playing = false;


// ===============================
// BEGIN
// ===============================

startBtn.onclick = function(){

    // Start music
    music.play();

    playing = true;

    if(musicButton){
        musicButton.innerHTML="🔊";
    }


    intro.style.opacity="0";


    setTimeout(()=>{

        intro.style.display="none";

        game.classList.remove("hidden");

    },800);


};



// ===============================
// MUSIC BUTTON
// ===============================

musicButton.onclick=function(){

if(!playing){

music.play();

musicButton.innerHTML="🔊";

playing=true;

}

else{

music.pause();

musicButton.innerHTML="🎵";

playing=false;

}

};



// ===============================
// PARTICLES
// ===============================

setInterval(()=>{


const p=document.createElement("div");


p.className="particle";


p.innerHTML=Math.random()>0.5?"✨":"🌸";


p.style.left=Math.random()*100+"vw";

p.style.bottom="-20px";


p.style.fontSize=(15+Math.random()*20)+"px";


document.body.appendChild(p);



setTimeout(()=>{

p.remove();

},10000);



},400);





// ===============================
// START ADVENTURE
// ===============================

playBtn.onclick=function(){

game.style.display="none";

loadStars();

};




// ===============================
// STARS
// ===============================

function loadStars(){


chapter.innerHTML=`

<div class="chapter">


<h1>⭐ Chapter One ⭐</h1>


<p>Collect every glowing star!</p>


<div id="starArea"></div>


<div id="speech">

Tap a star ⭐

</div>


</div>

`;



const area=document.getElementById("starArea");


const messages=[

"You're one of my favorite people ❤️",

"I hope this makes you smile 🥰",

"Thank you for hearing me out ❤️",

"You're really special 🌸",

"Almost there ✨"

];



let count=0;



for(let i=0;i<5;i++){


const star=document.createElement("div");


star.className="star";


star.innerHTML="⭐";



star.style.left=(10+Math.random()*70)+"%";

star.style.top=(20+Math.random()*50)+"%";



star.onclick=function(){


star.remove();


document.getElementById("speech").innerHTML=messages[count];


count++;



function burst(){

for(let i=0;i<20;i++){

const e=document.createElement("div");

e.className="particle";

e.innerHTML=["✨","❤️","🌸"][Math.floor(Math.random()*3)];

e.style.left=Math.random()*100+"vw";

e.style.top=Math.random()*100+"vh";

e.style.fontSize=(15+Math.random()*25)+"px";

document.body.appendChild(e);


setTimeout(()=>{

e.remove();

},2000);


}

}


if(count===5){

setTimeout(loadHearts,1500);

}


};



area.appendChild(star);


}


}






// ===============================
// HEARTS
// ===============================

function loadHearts(){


chapter.innerHTML=`

<div class="chapter">


<h1>❤️ Heart Garden ❤️</h1>


<p>Catch every heart!</p>


<div id="heartArea"></div>


<div id="speech">

Catch them all ❤️

</div>


</div>

`;



const area=document.getElementById("heartArea");



const messages=[

"I really am sorry ❤️",

"I hope this makes you happy ❤️",

"You're amazing 🌸",

"Thank you for staying 💚",

"One last thing... 💌"

];



let count=0;



for(let i=0;i<5;i++){


const heart=document.createElement("div");


heart.className="heartFloat";


heart.innerHTML="❤️";



heart.style.left=(10+Math.random()*70)+"%";


heart.style.top=(20+Math.random()*50)+"%";



heart.onclick=function(){


heart.remove();


document.getElementById("speech").innerHTML=messages[count];


count++;


burst();



if(count===5){

setTimeout(loadLetterButton,1500);

}


};



area.appendChild(heart);


}



}





// ===============================
// LETTER BUTTON
// ===============================

function loadLetterButton(){


chapter.innerHTML=`

<div class="chapter">


<h1>💌</h1>


<h2>Nesrouneee ❤️</h2>


<p>

You finished the adventure...

</p>



<button id="letterButton">

Open My Letter 💌

</button>


</div>

`;



document.getElementById("letterButton").onclick=showLetter;


}





// ===============================
// LETTER
// ===============================

function showLetter(){


chapter.innerHTML=`

<div class="letter">


<h1>💌</h1>


<p>

Nesrouneee ❤️<br><br>

Pardon pardon for making u mad 😔<br><br>

Wlh i didnt mean it.<br><br>

I hope this little adventure made you smile 🥰<br><br>

Thank you for hearing me out ❤️<br><br>

— Adel

</p>



<button onclick="finishAdventure()">

🌸 Finish Adventure 🌸

</button>


</div>


`;


}





// ===============================
// FINISH
// ===============================

function finishAdventure(){


chapter.innerHTML=`

<div class="chapter">


<h1 style="font-size:70px">

❤️

</h1>


<h2>

Thank you...

</h2>


<p>

I just wanted to make you smile ❤️

</p>


</div>

`;



}





// ===============================
// EFFECT
// ===============================

function burst(){


for(let i=0;i<15;i++){


const e=document.createElement("div");


e.className="particle";


e.innerHTML="✨";


e.style.left=Math.random()*100+"vw";


e.style.top=Math.random()*100+"vh";



document.body.appendChild(e);



setTimeout(()=>{

e.remove();

},2000);


}


}
// ===============================
// SHOOTING STARS
// ===============================

setInterval(()=>{


const star=document.createElement("div");


star.className="shootingStar";


star.innerHTML="✨";


star.style.top=Math.random()*50+"vh";


star.style.left="-30px";


document.body.appendChild(star);



setTimeout(()=>{

star.remove();

},2500);



},2500);