

import Layout from "../components/Layout";
import Card from "../components/Card";

import { houses } from "../data/houses";

function Casas() {
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
            <div className="flex justify-center p-[4vh] ">
                <p className="text-center text-[1.8rem] font-semibold 
                    text-yellow-500
                    drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]
                   ">
                    Todos quieren aprender magia...
                    <br />
                    ¿Posees lo necesario para ser un mago?
                </p>
            </div>

            <h2 className="text-center text-[1.5rem] font-semibold  text-yellow-500 drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]">
                Aquí tienes información sobre cada casa.
            </h2>

            <div className="
                flex
                flex-wrap
                justify-center
                items-start
                gap-10
                w-full
                max-w-[1200px]
                p-10
                text-yellow-500
            ">

                {houses.map((house) => (
                    <Card
                        key={house.id}
                        image={house.image}
                        title={house.title}
                        description={house.description}
                    />
                ))}

            </div>
        </div>
        </Layout>
    );
}

export default Casas;