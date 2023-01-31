import './Main.css';
import saleh from '../assets/saleh.jpg'
function Main() {
  return (
    <main>
    <section id="hero">
        <div className="section-inner">
            <img src={saleh} alt="saleh safe" className="profile-img"/>
            <h1>Hi, I'm Boberick the llama.</h1>
        </div>
    </section>
    <section id="about">
        <div className="section-inner">
            <h2>About me</h2>
            <p>I'm a really awesome llama. Every day I wake up, munch on some grass, do some coding and then go back to sleep.</p>
            <h3>Achievements</h3>
            <ul className='list'>
                <li>Bachelor of photogenic posing, 2010</li>
                <li>Llamaness certification from the Llama Institute, 2014</li>
                <li>I coded a website, 2017</li>
            </ul>
        </div>
    </section>
    <section id="contact">
        <div className="section-inner">
            <h2>Contact me</h2>
            <p>You can find me on:</p>
            <ul className='list'>
                <li><a href="#Home">Twitter</a></li>
                <li><a href="#About">Reddit</a></li>
                <li><a href="#Contact">Instagram</a></li>
            </ul>
            <p>Or, you can <a href="#Contact">send me an email</a>.</p>
        </div>
    </section>
</main>
)
}

export default Main