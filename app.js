// REACT IDEATION TO WRITE HTML INSIDE JS
// createElement was not efficient ..so jsx came in picture
// const heading = document.createElement('h1')
// heading.innerHTML = 'Hello world!'
// const root = document.getElementById('root')
// root.appendChild(heading)
// React is global variable
// react element is an object
// there will always be one root, anything inside this will be overridden
const heading = React.createElement('h1', { //type or name of tag
    class: 'test' //attribute
}, 'Hello React!')//text
//core library will always be there
const header2 = React.createElement('h2', {

}, 'Header 2')
const header3 = React.createElement('h3', {

}, 'Header 3')
//base container
const container = React.createElement('div', {
    id : 'container'
}, [heading, header2, header3])
const rootId = document.getElementById('root')
const root = ReactDOM.createRoot(rootId) //second lib in picture
//passing react element inside root
root.render(container)//heading will give us document object