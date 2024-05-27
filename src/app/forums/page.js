"use strict";
'use client';
import Link from 'next/link';
import { useState } from 'react';

// let forums = [];

async function receiveInfo(setForumsVar) {
    const importedForums = await import(`./forums.json`);
    const strForums = JSON.stringify(importedForums);
    const forumsObj = JSON.parse(strForums);
    setForumsVar(forumsObj.forums);
    return forumsObj.forums;
}

export default function Forums() {
    const [forums, setForums] = useState([]);
    receiveInfo(setForums);

    if (forums.length === 0) {
        return (
            <div className="relative">
                <div className="flex flex-row justify-center items-center bg-blue-700 rounded-xl m-2">
                    <h1 className="text-5xl font-serif">FORUMS</h1>
                </div>
                <div className="flex items-center flex-col pt-4 pb-4"> {/*Contains all of the forums. It is the main layout */}
                    <h1>The forums have not loaded yet...</h1>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="relative">
                <div className="flex flex-row justify-center items-center bg-blue-700 rounded-xl m-2">
                    <h1 className="text-5xl font-serif">FORUMS</h1>
                </div>
                <div className="flex items-center flex-col pt-4 pb-4"> {/*Contains all of the forums. It is the main layout */}
                    {forums.map(forum => {
                        return (
                            <div className="flex flex-row items-center bg-blue-800 rounded-xl w-full mb-4" key={forum.id}>
                                <div className="relative flex w-3/4 justify-center text-center">
                                    <h1>{forum.title}</h1>
                                </div>
                                <div className="relative overflow-x-auto flex flex-col items-start divide-y w-1/2 border-l-4 border-blue-600">
                                    <h1>{forum.name}</h1>
                                    <h1>{forum.date}</h1>
                                    <h1># of Replies: {forum.replies.length}</h1>
                                    <Link className=" text-xl text-center rounded-xl bg-blue-600 hover:bg-blue-300 hover:text-black" href={`/forums/${forum.id}`}>Go to Forum</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}