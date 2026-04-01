import { Image } from "lucide-react";

function CriarPost() {
    return (
        <section className="bg-amber-50 h-screen flex flex-col items-center">
            
            <form action="" className="bg-amber-300 w-full h-[50%] flex gap-2.5 p-[10px_0_0_0] flex-col">
                <div className="flex gap-1.25 h-fit w-fit">
                    <a className="rounded-[100px]" href="">
                        <div className="w-10 h-10 bg-(--secondary-color) rounded-[100px]"></div>
                    </a>
                    <textarea type="text" className="bg-amber-600 w-[80%] h-28"/>
                </div>  
                <div className="w-fit h-fit">
                    <Image></Image>
                    
                </div>
            </form>
        </section>
    )
}

export default CriarPost;