
function SpellCard({ spell }) {
    return (
        <div
            className="
                rounded-xl
                bg-black/70
                p-5
                text-white
                shadow-xl
                transition
                duration-300
                hover:scale-105
            "
        >
            <h2 className="mb-4 text-center text-2xl font-bold text-yellow-400">
                {spell.name}
            </h2>

            <p className="mb-2 text-center">
                <strong>Tipo:</strong> {spell.type}
            </p>

            <p className="mb-2 text-center">
                <strong>Efecto:</strong> {spell.effect}
            </p>

            <p className="text-center">
                <strong>Luz:</strong> {spell.light}
            </p>
        </div>
    );
}

export default SpellCard;