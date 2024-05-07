import React from "react";
import { Helmet } from 'react-helmet';
import Parcours from "./Parcours/Parcours";
import Integration from "./Integration/Integration";
import ApresForm from "./ApresForm/ApresForm";
import PourquoiSZ from "./pourquoiSZ/PourquoiSZ";
// import s from './formations.module.css'

export function Formations (props){
    return (
        <>
        <Helmet>
            <title>Formations</title>
        </Helmet>
        <div className="container-fluid" style={{'marginTop': '20vh'}}>
            
        </div>
        <Parcours/>
        <PourquoiSZ />
        <ApresForm />
        <Integration />
        </>
    ) 
        
    
}