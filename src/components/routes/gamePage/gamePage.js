export default function GamePage({onButtonClick}) {
    return (
        <>
            <h1>This is Game Page</h1>
            <button
                onClick={()=>{onButtonClick && onButtonClick('app')}}
            >
                GoHome
            </button>
        </>
    )
}