import axios from "axios"
import { useState } from "react";
import { Card } from "react-bootstrap";
export default function Users() {
    const [post, setPost] = useState([])
    const Url = "https://jsonplaceholder.typicode.com/users"
    axios.get(Url).then((res) => {
        setPost(res.data)
    })
    return (
        <div className="container mt-5">
            <div className="row">
                {
                    post.map(({ id, name, username, email, address}) => {
                        return (
                            <div className="col-md-4" key={id}>
                                <Card style={{ width: '18rem' }} >
                                    <Card.Img variant="top" src="https://image.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-260nw-1029506242.jpg" />
                                    <Card.Body>
                                        <Card.Title>{name}</Card.Title>
                                        <Card.Text>
                                            {email}
                                            </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}