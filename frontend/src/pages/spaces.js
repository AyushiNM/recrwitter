import React, {useState, useEffect} from "react";
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import SpaceCard from "../components/spaceCard";

const Spaces = () => {

    const [spaces, setSpaces] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getSpaces("Job")
    }, []);

    const getSpaces = (query) => {
        setLoading(true)
        const endpointUrl = 'https://func-recrwitter-01.azurewebsites.net/api/getspaceshttptrigger?code=9IGr7TyOovgu05B-rOg-QogAQCeFU-e9-IvFznRActfxAzFujx0RNA==';
        const params = {
            'query': query,
            'space.fields': 'title,created_at',
            'expansions': 'creator_id'
        }

        axios.get(endpointUrl, {
            params: params
        }).then((res) => {
            setLoading(false);
            if (res.status === 200 && res.data) {
                console.log(res.data)
                const data = res.data.data
                setSpaces(data);
            }
        })
    }

    return (<div>
        <div className="container g-padding-y-110--xs">
            <div className="row">
                <div className={"col-md-12"}>
                    <h1 className="g-font-weight--600 g-margin-b-50--xs">Spaces</h1>
                </div>
            </div>
            <div className="row">
                {!loading ?
                    spaces && spaces.length > 0 ?
                            spaces.map(space => {
                                return (<div class="col-md-4">
                                    <SpaceCard space={space}/>
                                </div>)
                            })
                        : "No Spaces Available for current query"
                    : <ThreeDots height="80" width="80" color='#00acee'/>}
            </div>
        </div>
    </div>)
}

export default Spaces;
