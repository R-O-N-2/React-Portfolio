
const Projects = () => {
    return (
    <div className="projects">
    <h1>My Projects:</h1>
    <ul>
        
        <li>
            <p>  
                <h3><a href="https://projectwrx.netlify.app/" target="_blank">Project WRX</a></h3>
                Project WRX is designed to help organize team oriented projects and tasks. Using front end components and modals: users are allowed to create an account as well as a team, or teams that include multiple users. Within "teams", users can work with "projects" that house "tasks" for that specific project and it's assigned users. CRUD functionality on the front end allows for users, projects, and tasks to be created, updated, and deleted. Controllers encapsulate the backend CRUD and Models are used as abstract objects that are also polymorphic and inherit properties from input on the front end.
            </p> 
        </li>


        <li>
            <p>  
                <h3><a href="https://amiibo-attack.surge.sh/" target="_blank">Amiibo Attack</a></h3>
                A kid friendly full stack application that jazzes up the regular "rock paper scissors" concept.  Amiibo Attack is a site where amiibo connoisseurs come to challenge their knowledge about various Nintendo Amiibos and their origin. Users have the ability to search amiibos and view their origin date / game series while also having the ability to reveal a randomized winner when clicking the "fight" button.  Simple, and effective!
            </p> 
        </li>


        <li>
            <p>  
                <h3><a href="https://ronspokedex.surge.sh/" target="_blank">Ron's Pokedex</a></h3>
                A replica of the original pokedex that includes every pokemon that ever existed.  Ron's Pokedex was designed in efforts of catering to youth that would benefit from a more straight forward version of the original pokedex. Simply enter any pokemon's name or id number in the search bar and return a beautiful image of it.
            </p> 
        </li>


        
   
    </ul>
    </div>
)}

export default Projects