
import { useEffect, useState } from "react";


function Header() {

    const [logged, setLogged] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("userData");
        setLogged(!!user);
    }, []);


    const logout = () => {
        localStorage.removeItem("userData");
        setLogged(false);
        window.location.href = "/";
    };


    return (
        <header className="
    h-full
    flex
    items-center
    justify-center
    bg-[url('/img/fondo-header.jpg')]
    bg-cover
    text-yellow-500
">
            


            <div className="
                mx-[1%]
                flex
                items-center
                justify-center
            ">

                {
                    logged ? (
                        <button onClick={logout}>
                            CERRAR SESIÓN
                        </button>
                    )
                    :
                    (
                        <a 
                            href="https://magic-academy.onrender.com/accounts/login/"
                            target="_blank"
                            className="
                                rounded-lg
                                bg-yellow-500
                                px-6
                                py-2
                                font-bold
                                text-black
                                transition
                                hover:bg-yellow-300
                            "
                        >
                            ACCEDER
                        </a>
                    )
                }

            </div>
        

         

        </header>
    )
}

export default Header;