import react, { useEffect, useState } from "react";
import axios from "axios";
import "../Components/Card.css";
import img from "../assets/img.jpg";


const Card = () => {

    let [datas, setData] = useState([]);

    useEffect(() => {
        axios.get("https://www.reddit.com/r/reactjs.json").then(
            (res) => {
                console.log(res.data.data.children);
                // let users = new Array();
                // users.push(res.data.data.children);
                setData(res.data.data.children);
                // console.log(users);
            }, (err) => {
                console.log(err);
            }
        )
    }, [])

    return (
        <>
            <div className="main">
            <div className="container">
                <div className="row">
                    {

                        datas.map((data) => {

                            return (
                                <div className="col-lg-4 p-3">
                                    <div className="card shadow-lg">
                                        <img className="card-img-top" src={img} />
                                            <div class="card-img-overlay">
                                                <h4 className="card-title">{data.data.title}</h4>
                                                {/* <p className="card-text text-white p-2">{data.data.selftext_html}</p> */}
                                                <a href={data.data.url} className="card-link" target="_blank"><button className="btn btn-info text-dark">Click Here</button></a>
                                                <i className="fa fa-thumbs-up text-warning p-2 icon"><span className="card-text m-2 text-white">{data.data.score}</span></i>
                                            </div>
                                     </div>
                                </div>




                            )

                        })



                    }
                </div>
            </div>
            </div>
        </>
    )
}

export default Card;

