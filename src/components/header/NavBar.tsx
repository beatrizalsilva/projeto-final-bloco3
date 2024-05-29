import { MagnifyingGlass, Pill, ShoppingCartSimple, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <div className="w-full flex justify-between bg-gradient-to-r from-blue-300 to-blue-400 text-black p-4">
                <div className="flex justify-center">
                    <Pill size={32} weight="thin" />
                    <Link to="/home" className="text-lg font-[Lora] font-bold uppercase hover:text-blue-500 cursor-pointer">PharmaVida</Link>
                </div>

                <div className="flex justify-center relative">
                    <form className="">
                        <input type="search" name="busca" placeholder="Busque categoria..." required className="h-9 w-100 rounded-lg p-4 gap-2" />
                        <button type="submit" className="h-9 w-9 p-2.5 ms-2 bg-blue-400 hover:bg-blue-500 border border-blue-400 hover:border-blue-500 rounded-lg">
                            <MagnifyingGlass size={14} weight="light"/>
                        </button>
                    </form>
                </div>

                <div className="flex gap-3">
                    <p className="hover:text-blue-500">Produtos</p>
                    <Link to="/categorias" className="hover:text-blue-500">Categorias</Link>
                    <Link to="/cadcategoria" className="hover:text-blue-500">Cadastrar categorias</Link>
                    <div className="hover:text-blue-500"><User size={32} weight="thin" /></div>
                    <div className="hover:text-blue-500"><ShoppingCartSimple size={32} weight="thin" /></div>
                </div>
            </div>
        </>
    )
}

export default NavBar;