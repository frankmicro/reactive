import React from "react"
import ReactDOM from "react-dom/client"

const header2 = (//react element
    <h3 id="h2" key="h2">
        Header 3 i am an element
    </h3>
) 
const Title = () => {//can also be called if function
    return (
        <h3>Food Villa</h3>
    )
}
const HeaderComponent = () => (//function component
        <div>
            {header2}
            {Title()}
            <Title/>
            <h1>H1 tag here..</h1>
            <h2>H2 tag here..</h2>
        </div>
    );

const root = ReactDOM.createRoot(document.getElementById('root')) //second lib in picture
//passing react element inside root
root.render(<HeaderComponent/>)//heading will give us document object