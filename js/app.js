

//menu de navegación

const menu = document.querySelector('.menu');
const listContainer = document.querySelector('.list-container');
const main = document.querySelector('#main');
const sticky = menu.offsetTop; //el numero de pixeles desde el elemento padre relativo
const btnMenu = document.querySelector('.btn-menu');
let on_off = true;

//window.pageYOffset => cuanto se ha desplazado en px

window.onscroll = () => {

    //sticky
    if(window.pageYOffset >= sticky ){
        menu.classList.add('sticky');
        main.style.marginTop ='80px';
    }else{
        menu.classList.remove('sticky');
        main.style.marginTop = '0px';
    }

    //Go top

    if(window.pageYOffset >= 700){
        document.querySelector('.go-top').style.right = '0';
    }
    else{
        document.querySelector('.go-top').style.right = '-100%';
    }

    document.querySelector('.go-top').addEventListener('click', () =>{
        document.body.scrollTop = '0';
        document.documentElement.scrollTop = '0';

        // document.documentElement  = <html></html>
        //  scrollTop => obtiene o establece el número de pixels que el contenido de un elemento ha sido desplazado hacia arriba
    });
}


//Menu responsive

btnMenu.addEventListener('click', () => {
    if(on_off){
        listContainer.style.left = "0";
        on_off = false;
    }else{
        on_off = false;
        listContainer.style.left = "-100%";
        on_off = true;
    }
});

//Galeria de imágenes

const images = document.querySelectorAll('.img-card img');
const modal = document.querySelector('.modal-gallery');
const imgModal = document.querySelector('#imgModal');
const closeModal = document.querySelector('.close-modal');
const captionModal = document.querySelector('.captionModal');
const modalGalleryList = document.querySelectorAll('.gallery-list');


images.forEach( (images) => {
    images.addEventListener('click', () => {
        modal.style.display = 'block';
        imgModal.src = images.src;
    });
} );

modalGalleryList.forEach( img => img.addEventListener('click', lightbox));

function lightbox(event) {
    imgModal.src = event.target.src;
}

closeModal.addEventListener('click' , () => {
    modal.style.display = "none";
})