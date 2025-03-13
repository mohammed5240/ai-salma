//function text(){
  
//   const myText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, deleniti. Natus, quam. Quos, eveniet. Cumque, atque."
//   for (let i = 0; i <= myText.length; i++) {
//     var span = document.createElement('span');
//     span.textContent = myText[i];
//     span.classList.add('sp'+i);
//     span.style.animationDelay = `${i * 0.05}s`;
//     span.style.animationDuration = '2s';
//     span.style.animationName = 'typewriter';
//     console.log(span);
//     document.querySelector('home-content .text').appendChild(span);
//     console.log(i);   
//   }
//   return myText;
// }
// text();
export default function Content() {
  
    return (
        <div className="home-content flex">
          <h2>salma ai</h2>
          <h1 className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, deleniti. Natus, quam. Quos</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, deleniti. Natus, quam. Quos, eveniet. Cumque, atque.</p>
          <div className='flex btns'>
            <button className='btn bt1'>Read More</button>
            <button className='btn bt2'>Book Now</button>
          </div>
        </div>
    );
    
}