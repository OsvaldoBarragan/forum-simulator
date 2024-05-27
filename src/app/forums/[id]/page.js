"use strict";
"use client";
import { useState} from 'react';

async function receiveInfo(setForumVar, paramId) {
    const importedForums = await import(`./../forums.json`);
    const strForums = JSON.stringify(importedForums);
    const forumsObj = JSON.parse(strForums);
    setForumVar(forumsObj.forums[paramId]);
    return forumsObj.forums;
}

export default function ForumPage({params}) {
    const [forum, setForum] = useState([]);
    receiveInfo(setForum, params.id)

    if (forum.length !== 0) {
        return (
            <div className="relative">
                <div className="flex flex-row justify-center items-center bg-blue-700 rounded-xl ml-2 mr-2">
                    <h1>{forum.title}</h1>
                </div>
                <div className="flex flex-row items-center bg-blue-900 rounded-xl w-full border-b-4 border-blue-600">
                    <div className="relative flex w-3/4 justify-center text-center">
                        <h1>{forum.body}</h1>
                    </div>
                    <div className="relative overflow-x-auto flex flex-col items-start divide-y w-1/2 border-l-4 border-blue-600">
                        <h1>{forum.name}</h1>
                        <h1>{forum.date}</h1>
                    </div>
                </div>
                {forum.replies.map(reply => {
                    return (
                        <div className="flex flex-row items-center bg-blue-800 rounded-xl w-full border-b-4 border-blue-600" key={reply.id}>
                            <div className="relative flex w-3/4 justify-center text-center">
                                <h1>{reply.body}</h1>
                            </div>
                            <div className="relative overflow-x-auto flex flex-col items-start divide-y w-1/2 border-l-4 border-blue-600">
                                <h1>{reply.name}</h1>
                                <h1>{reply.date}</h1>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}