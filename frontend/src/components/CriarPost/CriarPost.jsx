import { Image, Laugh, AtSign } from "lucide-react";

function CriarPost() {
    return (
        <section className="bg-amber-50 h-screen flex flex-col items-center">
            
            <form action="" className="bg-(--primary-color) w-full h-[50%] flex gap-10 p-[10px_0_0_0] flex-col">
                <div className="flex h-fit w-full justify-evenly">
                    <a className="rounded-[100px] w-fit h-fit" href="">
                        <div className="w-10 h-10 bg-(--secondary-color) rounded-[100px]"></div>
                    </a>
                    <textarea type="text" className="bg-(--secondary-color) w-[80%] h-28 rounded-[5px] text-white focus:outline-none p-2.5"/>
                </div>  
                <div className="w-[80%] h-fit flex self-end pr-3.5 justify-between">
                    <div className="flex gap-10">
                        <Image className="text-white"></Image>
                        <Laugh className="text-white"></Laugh>
                        <AtSign className="text-white"></AtSign>
                    </div>
                    <div>
                        <button className="text-black p-2.5 bg-white rounded-[5px]">Post</button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default CriarPost;