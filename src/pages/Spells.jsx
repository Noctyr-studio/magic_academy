
import spells from "../data/spells.json";
import HomeButton from "../components/HomeButton";
import SpellCard from "../components/SpellCard";

function Spells() {
    return (
        <>
            <HomeButton />

            <div
                className="
                    min-h-full
                    bg-[url('/img/spells.jpg')]
                    bg-cover
                    bg-center
                    bg-fixed
                    p-8
                "
            >
                <h1 className="
                    mb-10
                    text-center
                    text-5xl
                    font-bold
                    text-yellow-400
                    drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]
                ">
                    Hechizos y Encantamientos
                </h1>

                <div
                    className="
                        mx-auto
                        grid
                        max-w-7xl
                        gap-8
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-3
                        xl:grid-cols-4
                    "
                >
                    {spells.map((spell) => (
                        <SpellCard
                            key={spell.name}
                            spell={spell}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Spells;