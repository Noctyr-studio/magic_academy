
import { Link } from "react-router-dom";

function HomeButton() {
    return (
        <Link
        to="/"
        className="
            fixed
            top-5
            left-5
            z-50
            rounded-lg
            border
            border-yellow-700
            bg-gradient-to-br
            from-yellow-500
            to-orange-500
            px-5
            py-2
            font-semibold
            text-black
            shadow-lg
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-xl
        "
    >
        🏰 Inicio
    </Link>
    );
}

export default HomeButton;