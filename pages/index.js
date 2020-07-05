import Head from 'next/head'

const Home = () => (
  <div className="container">
    <Head>
      <title>CANYON Endurace CF 8 XS</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">
        Selling <br /><strong>CANYON Endurace CF 8.0</strong>
      </h1>

      <div className="bike-banner"></div>

      <p className="description">
        Original price: <code className="old-price">1.954,85 €</code> <br />
        Selling price: <code>1.800,00 €</code>
      </p>

      <p className="description">
        Iberia lost my bike when I was traveling from Colombia (<a className="external-link" target="_blank" href="https://www.rad-race.com/tdf-iv-colombia/registration">from the canceled TdF IV</a>), and now 3,5 months later it was found.
        <br />
        I had already bought another bike and for that reason, I'm selling this one.
        <br />
        I could only ride it once (<a className="external-link" target="_blank" href="https://www.strava.com/activities/3082066437">76,43 km</a>)
      </p>

      <h2>What's included?</h2>
      <div className="grid">
        <a target="_blank" href="https://www.canyon.com/en-de/gear/components/pedals-and-cleats/clipless-pedals-mtb/shimano-pd-m530-pedals/113003.html" className="card">
          <h3>Pedals (by default not included by CANYON) &rarr;</h3>
          <p>Shimano SH PD-M 530 Black</p>
        </a>

        <a target="_blank" href="https://www.canyon.com/en-de/gear/accessories/bottle-cages-and-bottles/bottle-cages/canyon-sideloader-bottle-cage/9100088.html?dwvar_9100088_pv_farbe=BK" className="card">
          <h3>2 Bottle Cages (by default not included by CANYON) &rarr;</h3>
          <p>Canyon Sideloader Bottle Cage Right Black </p>
        </a>
      </div>

      <h2>Specs</h2>

      <div className="grid">
        <span className="card">
          <h3>Model</h3>
          <p>Endurace CF 8.0</p>
        </span>

        <span className="card">
          <h3>Weight</h3>
          <p>7.46 kg</p>
        </span>

        <span className="card">
          <h3>Material</h3>
          <p>Carbon (CF)</p>
        </span>

        <span className="card">
          <h3>Size</h3>
          <p>XS</p>
        </span>

        <span className="card">
          <h3>Groupset</h3>
          <p>Shimano Ultegra R8000</p>
        </span>

        <a href="https://www.canyon.com/en-de/road-bikes/endurance-bikes/endurace/endurace-cf-8.0/2182.html#!accordions=1_0" className="card">
          <h3>Full Specs &rarr;</h3>
          <p>Find in-depth information about this model in <strong>CANYON</strong> web site.</p>
        </a>
      </div>

      <h2>Gallery</h2>

      <img src="photo-09.jpg" />
      <img src="photo-02.jpg" />
      <img src="photo-03.jpg" />
      <img src="photo-04.jpg" />
      <img src="photo-05.jpg" />
      <img src="photo-06.jpg" />
      <img src="photo-07.jpg" />
    </main>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .bike-banner {
        background-image: url("photo-01.jpg");
        height: 520px;
        width: 100%;
        background-position: center;
        background-size: cover;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .external-link {
        border-bottom: 1px dotted dodgerblue;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0 0 2rem;
        line-height: 1.15;
        font-size: 3rem;
      }

      .title,
      .description {
        text-align: center;
        padding-left: 3rem;
        padding-right: 3rem;
        max-width: 800px;
        box-sizing: border-box;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.3rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        color: #009600;
      }
      code.old-price {
        text-decoration: line-through;
        color: #cf0000;
        font-size: 1.1rem;
      }

      h2 {
        font-size: 1.7rem;
        margin: 4rem 0 1.5rem;
      }

      .grid {
        max-width: 800px;
      }

      .card {
        display: block;
        margin: 1rem 1rem 1.6rem ;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 0.4rem 0;
        font-size: 1.4rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      img {
        max-width: 100vw;
        display: block;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
