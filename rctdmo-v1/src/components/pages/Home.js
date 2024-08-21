import TodoList from "./TodoList";

const Home = (props) => {

    return(
    <>
        <p>{props.title}</p>

        <TodoList/>
    </>
    )
}
 
export default Home;