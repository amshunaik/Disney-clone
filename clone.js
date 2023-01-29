const div1= document.querySelector('.div2');
let sliders=[];

let slideind=0;
const create=()=>{
    if(slideind >= movies.length){
        slideind=0;
    }

    let s1= document.createElement('div');
    let im= document.createElement('img');
    let c= document.createElement('div');
    let h1= document.createElement('h1');
    let p= document.createElement('p');

    im.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideind].name));
    p.appendChild(document.createTextNode(movies[slideind].des));
    c.appendChild(h1);
    c.appendChild(p);
    s1.appendChild(c);
    s1.appendChild(im);
    div1.appendChild(s1);

    im.src=movies[slideind].image;
    slideind++;

    s1.className='slider';
    c.className='slide-cont';
    h1.className='tit';
    p.className='mov-cont';

    sliders.push(s1);

    if(sliders.length){
        sliders[0].style.marginLeft=`calc(-${100 * (sliders.length-2)}% - ${30 * (sliders.length-2)}px)`;
        
    }


}
let movies = [
    {
        name: 'falcon and the winter soldier',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 2.PNG'
    },
    {
        name: 'loki',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 1.PNG'
    },
    {
        name: 'wanda vision',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 3.PNG'
    },
    {
        name: 'raya and the last dragon',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 4.PNG'
    },
    {
        name: 'luca',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 5.PNG'
    }
]
for(let i=0;i<3;i++){
    create();
}
//setInterval(() => {  /*comment this out*/
//    create();        /*comment this out*/
//},3000)              /*comment this out*/

const vidcard= document.querySelectorAll('.vo');
vidcard.forEach(item => {
    item.addEventListener('mouseover',() =>{
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave',() =>{
        let video = item.children[1];
        video.pause();
    })
})

//sliders
let c1=document.querySelectorAll('.m1card');
let node2=document.querySelectorAll('.pre');
let node3=document.querySelectorAll('.nxt');

c1.forEach((item,i) => {
    let cass=item.getBoundingClientRect();
    let c4= cass.width;
    console.log(c4)
    var t=node3[i];
    var t1=node2[i];
    if(t){
        t.addEventListener('click',() => {
            item.scrollLeft += c4 - 200;
        })
    }
    
    if(t1){
 
        t1.addEventListener('click',() => {
            item.scrollLeft -= c4 + 200;
        })
    }
    
})