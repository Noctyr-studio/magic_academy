
import books from "../data/books.json";
import BookCard from "../components/BookCard";
import HomeButton from "../components/HomeButton";

function Books() {
    return (
        <>
            <HomeButton />

            <div
                className="
                    min-h-full
                    bg-[url('/img/castle.jpeg')]
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
                    Libros de la Academia
                </h1>

                <div
                    className="
                        mx-auto
                        grid
                        max-w-7xl
                        grid-cols-1
                        gap-8
                        md:grid-cols-2
                        lg:grid-cols-3
                    "
                >
                    {books.map((book) => (
                        <BookCard
                            key={book.title}
                            book={book}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Books;