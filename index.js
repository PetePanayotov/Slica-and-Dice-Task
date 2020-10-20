const images = ['images/carousel/picture1.jpg', 'images/carousel/picture5.jpg' , 'images/carousel/picture2.jpg' , 'images/carousel/picture3.jpg' , 'images/carousel/picture4.jpg']

function slide() {

    let index = 0;
    
    const header = document.querySelector('header');
    const [ , leftArrow , , rightArrow] = Array.from(header.querySelectorAll('span'));
    
    const dotsWrapper = header.querySelector('.dots-wrapper');
    const dotsArray = Array.from(dotsWrapper.querySelectorAll('div'));

    header.style.backgroundImage = `url(${images[index]})`;
    dotsArray[index].style.backgroundColor = '#ffffff'
    
    leftArrow.addEventListener('click' , function(e) {
        
        index = slideLeft(index)
    });
    
    rightArrow.addEventListener('click' , function(e) {
        
        index = slideRight(index);
    });

    function slideLeft(i) {

        dotsArray[i].style.backgroundColor = '#999DA1';

        i = i === 0 ? 4 : --ind

        dotsArray[i].style.backgroundColor = '#ffffff';
        header.style.backgroundImage = `url(${images[i]})`;
        
        return i;

    };

    function slideRight(i) {
        
        dotsArray[i].style.backgroundColor = '#999DA1'

        i = i === 4 ? 0 : ++i;

        dotsArray[i].style.backgroundColor = '#ffffff'
        header.style.backgroundImage = `url(${images[i]})`;
        
        return i

    };

};

slide()