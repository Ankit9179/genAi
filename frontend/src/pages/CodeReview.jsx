import React, { useContext, useEffect, useState } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import prismjs from 'prismjs'
import Editor from 'react-simple-code-editor';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Mycontext } from '../context/AppContext';
import Markdown from 'react-markdown'



const CodeReview = () => {
    const [reviewData, setReviewData] = useState("")
    const [isData, setIsData] = useState(false)
    const [code, setCode] = useState(`function sum (){
        return 1+1;
        }`)
    const { backendUrl, token, } = useContext(Mycontext)
    useEffect(() => {
        prismjs.highlightAll();
    })

    //
    const reviwFunction = async (e) => {

        try {
            setIsData(true)
            const { data } = await axios.post(backendUrl + "/api/v1/code/review", { prompt: code }, { headers: { token } })
            if (data) {
                setReviewData(data.geminiResult)
                setIsData(false)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <>
            <main className="flex flex-col gap-1 p-2 md:flex-row h-screen">
                <div className="left flex-1 p-4 relative bg-black rounded-lg">
                    <div className="code mb-4">
                        <Editor
                            value={code}
                            onValueChange={code => setCode(code)}
                            highlight={code => prismjs.highlight(code, prismjs.languages.javascript, "javascript")}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 19,
                                height: "100%",
                                width: "100%",
                                color: "#ffff"
                            }}
                        />
                    </div>
                    <button
                        onClick={() => reviwFunction()}
                        className="review absolute bottom-3 right-4 px-3 bg-cyan-900 font-bold text-white text-center py-2 rounded cursor-pointer hover:bg-blue-600"
                    >
                        {isData ? "......." : "Review"}
                    </button>
                </div>
                <div className="right flex-1 p-4 bg-gray-500 rounded-lg overflow-auto">
                    <Markdown>{reviewData}</Markdown>
                </div>
            </main>
        </>
    )
}

export default CodeReview