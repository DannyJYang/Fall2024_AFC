import './Landing.css'

export default function Landing() {
  return (
    <>
      {/* <img src={BackgroundPhoto} alt="Dolby Cinema Background Photo" /> */}
      {/* <h1 style={{color:"white"}}>This is the landing page</h1> */}
      {/* <h1 style={{}}>This is the landing page</h1> */}
      <div className="video-container">
        <iframe
          width="1600px"
          height="900px"
          src="https://www.youtube.com/embed/KiEeIxZJ9x0?controls=0"
          title="AMC Movie Theater Intro Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
