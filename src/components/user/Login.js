import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { login, clearErrors } from '../../actions/userActions'

const Login = ({ history }) => {

    const [email, setEmail] = useState();
    const [pasword, setPassword] = useState();

    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);

    useEffect(() => {

        if(error) {

            if(isAuthenticated) {
                history.pushState('/')
            }

            alert.error(error);
            dispatch(clearErrors());
        }
    
       
    }, [dispatch, alert, isAuthenticated, error, history])

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>

                    <MetaData title={'Login'} />

                </Fragment>
            )}
        </Fragment>
    )
}

export default Login
