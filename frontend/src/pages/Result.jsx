import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Mycontext } from '../context/AppContext';
import { toast } from 'react-toastify';

const Card = () => {
  const [image, setImage] = useState('./logo.png')
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')

  const { imageGenerateFunction } = useContext(Mycontext)

  const onSumbmitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (input) {
      const imageInResult = await imageGenerateFunction(input)
      setIsImageLoaded(true)
      setImage(imageInResult)
    }
    setLoading(false)
  }
  return (
    <StyledWrapper>
      <form onSubmit={onSumbmitHandler} className='flex justify-center items-center h-screen mt-4 flex-col'>
        <div className="card bg-black" id="card">
          <div className="content">
            <img src={image} className='bg-cover w-full' alt="image" />
          </div>
        </div>
        <p className={!loading ? 'hidden' : ''}>loading.....</p>
        {
          !isImageLoaded &&
          <div className="mt-4 flex gap-4">
            <input
              onChange={e => setInput(e.target.value)}
              value={input}
              className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500"
              autocomplete="off"
              placeholder="Search here..."
              name="input"
              type="text"
            />
            <button class="hover:brightness-110 cursor-pointer hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">Search</button>
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
