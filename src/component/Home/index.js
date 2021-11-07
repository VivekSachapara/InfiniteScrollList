import React, { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import User from "../User/index";
import Header from "../Header/index";
import { useNavigate } from 'react-router-dom';

/**
 * Home function component 
 * @returns HTML element
 */
const Home = () => {
    const [data, setuserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pagenumber, setPagenumber] = useState(0);
    const observer = useRef();
    const navigate = useNavigate();
    const lastUserRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setPagenumber(pagenumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading]);

    useEffect(() => {
        let cancel;
        setLoading(true)
        setTimeout(() => {
            axios({
                method: "GET",
                url: `https://randomuser.me/api/?results=15&seed=abc&inc=gender,name,email,phone,cell,id,picture`,
                cancelToken: new axios.CancelToken(c => cancel = c)
            })
                .then(res => {
                    const currentdata = [...data, ...res.data.results]
                    setuserData(currentdata);
                    setLoading(false)
                }
                )
                .catch(e => {
                    if (axios.isCancel(e)) return
                })
            return () => cancel()
        }, 1000)
    }, [pagenumber])

    useEffect(() => {
        const getAccessToken = localStorage.getItem("accessToken");
        if (getAccessToken && getAccessToken.length > 0 ) {
            setPagenumber(pagenumber+1);
        }
        else {
            navigate("/login")
        }
    }, []);

    /**
     * Render list function to dispaly list of users
     * @returns HTML Element
     */
    const renderUserList = () => {
        return (
            <>
                <div className="userDetail">
                    {
                        data.map((elm, index) => {
                            if (data.length === index + 1) {
                                return (
                                    <div ref={lastUserRef} key={index} className="user">
                                        <User data={elm}>
                                        </User>
                                    </div>

                                )
                            }
                            else {
                                return (
                                    <div className="user" key={index}>
                                        <User data={elm}>
                                        </User>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                {
                    loading && <div className="loading">Loading...</div>
                }
            </>
        )
    }

    if (data && data.length > 0) {
        return (
            <>
            <Header></Header>
            {renderUserList()}
            </>
        )
    }

    else {
        return (
        <>
        <Header></Header>
            <div className="loading">Loading...</div>
        </>
        )
    }
}

export default Home;
