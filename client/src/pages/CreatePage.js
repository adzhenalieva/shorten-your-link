import React, {useContext, useEffect, useState} from 'react';
import {useHttp} from "../hooks/http_hook";
import {AuthContext} from "../context/AuthContext";

const {useHistory} = require("react-router-dom");

export const CreatePage = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const {request} = useHttp();
    const [link, setLink] = useState('');

    const pressHandler = async event => {
        if (event.key === 'Enter') {
            try {
                const data = await request('/api/link/generate', 'POST', {from: link}, {
                    Authorization: `Bearer ${auth.token}`
                });
                history.push(`/detail/${data.link._id}`);
            } catch (e) {
            }
        }
    };

    useEffect(() => {
        window.M.updateTextFields();
    }, []);

    return (
        <div className="row">
            <div className="col s8 offset-s2 pt2">
                <div className="input-field">
                    <input
                        placeholder="Enter link"
                        id="link"
                        type="text"
                        className="yellow-input"
                        value={link}
                        onKeyPress={pressHandler}
                        onChange={e => setLink(e.target.value)}/>
                    <label htmlFor="link">Enter link</label>
                </div>
            </div>
        </div>
    )
};
