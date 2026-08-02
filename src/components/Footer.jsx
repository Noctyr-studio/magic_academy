
import noctyr from "../assets/noctyr.png";
import instagram from "../assets/Logo-Instagram.png";
import linkedin from "../assets/linkedin.png";


function Footer(){

    return (

        <footer className="
        h-full
        flex
        justify-around
        items-center
        bg-[url('/img/fondo-footer.avif')]
        bg-cover
        font-bold
        text-yellow-600
        drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]
        shadow-lg">
   


            <div className="redes">


        <a className="flex items-center gap-3"
        href="https://noctyr-studio.com/"
        target="_blank"
        rel="noopener noreferrer">
            <img 
                className="w-8 h-8 object-contain"
                src={noctyr}
                alt="Noctyr"
            />
            Noctyr Studio
        </a>

        <a className="flex items-center gap-3"
        href="https://www.linkedin.com/in/mat%C3%ADas-baltieri-6b09662a6/"
        target="_blank"
        rel="noopener noreferrer">
            <img 
                className="w-8 h-8 object-contain"
                src={linkedin}
                alt="linkedin"
            />
            Matías Baltieri
        </a>
        

        <a className="flex items-center gap-3"
        href="https://www.instagram.com/maty.baltieri/"
        target="_blank"
        rel="noopener noreferrer">

            <img 
                className="w-8 h-8 object-contain"
                src={instagram}
                alt="instagram"
            />
            maty.baltieri
        </a>



  


            </div>



            <div>

                <p>MADE BY:</p>
                <p>Baltieri, Matias</p>

            </div>


        </footer>

    )
}


export default Footer;