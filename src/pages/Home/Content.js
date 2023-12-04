import './Content.scss'
import decor from '../../assets/decor.png'
import tutup from '../../assets/tutup.webp'
import aqua2 from '../../assets/aqua2.webp'
import tutup2 from '../../assets/tutup2.jpeg'
import { Link } from 'react-router-dom';
import React from 'react';
import adi from '../../assets/team/adi.png'
import alfaraja from '../../assets/team/alfaraja.png'
import irfan from '../../assets/team/irfan.png'
import nabila from '../../assets/team/nabila.png'
import ryan from '../../assets/team/ryan.png'
import vira from '../../assets/team/vira.png'


const Content = () => {
    return (
    <>
    <article className='Desc'>
        <section className='text'>
            <p>Teknologi Canggih</p>
            <h2>Kami menggunakan teknologi pengecekan terkini untuk memastikan botol yang akurat dan efisien.</h2>
        </section>
        <img src={decor}/>
    </article>
    <article className='Contents'>
        <section className='content1'>
            <img src={tutup}/>
            <h3>Sistem botol revolusioner yang mengubah dunia.</h3>
            <p>Dibuat dengan teknologi terkini dan algoritma andal, sistem botol kami menjamin efisiensi dan keberhasilan di industri minuman.</p>
        </section>
        <section className='content2'>
            <img src={tutup2}/>
            <h3>Platform terintegrasi untuk deteksi, identifikasi, dan pelaporan.</h3>
            <p>Sistem kami tidak hanya mendeteksi, tetapi juga mengidentifikasi dan melaporkan hasil deteksi yang cepat dan akurat.</p>
        </section>
    </article>
    <article className='Deteksi'>
        <h3>DETEKSI SEKARANG!</h3>
        <p>Tunggu apa lagi? Ayo bergabung dengan sistem botol terhebat di dunia! Lebih cepat, lebih andal, dan lebih inovatif.</p>
        <button><Link to='deteksi' className='links'>Mulai Deteksi</Link></button>
    </article>
    <article className='FAQ'>
        <h2>FAQ</h2>
        <div>
            <section>
                <h3>Apa saja fitur utama sistem ini?</h3>
                <p>Sistem kami menawarkan botol yang akurat, identifikasi, pelaporan cepat, dan teknologi canggih.</p>
            </section>
            <section>
                <h3>Apakah sistem ini mudah digunakan?</h3>
                <p>Ya, aplikasi kami dirancang user-friendly dan intuitif, sehingga mudah digunakan oleh siapa saja.</p>
            </section>
            <section>
                <h3>Berapa biaya untuk menggunakan sistem ini?</h3>
                <p>Untuk harga GRATIS anda bisa akses dimanapun dan kapanpun</p>
            </section>
            <section>
                <h3>Bagaimana cara mendapatkan dukungan pelanggan?</h3>
                <p>Hubungi kami melalui halaman kontak atau email dukungan teknis yang tercantum di situs web.</p>
            </section>
        </div>
    </article>
    <article className='Team'>
        <h2>Our Team</h2>
        <div className='PersonContainer'>
        <div className='Person'>
            <img src={adi} alt="Team Member 1" />
            <h3>Adi Kaswandi</h3>
            <p>Data Enginner</p>
          </div>

          <div className='Person'>
            <img src={alfaraja} alt="Team Member 2" />
            <h3>Alfaraja Agung Prasetyo</h3>
            <p>UI/UX Developer</p>
          </div>

          <div className='Person'>
            <img src={irfan} alt="Team Member 3" />
            <h3>Irfan </h3>
            <p>Frontend Developer</p>
          </div>

          <div className='Person'>
            <img src={ryan} alt="Team Member 1" />
            <h3>Muhammad Ryan Giggs Simamora</h3>
            <p>Backend Developer</p>
          </div>

          <div className='Person'>
            <img src={nabila} alt="Team Member 2" />
            <h3>Nabilah Fauziyyah</h3>
            <p>Writer</p>
          </div>

          <div className='Person'>
            <img src={vira} alt="Team Member 3" />
            <h3>Vira Indra Asih</h3>
            <p>ML Engineer</p>
          </div>
        </div>
    </article>

    </>
    )
  };
  
export default Content;