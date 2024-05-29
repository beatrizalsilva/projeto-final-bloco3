import ListarCategorias from "../../components/categorias/listar/ListarCategorias";

function Home() {
    return (
        <>
            <div className="flex justify-center bg-gradient-to-r from-blue-300 to-blue-400 font-[Open Sans]">
                <div className="container grid grid-cols-2">

                    <div className="flex flex-col items-center gap-4 justify-center py-4">
                        <h1 className="text-5xl font-bold font-[Lora] italic">Seja Bem-Vindo</h1>
                        <p className="text-xl">Cada medicamento é um caminho para a sua saúde!</p>
                    </div>

                    <div className="max-w-7xl flex flex-col items-center">
                        <img src="src/assets/images/home.png" alt="Imagem Tela Inicial" width="400px" />
                    </div>
                </div>
            </div>
            <ListarCategorias />
        </>
    )
}

export default Home;