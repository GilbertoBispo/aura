import { Image, Laugh, AtSign, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

function CriarPost() {
    const [text, setText] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(text)

        try {
            const response = await fetch("http://localhost:3000/api/novo-post", {
                method: "POST",
                body: JSON.stringify({text}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            
        } catch(err) {
            console.log("Erro: ", err)
        }
        
    }
    let navigate = useNavigate()

    return (
        <section className="bg-amber-50 h-screen flex flex-col items-center">
            
            <form onSubmit={handleSubmit} className="bg-(--primary-color) w-full h-[50%] flex gap-10 p-[10px_0_0_0] flex-col">
                <div className="flex h-fit w-full justify-evenly">
                    <div className="w-fit h-fit flex flex-col items-center gap-5">
                        <a href="#">
                            <div className="w-10 h-10 bg-(--secondary-color) rounded-[100px]"></div>
                        </a>
                        <a href="/">
                            <X className="w-7.5 h-7.5 text-(--tertiary-color)"></X>
                        </a>
                    </div>
                    <textarea value={text} onChange={(e) => {setText(e.target.value)}} name="postagem" className="bg-(--secondary-color) w-[80%] h-28 rounded-[5px] text-white focus:outline-none p-2.5"/>
                </div>  
                <div className="w-[80%] h-fit flex self-end pr-3.5 justify-between">
                    <div className="flex gap-10">
                        <Image className="text-white"></Image>
                        <Laugh className="text-white"></Laugh>
                        <AtSign className="text-white"></AtSign>
                    </div>
                    <div>
                        <input onClick={() => {navigate("/")}} type="submit" className="text-black p-2.5 bg-white rounded-[5px]" value={"Post"}></input>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default CriarPost;