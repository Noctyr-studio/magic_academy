
function BookCard({ book }) {
    return (
        <div
            className="
                overflow-hidden
                rounded-xl
                bg-black/70
                p-4
                shadow-xl
                transition-transform
                duration-300
                hover:scale-105
            "
        >
            <img
                src={book.cover}
                alt={book.title}
                className="
                    mb-4
                    h-[500px]
                    w-full
                    rounded-md
                    object-cover
                "
            />

            <h2 className="mb-3 text-center text-2xl font-bold text-yellow-400">
                {book.title}
            </h2>

            <p className="mb-3 text-center text-2xl font-bold text-yellow-400">
                <strong>Autor:</strong> {book.author}
            </p>

            <p className="mb-3 text-center text-2xl font-bold text-yellow-400">
                <strong>Publicación:</strong> {book.release_date}
            </p>

            <p className="mb-3 text-center text-2xl font-bold text-yellow-400">
                <strong>Páginas:</strong> {book.pages}
            </p>
        </div>
    );
}

export default BookCard;