import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import DetailPage from "./DetailPage"


export default function HomePage() {
    const [projects, setProjects] = useState([])

    const fetchData = () => {
        axios.get('http://127.0.0.1:8000/api/projects')
            .then(resp => {
                const data = resp.data
                setProjects(data.data)

            })
            .catch(err => { console.log(err) })
    }
    useEffect(fetchData, [])


    return (
        <section>
            <div className="container">
                <h1>All My Project</h1>
                {projects.map(project =>
                    <div className="card" key={project.id}>
                        <div className="card-body">
                            <h3>{project.title}</h3>
                            <div>{project.client}</div>
                            <p>{project.description}</p>

                        </div>
                        <Link to={`/project/${project.id}`}>read more</Link>

                    </div>

                )}
            </div>
        </section>
    )
}