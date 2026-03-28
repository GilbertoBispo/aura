import BottomBar from "../BottomBar/BottomBar.jsx";
import Post from "./Post.jsx"

function Main() {

    return (
        <main className="bg-(--primary-color) w-full min-h-screen flex flex-col justify-between py-12.5">
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <BottomBar></BottomBar>
        </main>
    )
}

export default Main;