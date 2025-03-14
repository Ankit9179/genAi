// import React, { useContext, useState } from 'react';
// import styled from 'styled-components';
// import { Mycontext } from '../context/AppContext';
// import { toast } from 'react-toastify';

// const Card = () => {
//   const [image, setImage] = useState('./logo.png')
//   const [isImageLoaded, setIsImageLoaded] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const [input, setInput] = useState('')

//   const { imageGenerateFunction } = useContext(Mycontext)

//   const onSumbmitHandler = async (e) => {
//     e.preventDefault()
//     setLoading(true)
//     if (input) {
//       const imageInResult = await imageGenerateFunction(input)
//       setIsImageLoaded(true)
//       setImage(imageInResult)
//     }
//     setLoading(false)
//   }
//   return (
//     <StyledWrapper>
//       <form onSubmit={onSumbmitHandler} className='flex justify-center items-center h-screen mt-4 flex-col'>
//         <div className="card bg-black" id="card">
//           <div className="content">
//             <img src={image} className='bg-cover w-full' alt="image" />
//           </div>
//         </div>
//         <p className={!loading ? 'hidden' : ''}>loading.....</p>
//         {
//           !isImageLoaded &&
//           <div className="mt-4 flex gap-4">
//             <input
//               onChange={e => setInput(e.target.value)}
//               value={input}
//               className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500"
//               autocomplete="off"
//               placeholder="Search here..."
//               name="input"
//               type="text"
//             />
//             <button class="hover:brightness-110 cursor-pointer hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">Search</button>
//           </div>
//         }

//         {
//           isImageLoaded &&
//           <div className='flex mt-3 gap-3'>
//             <p onClick={() => setIsImageLoaded(false)} className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-gray-500 bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
//               GenerateAgain
//             </p>
//             <a href={image} download className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
//               Download
//             </a>
//           </div>
//         }
//       </form>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .card {
//     width: 300px;
//     height: 450px;
//     background: #171717;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     overflow: hidden;
//     position: relative;
//     box-shadow: 0px 0px 3px 1px #00000088;
//     cursor: pointer;
//   }

//   .card .content {
//     border-radius: 5px;
//     background: #171717;
//     width: 290px;
//     height: 440px;
//     z-index: 1;
//     padding: 20px;
//     color: white;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .content::before {
//     opacity: 0;
//     transition: opacity 300ms;
//     content: " ";
//     display: block;
//     background: white;
//     width: 5px;
//     height: 50px;
//     position: absolute;
//     filter: blur(50px);
//     overflow: hidden;
//   }

//   .card:hover .content::before {
//     opacity: 1;
//   }

//   .card::before {
//     opacity: 0;
//     content: " ";
//     position: absolute;
//     display: block;
//     width: 80px;
//     height: 360px;
//     background: linear-gradient(#ff2288, #387ef0);
//     transition: opacity 300ms;
//     animation: rotation_9018 8000ms infinite linear;
//     animation-play-state: paused;
//   }

//   .card:hover::before {
//     opacity: 1;
//     animation-play-state: running;
//   }

//   .card::after {
//     position: absolute;
//     content: " ";
//     display: block;
//     width: 250px;
//     height: 360px;
//     background: #17171733;
//     backdrop-filter: blur(50px);
//   }

//   @keyframes rotation_9018 {
//     0% {
//       transform: rotate(0deg);
//     }

//     100% {
//       transform: rotate(360deg);
//     }
//   }`;

// export default Card;


import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Mycontext } from '../context/AppContext';
import { toast } from 'react-toastify';

const Card = () => {
  const [image, setImage] = useState('./logo.png');
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  const { imageGenerateFunction } = useContext(Mycontext);

  const onSumbmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (input) {
      const imageInResult = await imageGenerateFunction(input);
      setIsImageLoaded(true);
      setImage(imageInResult);
    } else {
      toast.error("Please provide prompt")
    }
    setLoading(false);
  };

  return (
    <StyledWrapper>
      <form onSubmit={onSumbmitHandler} className='flex flex-col items-center justify-center h-screen gap-6'>

        {/* Image Card */}
        <div className="card">
          <div className="content">
            <img src={image} className='w-full h-full object-cover rounded-lg' alt="Generated" />
          </div>
        </div>

        {/* Loading Text */}
        {loading && <p className="text-gray-500">Generating Image...</p>}

        {/* Input & Button */}
        {!isImageLoaded && (
          <div className="mt-4 flex gap-4 sm:mx-4 md:mx-4 lg:mx-4">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="input-box"
              placeholder="Enter prompt..."
              type="text"
            />
            <button className="search-btn">Generate</button>
          </div>
        )}

        {/* Download & Generate Again Buttons */}
        {isImageLoaded && (
          <div className='flex mt-3 gap-4'>
            <button onClick={() => setIsImageLoaded(false)} className="action-btn bg-gray-500">Generate Again</button>
            <a href={image} download className="action-btn bg-black">Download</a>
          </div>
        )}

      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 350px;
    height: 450px;
    background: #171717;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    border-radius: 10px;
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.5);
  }

  .card .content {
    width: 100%;
    height: 100%;
    padding: 10px;
  }

  .input-box {
    background: rgba(255, 255, 255, 0.1);
    color: black;
    border: 1px solid rgba(40, 39, 39, 0.9);
    padding: 12px 16px;
    width: 250px;
    border-radius: 8px;
    outline: none;
    transition: all 0.3s;
  }

  .input-box:focus {
    border-color: #ff2288;
    box-shadow: 0px 0px 8px #ff2288;
  }

  .search-btn {
    background: linear-gradient(45deg, #ff2288, #387ef0);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s;
  }

  .search-btn:hover {
    transform: scale(1.05);
  }

  .action-btn {
    padding: 12px 20px;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s;
  }

  .action-btn:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }
`;

export default Card;
