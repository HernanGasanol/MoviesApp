const arrows=document.querySelectorAll('.arrow')

const movieslist=document.querySelectorAll(".movie-list")


arrows.forEach((arrow, i) =>{
    const ratio=Math.floor(Window.innerWidth/270)
    const imgNumber=movieslist[i].querySelectorAll("img").length
     

    let clickCounter=0
  
    arrow.addEventListener("click", () => {
        clickCounter++
        
        if(imgNumber - (4+clickCounter) + (4-ratio) >= 0 ){
                    console.log('hola')
            movieslist[i].style.transform=`translateX(${movieslist[i].computedStyleMap().get("transform")[0].x.value - 300}px)`
        } else {
            movieslist[i].style.transform=`translateX(0px)`
            clickCounter=0;
        }
       
         
     }
     
     )

   
} )


const ball=document.querySelector('.toggle-ball')

const items=document.querySelectorAll('.container, .movie-list-title, .navbar , .sidebar , .left-menu-icon , .toggle  ')

ball.addEventListener("click" , () => {
    items.forEach( item => {
        item.classList.toggle('active')
    })
    ball.classList.toggle("active")

})