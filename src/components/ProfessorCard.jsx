
function ProfessorCard({ professor }) {
    return (
        <div
            className="
                overflow-hidden
                rounded-xl
                bg-black/70
                p-4
                text-white
                shadow-xl
                transition
                duration-300
                hover:scale-105
            "
        >
            <img
                src="/img/professor.png"
                alt={professor.name}
                className="
                    mb-4
                    h-72
                    w-full
                    rounded-md
                    object-cover
                "
            />

            <h2 className="mb-3 text-center text-2xl font-bold text-yellow-400">
                {professor.name}
            </h2>

            <p className="text-center">
                <strong>Casa:</strong> {professor.house}
            </p>

            <p className="text-center">
                <strong>Especie:</strong> {professor.species}
            </p>

            <p className="text-center">
                <strong>Afinidad mágica:</strong> {professor.magicAffinity}
            </p>
        </div>
    );
}

export default ProfessorCard;