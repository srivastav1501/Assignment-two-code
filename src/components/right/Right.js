import './right.css'
import React, { useEffect } from "react";
import Listitems from './Listitems';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { useNavigate } from "react-router-dom";



const Right = ({ handleDialog, dt, alw, getForm, getAlw }) => {
    const navigate = useNavigate();

    useEffect(() => {
        getForm();
        getAlw();
    }, [])
    return (
        <div className="right">
            <div className='top'>
                <div className='head'>
                    <div className='left_part'>
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="vline" height="5em" width="1em" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 5v14"></path></svg>
                        <span>Corporate Information</span>
                    </div>

                    <div className='right_part'>
                        <button onClick={() => navigate("/register")}>
                            <BorderColorOutlinedIcon sx={{ "fontSize": 'medium' }} />
                        </button>
                    </div>
                </div>

                {(dt.length > 1) && <div className='content'>
                    {
                        dt.map((el, i) => {
                            return <Listitems key={i} el={el} />
                        })
                    }
                </div>}
            </div>

            <div className='middle'>

                <div className='lft'>
                    <div className='head'>
                        <div className='left_part'>
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="vline" height="5em" width="1em" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 5v14"></path></svg>

                            <span>Allowances</span>
                        </div>

                        <div className='right_part'>
                            <button onClick={() => handleDialog()}>
                                <BorderColorOutlinedIcon sx={{ "fontSize": 'medium' }} />
                            </button>
                        </div>
                    </div>

                    {(alw.length > 1) && <div className='allowances'>
                        {
                            alw.map((el, i) => {
                                return <Listitems key={i} el={el} w />
                            })
                        }
                    </div>}
                </div>

                <div className='coll'>

                    <div className='rght'>
                        <div className='head'>
                            <div className='left_part'>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="vline" height="5em" width="1em" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 5v14"></path></svg>

                                <span>Others</span>
                            </div>

                            <div className='right_part'>
                                <button>
                                    <BorderColorOutlinedIcon sx={{ "fontSize": 'medium' }} />
                                </button>
                            </div>
                        </div>
                        <div className='others'>
                            <Listitems title={'Retention Rate Of New Graduate Hires'} value={'Over 50%'} w />
                            <Listitems title={'Work Style ( Overseas Bases )'} value={'Yes'} w />
                            <Listitems title={'Working Environment'} value={'Not Working'} w />
                        </div>
                    </div>


                    <div className='bottom'>
                        <div className='head '>
                            <div className='left_part'>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="vline" height="5em" width="1em" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 5v14"></path></svg>

                                <span>Holidays</span>
                            </div>

                            <div className='right_part'>
                                <button>
                                    <BorderColorOutlinedIcon sx={{ "fontSize": 'medium' }} />
                                </button>
                            </div>
                        </div>

                        <div className='holidays'>
                            <Listitems title={'Retention Rate Of New Graduate Hires'} value={'Over 50%'} w />
                            <Listitems title={'Work Style ( Overseas Bases )'} value={'Yes'} w />
                            <Listitems title={'Working Environment'} value={'Not Working'} w />
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Right;