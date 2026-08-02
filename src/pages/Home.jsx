
import Layout from "../components/Layout";

function Home() {
    return (
        <Layout>

        <div className="
                h-full
                flex
                flex-col
                items-center
                justify-center
                text-justify
                text-yellow-600
                bg-[url('/img/castle.png')]
                bg-cover
            
                p-10
            ">
            <div>
            <p className="w-fit
                    rounded-xl
                    backdrop-blur-none
                    font-bold
                    text-yellow-600
                    drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]
                    shadow-lg">

            La Academia Arkhanor es un antiguo internado dedicado al estudio de la magia y las artes místicas. 
            Se encuentra en una región montañosa, junto a un extenso lago, aunque su ubicación exacta permanece 
            en secreto gracias a poderosos encantamientos de ocultación.


            <br/><br/>


            Quienes no poseen afinidad con la magia perciben el lugar como unas antiguas ruinas abandonadas 
            o simplemente son desviados de su camino por hechizos protectores.


            <br/><br/>


            El campus cuenta con torres, bibliotecas, laboratorios alquímicos, jardines encantados y amplios 
            salones donde los estudiantes perfeccionan sus habilidades bajo la guía de experimentados maestros.


            <br/><br/>


            Como medida de seguridad, muchos dispositivos tecnológicos presentan interferencias dentro de 
            los límites de la academia debido a la intensa concentración de energía mágica.


            <br/><br/>


            El lema de la Academia Arkhanor es:

            <br/>

            <strong>
                "La sabiduría ilumina a quienes buscan el conocimiento"
            </strong>


            </p>
        </div>



        </div>

        </Layout>
    );
}

export default Home;