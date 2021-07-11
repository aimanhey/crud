import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const axios = require("axios");

function Example() {
    const [lost, setLost] = useState([]);
    useEffect(
        () =>
            axios
                .get("https://jsonplaceholder.typicode.com/todos")
                .then((res) => {
                    console.log(res.data);
                    setLost(res.data);
                    return res;
                }),
        []
    );

    const Lists = (props) => {
        return <i class="list-group-item">{props.value}</i>;
    };

    const Listsitem = () =>
        lost.map((data) => {
            console.log(data.title);
            return <Lists key={data.id} value={data.title} />;
        });

    return (
        <div className="mt-8 mb-8">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Exampl Component</div>

                        <div className="card-body">
                            <ul class="list-group">
                                <Listsitem />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
