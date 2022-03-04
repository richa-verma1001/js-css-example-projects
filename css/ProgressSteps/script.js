const circles = Array.from(document.querySelectorAll('.circle'));
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const progress = document.getElementById('progress');

let activeCircle = circles.filter( (circle) => {
    return circle.classList.contains('active');
});
let activeCircleId = activeCircle[0].id;


next.addEventListener('click', () => {
    if(activeCircleId < circles.length){
        activeCircleId++;
        updateProgress();
    }
});

prev.addEventListener('click', () => {
    if(activeCircleId > 1) {
        activeCircleId--;
        updateProgress();
    }
});

const updateProgress = () => {
    updateActive();
    if(activeCircleId === 1){
        prev.disabled = true;
        next.disabled = false;
        progress.style.width = '0%';
    } else if(activeCircleId === 4){
        next.disabled = true;
        prev.disabled = false;
        progress.style.width = '100%';
    } else {
        next.disabled = false;
        prev.disabled = false;
        progress.style.width =  ((activeCircleId - 1) / (circles.length - 1) * 100) + '%';
    }       
};

const updateActive = () => {
    circles.forEach( (circle) => {
        if(activeCircleId >= parseInt(circle.id)){
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
};