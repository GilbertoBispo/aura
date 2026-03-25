import { ThumbsUp, ThumbsDown, MessageSquareMore, Archive } from "lucide-react";

function Post() {
    return (
        <div className="border-y border-(--secondary-color) m-h-82.5 p-4 flex flex-col gap-3.75">
            <div className="flex gap-1.25">
                <a className="rounded-[100px]" href="">
                    <div className="w-10 h-10 bg-(--secondary-color) rounded-[100px]"></div>
                </a>
                <span className="h-fit text-white">Nome do Perfil</span>
                <span className="h-fit text-white text-[12px]">Lv. 54</span>
            </div>

            <div className="flex flex-col gap-3.75 items-center">
                <p className="border border-(--secondary-color) rounded-[5px] p-1.25 text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quod velit et libero, dolore soluta placeat nisi ullam optio aspernatur iusto eligendi ad autem maiores necessitatibus, odio aliquam dolor aperiam?</p>

                <img className="rounded-[10px] w-[80%] max-w-80 h-28.75" src="https://i.redd.it/the-gigachad-v0-6gnpz6gr2wsc1.jpg?width=750&format=pjpg&auto=webp&s=56a8490ccac6d4cc9f5c6926aadf952e250320b1" alt="gigachad image example"/>
            </div>

            <div className="w-fit flex text-white gap-2.5 items-center justify-between">
                <button><ThumbsUp/></button>
                <button><ThumbsDown/></button>
                <button><MessageSquareMore/></button>
                <button><Archive/></button>
            </div>
        </div>
    )
}

export default Post;