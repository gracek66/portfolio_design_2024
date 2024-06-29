// Nav ------------------------------------------------------------------

const navTitle = document.getElementById('nav-title');
const displayText3 = navTitle.innerText;

const fonts = [
    'Dela Gothic One',
    'Kalnia',
    'DotGothic16',
];
// 'Kalnia Expanded',

const colors = [
    ['#0D0D0D','#F2F2F2'],
    ['#04C4D9','#F205B3'],
    ['#04C4D9','#F29F05'],
    ['#02730A','#F29F05'],
];

// const colors = [
//     ['#0D0D0D','#F2F2F2'],
//     ['#F23005','#160B40'],
// ];

playCountDownNav(navTitle);

// Count Down Animation
function playCountDownNav(elem){
    const text = elem.innerText;
    
    for(let i=0; i<text.length; i++){
        let timeOut = setTimeout(function(){
            changeCharsFontFamily(text, elem);
            for(let u=0; u<i; u++){
                elem.children[u].style.fontFamily = fonts[0];
                elem.children[u].style.color = 'inherit';
                elem.children[u].style.backgroundColor = 'transparent';
            }
            
            if (i === text.length - 1){
                elem.children[i].style.fontFamily = fonts[0];
                elem.children[i].style.color = 'inherit';
                elem.children[i].style.backgroundColor = 'transparent';
            }                    
        },400 + 100*i);
        // wait 400ms and play animation
    }
};

function changeCharsFontFamily(text, elem){
    elem.innerHTML = "";
    addDiffChars(text, elem);
}

function addDiffChars(text, elem){
    const charArr = text.split("");
    for(let i=0; i < charArr.length; i++){
            let span = document.createElement("span");
            let randFont = Math.round(Math.random() * (fonts.length - 1));
            let randColorGroup = Math.round(Math.random() * (colors.length - 1));
            let randTwo = Math.round(Math.random());
            let fontGen = fonts[randFont];
            let colorGroupGen = colors[randColorGroup];

            span.style.fontFamily = fontGen;
            // Random Colors
            if (randTwo === 0){
                // span.style.backgroundColor = colorGroupGen[0];
                span.style.color = colorGroupGen[1];
            } else if (randTwo === 1){
                // span.style.backgroundColor = colorGroupGen[1];
                span.style.color = colorGroupGen[0];
            }
            
            
            span.innerText = charArr[i];
            elem.appendChild(span);
        }
}

// Scale Down Animation

window.addEventListener('scroll' , function () {
    let window_top = this.scrollY;
    if (window_top == 0) {
        navTitle.classList.remove('nav-resize');
    }else {
        navTitle.classList.add('nav-resize'); 
    }
});

// window.onscroll = function() {scrollNav()};

// function scrollNav() {
//     console.log(`document.documentElement.scrollTop = ${document.documentElement.scrollTop}`);
//     console.log(`document.body.scrollTop = ${document.body.scrollTop}`);
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("navTitle").style.fontSize = "30px";
//   } else {
//     document.getElementById("navTitle").style.fontSize = "9vw";
    
//   }
// }

// Skewing effect
const main = document.querySelector('main');

let currentPos = window.pageYOffset;

const update = () => {
	const newPos = window.pageYOffset;
	const diff = newPos - currentPos;
	const speed = diff * 0.25;
	
	main.style.transform = `skewY(${ speed }deg)`;
	
	currentPos = newPos;
	
	requestAnimationFrame(update);
}

update();