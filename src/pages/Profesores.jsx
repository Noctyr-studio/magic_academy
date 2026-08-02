
import professors from "../data/professors.json";
import ProfessorCard from "../components/ProfessorCard";
import HomeButton from "../components/HomeButton";

function Professors() {
    return (
        <>
            <HomeButton />

            <div
                className="
                    min-h-full
                    bg-[url('/img/charactersbg.jpg')]
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
                    Profesores
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
                    {professors.map((professor) => (
                        <ProfessorCard
                            key={professor.name}
                            professor={professor}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Professors;