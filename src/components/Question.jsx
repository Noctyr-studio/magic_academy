
function Question({ question, selectedValue, onChange }) {
    return (
        <div className="mb-10 flex w-full max-w-3xl flex-col items-center">

            <h2 className="mb-4 text-center text-2xl font-bold text-black">
                {question.question}
            </h2>

            <div className="flex w-full flex-col items-center gap-3">

                {question.options.map((option) => (
                    <label
                        key={option.house}
                        className="flex items-center gap-3 cursor-pointer"
                    >
                        <input
                            type="radio"
                            name={`question-${question.id}`}
                            value={option.house}
                            checked={selectedValue === option.house}
                            onChange={() => onChange(question.id, option.house)}
                        />

                        <span>{option.text}</span>
                    </label>
                ))}

            </div>

        </div>
    );
}

export default Question;