import { useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { listar } from "../../../services/Service";
import CardCategorias from "../card/CardCategoria";

function ListarCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try {
            await listar("/categorias", setCategorias);
        } catch (error: any) {
            alert("Erro ao listar categorias");
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length])

    return (
        <>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    {categorias.length === 0 &&
                        <span className="text-3xl text-center my-8">
                            Nenhuma categoria foi encontrada
                        </span>
                    }
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categorias.map((categoria) => (
                            <CardCategorias key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
          </div>
        </>
      )
    }
    
export default ListarCategorias;
