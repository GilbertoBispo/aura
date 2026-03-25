import { Menu } from "lucide-react";

function Header() {
    return (
        // a propriedade "shadow-[]" usa valores separados por underscores
        <header className="bg-(--secondary-color) h-12.5 w-full mb-8.5 shadow-[0px_4px_4px_0px_#00000040]">
            <div className="flex justify-between items-center h-full px-3.5">
                <h1 className="font-bold text-(--white-text) text-2xl">Aura</h1>
                {/*Usando tag "<button>" para acessibilidade*/}
                <button className="text-(--tertiary-color)">
                    <Menu/>
                </button>
            </div>
        </header>
    )
}

export default Header;