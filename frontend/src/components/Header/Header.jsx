import { motion, AnimatePresence } from "motion/react"
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {

    const [icon, setIcon] = useState(false);

    function toggleIcon() {
        if(icon == true) {
            setIcon(false);
        } else {
            setIcon(true);
        }
        console.log(icon);
    }

    return (
        // a propriedade "shadow-[]" usa valores separados por underscores
        <header className="bg-(--secondary-color) h-12.5 w-full shadow-[0px_5px_6px_-1px_#00000040] fixed">
            <div className="flex justify-between items-center h-full px-3.5">
                <h1 className="font-bold text-(--white-text) text-2xl">Aura</h1>
                {/*
                    - Usando tag "<button>" para acessibilidade

                    - No onClick, chamamos a função dentro do escopo sem os parênteses 
                */}
                <button onClick={toggleIcon} className="text-(--tertiary-color)">
                    <Menu/>
                </button>
                
            </div>
            {/* Exibe a tag <aside> se "icon" for verdadeiro */}
            <AnimatePresence>
                {icon && (
                    <motion.aside
                        initial={{ x: -500 }} 
                        animate={{ x: 0, opacity: 1}}
                        exit={{ x: -500,
                            transition: {
                                duration: 0.6
                            }
                         }}
                        transition={{ duration: 0.6, ease: [0, 0.71, 0.2, 1]}}
                    className="ativo h-full bg-(--primary-color) w-[80%] top-0 fixed shadow-[5px_0px_6px_-1px_#00000040] z-30">
                        {/* Informações do usuário */}
                        <div className="flex gap-2.5 p-8">
                            <a className="rounded-[100px]" href="">
                                <div className="w-10 h-10 bg-(--secondary-color) rounded-[100px]"></div>
                            </a>
                            <span className="h-fit text-white font-semibold">Nome do Perfil</span>
                            <span className="h-fit text-white text-[12px] font-light">Lv. 54</span>
                        </div>

                        {/* Lista de opções */}
                        <nav className="h-full flex justify-center">
                            <ul className="text-white text-2xl h-60 flex flex-col gap-4 justify-center items-center font-semibold">
                                <li>Home</li>
                                <li>Pesquisar</li>
                                <li>Conta</li>
                                <li>Configurações</li>
                                <li>Sobre</li>
                            </ul>
                        </nav>
                    </motion.aside>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header;