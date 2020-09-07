import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { actions } from '../../redux/actions/auth';

export const LikeButton = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        messageId: 23128
    })
    // Do api call to get message using message id
    const getMessage = () => {
        dispatch(actions.l)
    }
    // Do api call to add like object to likes array
    // Update number of likes and display on page
    // save like id in local state
    // Toggle like from on to off using like id
    // Toggle function also updates local state of lide id



    const showState = (state) => {
        console.log(state)
    }

    return(
        <button onClick={showState}>Like</button>
    )
}