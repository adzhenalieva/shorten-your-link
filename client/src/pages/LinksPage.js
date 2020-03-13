import React, {useCallback, useContext, useEffect, useState} from 'react';
import {AuthContext} from "../context/AuthContext";
import {useHttp} from "../hooks/http_hook";
import {Loader} from "../components/Loader";
import {LinksList} from "../components/LinksList";

export const LinksPage = () => {
    const [links, setLinks] = useState([]);
    const {token} = useContext(AuthContext);
    const {request, loading} = useHttp();

    const fetchLiks = useCallback(async () => {
        try {
            const fetched = await request('/api/link', 'GET', null, {
                Authorization: `Bearer ${token}`
            });
            setLinks(fetched);
        } catch (e) {
        }
    }, [token, request]);

    useEffect(() => {
        fetchLiks();
    }, [fetchLiks]);

    if (loading) {
        return <Loader/>
    }

    return (
        <>
            {!loading && <LinksList links={links}/>}
        </>
    )
};
