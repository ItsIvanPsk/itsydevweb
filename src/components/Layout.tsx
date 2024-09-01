import React from 'react';
import Hero from './Hero';
import '../styles/Layout.css';

const Layout: React.FC = () => {
  return (
    <>
    <div className="layout">
        <Hero />
    </div>
    <main className='main-container'>
      <div className='main-container'>
        <section>
          <article className='project-article'>
            <h3>Projectos</h3>
            <p>
              Desarrollamos soluciones informaticas de todo tipo,
              tanto páginas web, CRMs y experiencias de realidad virtual.
            </p>
            <div className='project-container'>
              <div>
                <img src='https://static4.depositphotos.com/1013501/430/i/450/depositphotos_4308060-stock-photo-project.jpg' alt='Imagen Projectos'/>
                <p className='project-container-title'><b>Hospital Viladecans</b></p>
                <p className='project-container-subtitle'><em>VR, Experiencia, Inmersivo</em></p>
                <a href='/proyects/titin60cat-vr-experience' className='btn'>Leer más</a>
              </div>
              <div>
                <img src='https://static4.depositphotos.com/1013501/430/i/450/depositphotos_4308060-stock-photo-project.jpg' alt='Imagen Projectos'/>
                <p className='project-container-title'><b>TinTin60CAT</b></p>
                <p className='project-container-subtitle'><em>VR, Museo, Experiencia, Inmersivo</em></p>
                <a href='/proyects/titin60cat-vr-experience' className='btn'>Leer más</a>
              </div>
            </div>
          </article>
        </section>
        <section>
          <article className='team-article'>
            <h3>Nuestro equipo</h3>
            <p>
              En Itsy Dev apostamos por tener un equipo multidisciplinar para poder
              ofertar el mejor servicio posible a nuestros clientes.
            </p>
            <div className='team-container'>
              <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Woman_in_Eyeglasses_%283%29.jpg' alt=''/>
                <h3>Ivan <em>'ItsIvanPsk'</em> Figueredo</h3>
                <p>Founder & Lead Programer</p>
              </div>
              <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Woman_in_Eyeglasses_%283%29.jpg' alt=''/>
                <h3>Nerea <em>'Remtail'</em> López</h3>
                <p>Project Manager</p>
              </div>
              <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Woman_in_Eyeglasses_%283%29.jpg' alt=''/>
                <h3>William <em>'Darkoul'</em> Molina</h3>
                <p>Programer & 3D Artist</p>
              </div>
              <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Woman_in_Eyeglasses_%283%29.jpg' alt=''/>
                <h3>Jenner <em>'Okamen'</em> Sarmiento</h3>
              <p>System Management & SysOps</p>
              </div>
            </div>
          </article>
        </section>
        <section>
          <article className='event-article'>
            <div>
              <h2>Eventos</h2>
              <p>
                Uno de nuestros servicios, orientado en gran medida en el desarrollo de experiencias de realidad virtual, son 
                la organizacion de eventos de muestras de dichas experiencias. Durante el dia o dias de muestra de la experiencia,
                el estudio organiza la experiencia en base a las necesidades del evento, además de dar cobertura técnica al evento.
              </p>
            </div>
            <div className='event-gallery'>
              <a href='#'><img src='https://media.istockphoto.com/id/530685719/es/foto/grupo-de-empresarios-de-pie-en-el-pasillo-sonriendo-y-hablando-juntos.jpg?s=612x612&w=0&k=20&c=_wRU-twHLGnX-8j6AnYm2oIEZjCEA5nKHTgq9_jJrbY=' alt='Imagen de evento'></img></a>
              <a href='#'><img src='https://media.istockphoto.com/id/530685719/es/foto/grupo-de-empresarios-de-pie-en-el-pasillo-sonriendo-y-hablando-juntos.jpg?s=612x612&w=0&k=20&c=_wRU-twHLGnX-8j6AnYm2oIEZjCEA5nKHTgq9_jJrbY=' alt='Imagen de evento'></img></a>
              <a href='#'><img src='https://media.istockphoto.com/id/530685719/es/foto/grupo-de-empresarios-de-pie-en-el-pasillo-sonriendo-y-hablando-juntos.jpg?s=612x612&w=0&k=20&c=_wRU-twHLGnX-8j6AnYm2oIEZjCEA5nKHTgq9_jJrbY=' alt='Imagen de evento'></img></a>
            </div>
          </article>
        </section>
      </div>
    </main>
    </>
  );
}

export default Layout;
