import './Hero.scss'
import aqua from '../../assets/aqua.webp'
import tutup1 from '../../assets/tutup1.avif'

const Hero = () => {
    return (
    <>
    <section className='Hero'>
        <div>
            <div className="banner">
                <h1>TechCap</h1>
                <p>Selamat datang di website TechCap! Nikmati kemudahan deteksi tutup botol secara instan dan akurat.</p>
            </div>
            <img src={tutup1}/>
        </div>
    </section>
    </>
    )
  };
  
export default Hero;