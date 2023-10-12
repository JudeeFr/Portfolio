import React, {useState, useEffect} from "react";
import { webDev } from "../database/firebase.config";
import { onSnapshot } from "firebase/firestore"
	
export const getWebDev = () => {
    const [ works, setWorks ] = useState([])
    useEffect(()=>{
        onSnapshot(webDev, (snapshot)=>{
            const items = [];
            snapshot.docs.forEach((doc)=>{
            items.push({ ...doc.data(), id: doc.id })
          })
          setWorks(items)
        })
    }, [])
	
    return {works}

    
}	

