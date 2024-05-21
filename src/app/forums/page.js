// fetch('src/app/forums/forums.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));
"use strict";

let forums = [];

async function receiveInfo() {
    const importedForums = await import(`./forums.json`);
    const strForums = JSON.stringify(importedForums);
    const forumsObj = JSON.parse(strForums);
    forums = forumsObj.forums;
    return forumsObj.forums;
}
receiveInfo();

export default function Forums() {
    if (forums.length === 0) {
        return (
            <div className="relative">
                <h1>Hello, Forums</h1>
                <h1>There are no forums.</h1>
            </div>
        );
    }
    else {
        return (
            <div className="relative">
                <div className="flex flex-row justify-center items-center bg-blue-700 rounded-xl m-2">
                    <h1 className="text-5xl">FORUMS</h1>
                </div>
                <div className="flex items-center flex-col pt-4 pb-4"> {/*Contains all of the forums. It is the main layout */}
                    {forums.map(forum => {
                        return (
                            <div className="flex flex-row items-center bg-blue-800  rounded-xl w-full mb-4" key={forum.id}>
                                <div className="relative flex w-3/4 justify-center text-center">
                                    <h1>{forum.title}</h1>
                                </div>
                                <div className="relative overflow-x-auto flex flex-col items-start divide-y w-1/2 border-l-4 border-blue-600">
                                    <h1>User: {forum.name}</h1>
                                    <h1>Date: {forum.date}</h1>
                                    <h1># of Replies: {forum.replies.length}</h1>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}