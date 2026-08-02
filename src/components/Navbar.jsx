

function Navbar(){

    const links = [
        {
            name:"CASAS",
            url:"/casas"
        },
        {
            name:"ENCUESTA",
            url:"/encuesta"
        },
        {
            name:"LIBROS",
            url:"/libros"
        },
        {
            name:"PROFESORES",
            url:"/profesores"
        },
        {
            name:"HECHIZOS",
            url:"/spells"
        }
    ];


    return (

        <nav className="
            h-full
            flex
            flex-col
            justify-around
            bg-[url('/img/tree.jpeg')]
            bg-cover
        ">
            {
                links.map((link)=>(
                    <a 
                        key={link.name}
                        href={link.url}
                        className="
                        text-center
                        font-macondo
                        text-[1.25rem]
                        grid
                        items-center
                        justify-center
                        m-[10%]
                        p-2
                        h-[3em]
                        rounded-[10%]
                        border
                        border-black
                        bg-purple-900
                        text-yellow-500
                        no-underline
                        transition-all
                        duration-300
                        hover:h-[4em]
                        hover:bg-green-700
                        "
                    >
                        {link.name}
                    </a>
                ))
            }

        </nav>

    )
}


export default Navbar;