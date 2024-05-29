import { GithubLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react";

function Footer() {
    let data = new Date().getFullYear();

    return (
        <>
            <div className="w-full flex justify-center bg-gradient-to-r from-blue-300 to-blue-400 text-black">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-lg"> <span className="font-[Lora] uppercase">PharmaVida</span> | © {data} Beatriz Alves</p>
                    <p className="text-base">Acesse nossas redes sociais</p>

                    <div className="flex gap-2">
                        <a href="https://www.linkedin.com/in/beatrizalsilva/" target="_blank" className="cursor-pointer hover:text-blue-500">
                            <LinkedinLogo size={32} weight="thin" />
                        </a>
                        
                        <a href="https://github.com/beatrizalsilva" target="_blank" className="cursor-pointer hover:text-blue-500">
                            <GithubLogo size={32} weight="thin" />
                        </a>
                            
                        <a href="https://twitter.com/biacodes" target="_blank" className="cursor-pointer hover:text-blue-500">
                            <XLogo size={32} weight="thin" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;