import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Repo } from "../App";
import { getRepoContent } from "./githubFetch";


const Widget = ({rep, nam}: {rep: Repo; nam: string}) => {
    const [icon, setIcon] = useState<string | null>(null);
    
    useEffect(() => {
        const load = async () => {
            const url = await getRepoContent(nam, rep.name, "icon.svg");
            setIcon(url);
        };
        load();
    }, [rep]);

    return icon ? (
        <>
            <img src={icon} className="flex m-1 h-9/10 aspect-square rounded-xs"/>
            <div className="flex-col text-black m-1 w-8/10 overflow-clip">
                <p className="w-full h-1/3 overflow-clip font-semibold text-left underline">{rep.name}</p>
                <p className="w-full h-2/3 overflow-ellipsis font-medium">{rep.description}</p>
            </div>
        </>
    ) : (
        <div>
            not found
        </div>
    )
}

export default Widget;