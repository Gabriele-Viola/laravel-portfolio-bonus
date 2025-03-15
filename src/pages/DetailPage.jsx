import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function DetailPage() {
    const [project, setProject] = useState([])
    const { id } = useParams()

    const fetchShowData = () => {
        axios.get(`http://127.0.0.1:8000/api/projects/${id}`)
            .then(resp => {
                const data = resp.data
                console.log(data.data);
                setProject(data.data)

            })
            .catch(err => { console.log(err) })
    }
    useEffect(fetchShowData, [id])


    return (
        <section className="container">
            <h2>{project.title}</h2>
            <h5>{project?.category?.name}</h5>
            <div className="card">
                <div className="card-body">
                    <p>{project.description}</p>
                    <div>
                        technologies:
                        <ul>
                            {project.technologies && project?.technologies?.map(technology =>
                                <li><span>
                                    {technology.name}
                                </span>
                                    <img src={`http://127.0.0.1:8000/${technology.image}`} alt="" />
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )
}