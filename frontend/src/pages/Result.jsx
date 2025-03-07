import React, { useState } from 'react';
import styled from 'styled-components';

const Card = () => {
    const [image, setImage] = useState('./logo.png')
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState('')

    const onSumbmitHandler = async (e) => {
        e.preventDefault()
        console.log(input)
    }
    return (
        <StyledWrapper>
            <form onSubmit={onSumbmitHandler} className='flex justify-center items-center h-screen mt-4 flex-col'>
                <div className="card p-2 px-2 bg-black" id="card">
                    <div className="content">
                        <img src={image} className='bg-cover' alt="image" />
                    </div>
                </div>
                <p className={!loading ? 'hidden' : ''}>loading.....</p>
                {
                    !isImageLoaded &&
                    <div className="mt-4 flex">
                        <input
                            onChange={e => setInput(e.target.value)}
                            value={input}
                            type="text"
                            name="inputname"
                            className="block w-56 rounded-l-2xl py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                        />
                        <button className="cursor-pointer transition-all  rounded-r-2xl bg-blue-500 text-white px-6 py-2 rounded-lgborder-blue-600 border-b-[4px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">Search</button>
                    </div>
                }

                {
                    isImageLoaded &&
                    <div className='flex mt-3 gap-3'>
                        <p onClick={() => setIsImageLoaded(false)} className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-gray-500 bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
                            GenerateAgain
                        </p>
                        <a href={image} download className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
                            Download
                        </a>
                    </div>
                }
            </form>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .card {
    width: 300px;
    height: 450px;
    background: #171717;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    box-shadow: 0px 0px 3px 1px #00000088;
    cursor: pointer;
  }

  .card .content {
    border-radius: 5px;
    background: #171717;
    width: 290px;
    height: 440px;
    z-index: 1;
    padding: 20px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content::before {
    opacity: 0;
    transition: opacity 300ms;
    content: " ";
    display: block;
    background: white;
    width: 5px;
    height: 50px;
    position: absolute;
    filter: blur(50px);
    overflow: hidden;
  }

  .card:hover .content::before {
    opacity: 1;
  }

  .card::before {
    opacity: 0;
    content: " ";
    position: absolute;
    display: block;
    width: 80px;
    height: 360px;
    background: linear-gradient(#ff2288, #387ef0);
    transition: opacity 300ms;
    animation: rotation_9018 8000ms infinite linear;
    animation-play-state: paused;
  }

  .card:hover::before {
    opacity: 1;
    animation-play-state: running;
  }

  .card::after {
    position: absolute;
    content: " ";
    display: block;
    width: 250px;
    height: 360px;
    background: #17171733;
    backdrop-filter: blur(50px);
  }

  @keyframes rotation_9018 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }`;

export default Card;
