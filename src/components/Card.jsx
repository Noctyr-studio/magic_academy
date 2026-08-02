
function Card({ image, title, description }) {
    return (
        <div className="
            w-[250px]
            min-h-[500px]
            overflow-hidden
            rounded-lg
            border
            border-gray-300
            bg-black
            shadow-lg
            transition-transform
            duration-500
            hover:scale-105
            hover:shadow-2xl
        ">

            <img className="h-[40vh] w-full object-cover"
                src={image}
                alt={title}
            />

            <div className="p-5">

                <h3 className="mb-[10px] text-2xl">
                    {title}
                </h3>

                <p className="bg-black text-base text-white">
                    {description}
                </p>

            </div>

        </div>
    );
}

export default Card;