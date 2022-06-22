import Part from "./Part";

const Content = (props) => {
    return (
        <>
            {
                props.parts.map(part => {
                    return <Part part={part} />
                })
            }
        </>
    )
}

export default Content;