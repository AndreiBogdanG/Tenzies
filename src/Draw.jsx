export default function draw(number){
    let visibleDots = [];
    
    switch (number.value) {
        case 1:  visibleDots = ['hidden', 'hidden', 'hidden', 'hidden','visible', 'hidden','hidden', 'hidden', 'hidden'];
                break;
        case 2: visibleDots = ["visible", 'hidden', 'hidden', 'hidden','hidden', 'hidden','hidden', 'hidden', 'visible'];
                break;
        case 3: visibleDots = ['visible', 'hidden', 'hidden', 'hidden','visible', 'hidden','hidden', 'hidden', 'visible'];
                break;
        case 4: visibleDots = ['visible', 'hidden', 'visible', 'hidden','hidden', 'hidden','visible', 'hidden', 'visible'];
                break;
        case 5: visibleDots = ['visible', 'hidden', 'visible', 'hidden','visible', 'hidden','visible', 'hidden', 'visible'];
                break;
        case 6: visibleDots = ['visible', 'hidden', 'visible', 'visible','hidden', 'visible','visible', 'hidden', 'visible'];
                break;
    }
  
   const dePus=visibleDots.map((display, index) => (
    <div key={index} className="dot" style = {{visibility: display }}></div>
))



  
    return (
     
        dePus
    


    )
}