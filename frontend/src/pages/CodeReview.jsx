import React, { useContext, useEffect, useState } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import prismjs from 'prismjs'
import Editor from 'react-simple-code-editor';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Mycontext } from '../context/AppContext';
import Markdown from 'react-markdown'
import { useNavigate } from 'react-router-dom';
import LoadingButton from '../Components/LoadingButton';



const CodeReview = () => {
    const [reviewData, setReviewData] = useState("")
    const [isData, setIsData] = useState(false)
    const [code, setCode] = useState(`function sum (){
        return 1+1;
        }`)
    const { backendUrl, token, } = useContext(Mycontext)
    const navigate = useNavigate()
    useEffect(() => {
        if (!token) {
            navigate('/')
            toast.warning("You have to login first")
        }
        prismjs.highlightAll();
    }, [token])

    //
    const reviwFunction = async (e) => {

        try {
            setIsData(true)
            const { data } = await axios.post(backendUrl + "/api/v1/code/review", { prompt: code }, { headers: { token } })
            if (data) {
                setReviewData(data.geminiResult)
                setIsData(false)
                setCode("")
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <>
            <main className="flex flex-col gap-1 p-2 md:flex-row h-screen">
                <div className="left flex-1 p-4 relative bg-black rounded-lg clear-both ">
                    <div className="code mb-4 h-full overflow-auto rounded-lg">
                        <Editor
                            value={code}
                            className='overflow-auto h-full'
                            onValueChange={code => setCode(code)}
                            highlight={code => prismjs.highlight(code, prismjs.languages.javascript, "javascript")}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 19,
                                minHeight: "100%",
                                width: "100%",
                                color: "#fff",
                                backgroundColor: "#000",
                                whiteSpace: "pre-wrap",  // Important for breaking long lines
                                wordBreak: "break-word", // Optional for extra breaking
                                overflow: "auto",
                            }}
                        />
                    </div>

                    <button
                        onClick={() => reviwFunction()}
                        className="review absolute bottom-3 right-4 px-3 bg-cyan-900 font-bold text-white text-center py-2 rounded cursor-pointer hover:bg-blue-600"
                    >
                        {isData ? <LoadingButton /> : "Review"}
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