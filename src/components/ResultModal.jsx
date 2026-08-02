
function ResultModal({ result, onClose, onRestart }) {

    const houses = {
        lion: {
            name: "Casa del León",
            icon: "🦁",
            color: "text-red-600",
            description: "El coraje y el honor guían tu camino."
        },
        snake: {
            name: "Casa de la Serpiente",
            icon: "🐍",
            color: "text-green-600",
            description: "La astucia y la ambición son tu mayor fortaleza."
        },
        hawk: {
            name: "Casa del Halcón",
            icon: "🦅",
            color: "text-blue-600",
            description: "La sabiduría ilumina a quienes buscan el conocimiento."
        }
    };

    const winner = houses[result.winner];

    return (

        <div className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/70
        ">

            <div className="
                w-full
                max-w-xl
                rounded-xl
                bg-stone-900
                p-8
                text-yellow-500
                shadow-2xl
            ">

                <h2 className="mb-6 text-center text-3xl font-bold">
                    🏰 El Oráculo ha decidido...
                </h2>

                <div className="mb-8 text-center">

                    <p className={`text-6xl ${winner.color}`}>
                        {winner.icon}
                    </p>

                    <h3 className={`mt-4 text-3xl font-bold ${winner.color}`}>
                        {winner.name}
                    </h3>

                    <p className="mt-3 text-lg">
                        {winner.description}
                    </p>

                </div>

                <div className="mb-8 rounded-lg bg-black/30 p-4">

                    <h4 className="mb-4 text-center text-xl font-semibold">
                        Puntuación
                    </h4>

                    <p>🦁 León: {result.score.lion}</p>
                    <p>🐍 Serpiente: {result.score.snake}</p>
                    <p>🦅 Halcón: {result.score.hawk}</p>

                </div>

                <div className="flex justify-center gap-6">

                    <button
                        onClick={onRestart}
                        className="
                            rounded-lg
                            bg-yellow-600
                            px-6
                            py-2
                            text-black
                            transition
                            hover:bg-yellow-400
                        "
                    >
                        Repetir encuesta
                    </button>

                    <button
                        onClick={onClose}
                        className="
                            rounded-lg
                            bg-gray-700
                            px-6
                            py-2
                            transition
                            hover:bg-gray-600
                        "
                    >
                        Cerrar
                    </button>

                </div>

            </div>

        </div>

    );
}

export default ResultModal;