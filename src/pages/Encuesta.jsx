
import { useState } from "react";
import { questions } from "../data/questions";

import Question from "../components/Question";
import HomeButton from "../components/HomeButton";
import ResultModal from "../components/ResultModal";

function Survey() {

    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    function handleAnswer(questionId, house) {

        setAnswers((prev) => ({
            ...prev,
            [questionId]: house,
        }));

        setError("");

    }

    function handleSubmit() {

        if (Object.keys(answers).length !== questions.length) {
            setError("Debes responder todas las preguntas.");
            return;
        }

        const score = {
            lion: 0,
            snake: 0,
            hawk: 0,
        };

        Object.values(answers).forEach((house) => {
            score[house]++;
        });

        let winner = "lion";

        if (score.snake > score[winner]) winner = "snake";
        if (score.hawk > score[winner]) winner = "hawk";

        setResult({
            winner,
            score,
        });

    }

    function restartSurvey() {
        setAnswers({});
        setResult(null);
        setError("");
    }

    return (
        <>
            <HomeButton />

            <div className="
                min-h-full
                bg-[url('/img/fondo.jpg')]
                bg-cover
                bg-fixed
                bg-center
                flex
                justify-center
                p-8
            ">

                <div className="
                    w-fit
                    rounded-xl
                    bg-gradient-to-br
                    from-orange-500/75
                    to-yellow-500/75
                    backdrop-blur-md
                    p-6
                    shadow-2xl
                ">

                    <form
                        className="flex flex-col items-center"
                        onSubmit={(e) => e.preventDefault()}
                    >

                        {questions.map((question) => (
                            <Question
                                key={question.id}
                                question={question}
                                selectedValue={answers[question.id]}
                                onChange={handleAnswer}
                            />
                        ))}

                    </form>

                    {error && (
                        <p className="mt-4 text-center font-semibold text-red-800">
                            {error}
                        </p>
                    )}

                    <div className="mt-8 flex justify-center">

                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="
                                w-1/2
                                rounded-lg
                                bg-gray-600
                                py-3
                                text-3xl
                                transition
                                duration-300
                                hover:bg-black
                                hover:text-white
                            "
                        >
                            Enviar
                        </button>

                    </div>

                </div>

            </div>

            {result && (
                <ResultModal
                    result={result}
                    onClose={() => setResult(null)}
                    onRestart={restartSurvey}
                />
            )}

        </>
    );
}

export default Survey;