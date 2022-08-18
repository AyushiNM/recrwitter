import React, {useState, useEffect} from "react";
import {TwitterTweetEmbed} from 'react-twitter-embed';
import {ThreeDots} from 'react-loader-spinner'
import axios from 'axios';

const Jobs = () => {

    const [loading, setLoading] = useState(false);
    const [tweets, setTweets] = useState([]);
    const [domains, setDomains] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [locations, setLocations] = useState([]);
    const [filters, setFilters] = useState({domains: [], companies: [], locations: [], max_results: 10});
    useEffect(() => {
        setLoading(true);
        getTweets().then(async res => {
            if (res.status === 200) {
                const data = res.data
                setTweets(JSON.parse(JSON.parse(data['tweets'])));
                setDomains(JSON.parse(JSON.parse(data['domains'])));
                setCompanies(JSON.parse(JSON.parse(data['companies'])));
                setLocations(JSON.parse(JSON.parse(data['locations'])));
                setLoading(false);
            }
        });
    }, []);

    const getTweets = () => {
        const baseURL = "https://func-recrwitter-01.azurewebsites.net/api/gettweetshttptrigger?";
        let options = "max_results=" + filters.max_results;
        if (filters.locations.length > 0) {
            options += "&location=" + filters.locations.join(',')
        }
        if (filters.companies.length > 0) {
            options += "&company=" + filters.companies.join(',')
        }
        if (filters.domains.length > 0) {
            options += "&domain=" + filters.domains.join(',')
        }
        setTweets([]);
        return axios.get(baseURL + options);
    }

    const handleFilterChange = async (type, item) => {
        let data = filters[type];
        if (!data.find((name) => name === item.name)) {
            filters[type] = [...data, item.name]
        } else {
            filters[type] = data.filter((name) => name !== item.name)
        }
        await setFilters(filters);
        console.log(filters);
        await getTweets().then(res => {
            if (res.status === 200) {
                const data = res.data
                setTweets(JSON.parse(JSON.parse(data['tweets'])));
                setLoading(false);
            }
        });

    }

    return (<div>
            <div class="container g-padding-y-110--xs">
                <div className="row">
                    <div className={"col-md-12"}>
                        <h1 className="g-font-weight--600 g-margin-b-50--xs">Jobs</h1>
                    </div>
                </div>

                <div className={"row"}>
                    <div className={"col-md-4"}>
                        <div>
                            <h5 className="g-font-weight--700">Company</h5>
                            <ul className="filter-list g-margin-b-30--xs g-padding-l-10--xs">

                                {companies && companies.length > 0 && !loading ? companies.map(item => {
                                    return (<li className="filter-list-item">
                                        <input key={item.name}
                                               onChange={() => handleFilterChange('companies', item)}
                                               type="checkbox"/>
                                        <span className="g-margin-l-5--xs">{item.name}</span>
                                    </li>)
                                }) : <ThreeDots height="80" width="80" color='#00acee'/>}
                            </ul>
                        </div>
                        <div>
                            <h5 className="g-font-weight--700">Job Type</h5>
                            <ul className="filter-list g-margin-b-30--xs g-padding-l-10--xs">

                                {domains && domains.length > 0 && !loading ? domains.map(item => {
                                    return (<li className="filter-list-item">
                                        <input key={item.name}
                                               onChange={() => handleFilterChange('domains', item)}
                                               type="checkbox"/>
                                        <span className="g-margin-l-5--xs">{item.name}</span>
                                    </li>)
                                }) : <ThreeDots height="80" width="80" color='#00acee'/>}
                            </ul>
                        </div>
                        <div>
                            <h5 className="g-font-weight--700">Location</h5>
                            <ul className="filter-list g-margin-b-30--xs g-padding-l-10--xs">

                                {locations && locations.length > 0 && !loading ? locations.map(item => {
                                    return (<li className="filter-list-item">
                                        <input key={item.name}
                                               onChange={() => handleFilterChange('locations', item)}
                                               type="checkbox"/>
                                        <span className="g-margin-l-5--xs">{item.name}</span>
                                    </li>)
                                }) : <ThreeDots height="80" width="80" color='#00acee'/>}
                            </ul>
                        </div>


                    </div>
                    <div className={"col-md-8"}>
                        {!loading ? tweets && tweets.length > 0 ? tweets.map(tweet => {
                            return (<TwitterTweetEmbed tweetId={tweet._id}/>)
                        }): "No tweets are available for the selected filters" : <ThreeDots height="80" width="80" color='#00acee'/>}

                    </div>

                </div>

            </div>
        </div>
    )
};
export default Jobs;
