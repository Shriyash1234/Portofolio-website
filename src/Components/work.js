import './CSS/work.css'
function Work(){
    const categories= ['SHOW ALL','HTML5','CSS','JAVASCRIPT','NODE.JS','REACT.JS','MONGODB','PYTHON']
    const websites = [[''],['website-8'],['website-8'],['website-5','website-7','website-8'],['website-3','website-5','website-6','website-7','website-8'],['website-1','website-2','website-3','website-6','website-8'],['website-2','website-3','website-5','website-6','website-7','website-8'],['website-1','website-2','website-3','website-4','website-5','website-6']]
    const ShowWebistes = event => {
        const leftScreen = document.getElementById('left-screen');
        const rightScreen = document.getElementById('right-screen');
        const websiteElements = document.getElementsByClassName('website');
        for(let i =0;i<websiteElements.length;i++){
            websiteElements[i].style.zIndex = -1;
        }
        leftScreen.classList.add('active');
        rightScreen.classList.add('active');

        setTimeout(() => {
            leftScreen.classList.remove('active');
            rightScreen.classList.remove('active');
            const websiteElements = document.getElementsByClassName('website');
            for (let i = 0; i < websiteElements.length; i++) {
                websiteElements[i].style.display = 'flex';
            }
            const target = event.target.innerHTML;
            for(let i =0;i<categories.length;i++){
                if(target===categories[i]){
                    if(i===0){}
                    else{
                        for(let j =0;j< websites[i].length;j++){
                            document.getElementsByClassName(websites[i][j])[0].style.display = 'none'
                        }
                    }
                }
                setTimeout(() => {
                    for (let i = 0; i < websiteElements.length; i++) {
                        websiteElements[i].style.zIndex = '5';
                    }
                },50)
            }
            }, 1200);
        
      }
    return(
        <section className="websites">
            <h2>Websites</h2>
            <p className='Check-out'>Check out my websites including websites for IIT Gandhinagar and some course projects and some personal projects.</p>
            <div className='buttons'>
                <div className='button' onClick={ShowWebistes}>SHOW ALL</div>
                <div className='button' onClick={ShowWebistes} >HTML5</div>
                <div className='button' onClick={ShowWebistes} >CSS</div>
                <div className='button' onClick={ShowWebistes} >JAVASCRIPT</div>
                <div className='button' onClick={ShowWebistes} >NODE.JS</div>
                <div className='button' onClick={ShowWebistes} >REACT.JS</div>
                <div className='button' onClick={ShowWebistes} >MONGODB</div>
                <div className='button' onClick={ShowWebistes} >PYTHON</div>
            </div>
            <div className='web-sites'>
                <div className='website-collection'>
                <div class="animation-container">
                    <div id="left-screen" class="black-screen"></div>
                    <div id="right-screen" class="black-screen"></div>
                </div>
                    <div className='website website-1'>
                        <p className='website-name'>Yearbook 2022</p>
                        <div className='links'>
                           <a target='_blank' rel="noopener noreferrer" href='https://github.com/Shriyash1234/Yearbook-22'><p className='link'>Github</p></a> 
                           <a target='_blank' rel="noopener noreferrer" href='https://students.iitgn.ac.in/yearbook/2022'><p className='link'>Website</p></a> 
                        </div>
                    </div>
                    <div className='website website-2'>
                        <p className='website-name'>Inter IIT sports meet 2022</p>
                        <div className='links'>
                           <a target='_blank' rel="noopener noreferrer" href='https://github.com/Shriyash1234/Inter-IIT'><p className='link'>Github</p></a> 
                          <a target='_blank' rel="noopener noreferrer" href='https://students.iitgn.ac.in/Inter_IIT_2022/sports_meet'><p className='link'>Website</p></a>  
                        </div>
                    </div>
                    <div className='website website-3'>
                        <p className='website-name'>TED<sup>x</sup>IITGandhinagar</p>
                        <div className='links'>
                           <a target='_blank' rel="noopener noreferrer" href='https://github.com/Shriyash1234/TEDxIITGandhinagar'><p className='link'>Github</p></a> 
                           <a target='_blank' rel="noopener noreferrer" href='https://sites.iitgn.ac.in/tedxiitgandhinagar'><p className='link'>Website</p></a>  
                        </div>
                    </div>
                    <div className='website website-4'>
                        <p className='website-name'>Yearbook 2023</p>
                        <div className='links'>
                           <a target='_blank' rel="noopener noreferrer" href='https://github.com/Shriyash1234/Yearbook-23'><p className='link'>Github</p></a> 
                           <a target='_blank' rel="noopener noreferrer" href='https://students.iitgn.ac.in/yearbook/2023'><p className='link'>Website</p></a> 
                        </div>
                    </div>
                    <div className='website website-5'>
                        <p className='website-name'>Weather</p>
                        <div className='links'>
                           <a target='_blank' rel="noopener noreferrer" href='https://github.com/Shriyash1234/weather-time'><p className='link'>Github</p></a> 
                           <a target='_blank' rel="noopener noreferrer" href='https://shriyash1234.github.io/weather-time/'><p className='link'>Website</p></a>
                        </div>
                    </div>
                    <div className='website website-6'>
                        <p className='website-name'>Portfolio</p>
                        <div className='links'>
                           <a target='_blank' rel="noopener noreferrer" href='https://github.com/Shriyash1234/shriyash'><p className='link'>Github</p></a> 
                           <a target='_blank' rel="noopener noreferrer" href='https://shriyash1234.github.io/shriyash/'><p className='link'>Website</p></a> 
                        </div>
                    </div>
                    <div className='website website-7'>
                        <p className='website-name'>Recommendation Systems</p>
                        <div className='links'>
                           <a target='_blank' rel="noopener noreferrer" href='https://github.com/Shriyash1234/recommendation'><p className='link'>Github</p></a> 
                           <a target='_blank' rel="noopener noreferrer" href='https://shriyash1234.github.io/recommendation/'><p className='link'>Website</p></a> 
                        </div>
                    </div>
                    <div className='website website-8'>
                       <p className='website-name'>World Inequlaity Analysis</p>
                        <div className='links'>
                             <a target='_blank' rel="noopener noreferrer" href='https://github.com/Shriyash1234/World-Inequality-Analysis'><p className='link'>Github</p></a>
                            <a target='_blank' rel="noopener noreferrer" href='https://gregarious-genie-a611f9.netlify.app/'><p className='link'>Website</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Work