import React from 'react'

export const MyProyects = () => {
    return (
        <>

            <section id='proyects'>
                <div className='flex flex-col   text-center justify-center p-10   gap-4 md:gap-8 w-auto h-auto'>

                    <h1 className='text-white text-3xl font-bold '>My Proyects</h1>

                    <div className='flex flex-col items-center justify-center md:grid md:grid-cols-2 gap-12 '>
                    <div className='w-[400px] md:w-[400px] h-[460px] text-white bg-slate-900 rounded shadow-teal-400 shadow-md flex flex-col items-center justify-center '>
                            <img className='w-[400px] h-[200px] rounded' src="../assets/proyects/meli.jpg" alt="#" />
                            <h2 className='text-xl font-bold mt-2 p-2'>Mercado Libre Clone</h2>
                            <button className=' w-10 h-[5px] p-1 cursor-auto bg-gradient-to-r from-teal-400  via-teal-500 to-teal-700   flex rounded'></button>
                            <div className='flex items-center text-center justify-center mt-2 px-4  '>
                                <p>Using React, Javascript and TailwindCSS. I built the UI of the web page and aplicate some functionalities
                                    like a slider of the products .
                                </p>
                            </div>
                            <p className='text-lg font-bold'>Stack</p>
                            <div className='flex flex-row gap-8 mt-2 font-bold text-[#8900f2] '>
                                <p>React</p>
                                <p>Javascript</p>
                                <p>TailwindCSS</p>
                                <p>Vite</p>
                            </div>

                            <div className='flex flex-row m-4 gap-4 '>
                                <a href="https://meli-clone.netlify.app/" target="_blank"> <button className='bg-[#8900f2] p-1 w-24 rounded-xl font-bold hover:bg-teal-400 hover:text-black'>Demo</button> </a>
                                <a href="https://github.com/leasabus/aerolab-challenge" target="_blank"><button className='bg-[#8900f2] p-1 w-24 rounded-xl font-bold hover:bg-teal-400 hover:text-black'>Repository</button></a>
                            </div>

                        </div>

                        <div className='w-[350px] md:w-[400px] h-[460px] text-white bg-slate-900 rounded shadow-teal-400 shadow-md flex flex-col items-center text-center justify-center '>
                            <img className='w-[400px] h-[200px] rounded' src="../assets/proyects/cryptos.jpg" alt="#" />
                            <h2 className='text-xl font-bold mt-2 p-2'>Crypto App</h2>
                            <button className=' w-10 h-[5px] p-1 cursor-auto bg-gradient-to-r from-teal-400  via-teal-500 to-teal-700   flex rounded'></button>
                            <div className='flex items-center text-center justify-center px-4 mt-2 '>
                                <p>Using React, Axios, TailwindCss. Fetching the API of CoinGecko and  show the most popular cryptocurrencies of the market.
                                </p>


                            </div>
                            <p className='text-xl font-bold'>Stack</p>
                            <div className='flex flex-row gap-8 mt-2 font-bold text-[#8900f2] '>
                                <p>React</p>
                                <p>TailwindCss</p>
                                <p>Axios</p>
                                <p>Vite</p>
                            </div>

                            <div className='flex flex-row  m-4 gap-4 '>
                                <a href="https://cryptodata-app-react.netlify.app/" target="_blank"> <button className='bg-[#8900f2] p-1 w-24 rounded-xl font-bold hover:bg-teal-400 hover:text-black'>Demo</button></a>
                                <a href="https://github.com/leasabus/Crypto-app" target="_blank"><button className='bg-[#8900f2] p-1 w-24 rounded-xl font-bold hover:bg-teal-400 hover:text-black'>Repository</button></a>
                            </div>

                        </div>



                        <div className='w-[400px] md:w-[400px] h-[460px] text-white bg-slate-900 rounded shadow-teal-400 shadow-md flex flex-col items-center justify-center '>
                            <img className='w-[400px] h-[200px] rounded' src="../assets/proyects/aerolab.jpg" alt="#" />
                            <h2 className='text-xl font-bold mt-2 p-2'>Aerolab challenge</h2>
                            <button className=' w-10 h-[5px] p-1 cursor-auto bg-gradient-to-r from-teal-400  via-teal-500 to-teal-700   flex rounded'></button>
                            <div className='flex items-center text-center justify-center mt-2 px-4  '>
                                <p>Using React, Typescript and ChakraUi. Fetching the API of the products and
                                    order, filter and show the results.
                                </p>
                            </div>
                            <p className='text-lg font-bold'>Stack</p>
                            <div className='flex flex-row gap-8 mt-2 font-bold text-[#8900f2] '>
                                <p>React</p>
                                <p>Typescript</p>
                                <p>ChakraUI</p>
                                <p>Vite</p>
                            </div>

                            <div className='flex flex-row m-4 gap-4 '>
                                <a href="https://aerolab-challenge-ts.netlify.app/" target="_blank"> <button className='bg-[#8900f2] p-1 w-24 rounded-xl font-bold hover:bg-teal-400 hover:text-black'>Demo</button> </a>
                                <a href="https://github.com/leasabus/aerolab-challenge" target="_blank"><button className='bg-[#8900f2] p-1 w-24 rounded-xl font-bold hover:bg-teal-400 hover:text-black'>Repository</button></a>
                            </div>

                        </div>

                        

                        <div className='w-[350px] md:w-[400px] h-[460px] text-white bg-slate-900 rounded shadow-teal-400 shadow-md flex flex-col items-center text-center justify-center '>
                            <img className='w-[400px] h-[200px] rounded' src="../assets/proyects/netflix.jpg" alt="#" />
                            <h2 className='text-xl font-bold mt-2 p-2'>Netflix Clone</h2>
                            <button className=' w-10 h-[5px] p-1 cursor-auto bg-gradient-to-r from-teal-400  via-teal-500 to-teal-700   flex rounded'></button>
                            <div className='flex items-center text-center justify-center mt-2 px-4  '>
                                <p>Fetching the data of the TMBDB API and show the movies. Using Firebase for the autentication and the database.
                                </p>


                            </div>
                            <p className='text-xl font-bold'>Stack</p>
                            <div className='flex flex-row gap-4 md:gap-6 mt-2 font-bold text-[#8900f2] '>
                                <p>React</p>
                                <p>TailwindCss</p>
                                <p>Axios</p>
                                <p>Firebase</p>
                                <p>Vite</p>
                            </div>

                            <div className='flex flex-row  m-4 gap-4 '>
                                <a href="https://tmovies-app-react.netlify.app/" target="_blank"><button className='bg-[#8900f2] p-1 w-24 rounded-xl font-bold hover:bg-teal-400 hover:text-black'>Demo</button></a>
                                <a href="https://github.com/leasabus/netflix-clone" target="_blank"> <button className='bg-[#8900f2] p-1 w-24 rounded-xl font-bold hover:bg-teal-400 hover:text-black'>Repository</button></a>
                            </div>

                        </div>

                        <div className='w-[350px] md:w-[400px] h-[460px] text-white bg-slate-900 rounded shadow-teal-400 shadow-md flex flex-col items-center text-center justify-center '>
                            <img className='w-[400px] h-[200px] rounded' src="../assets/proyects/dashboard-next.jpg" alt="#" />
                            <h2 className='text-xl font-bold mt-2 p-2'>Next Dashboard</h2>
                            <button className=' w-10 h-[5px] p-1 cursor-auto bg-gradient-to-r from-teal-400  via-teal-500 to-teal-700   flex rounded'></button>
                            <div className='flex items-center text-center justify-center mt-2 px-4  '>
                                <p>A business dashboard to admin revenues and stadistics.
                                </p>


                            </div>
                            <p className='text-xl font-bold'>Stack</p>
                            <div className='flex flex-row gap-4 md:gap-6 mt-2 font-bold text-[#8900f2] '>
                                <p>React</p>
                                <p>TailwindCss</p>
                                <p>NextJS</p>
                                <p>ChartJS</p>
                            </div>

                            <div className='flex flex-row  m-4 gap-4 '>
                                <a href="https://dashboard-nextjs-lea.vercel.app/" target="_blank"><button className='bg-[#8900f2] p-1 w-24 rounded-xl font-bold hover:bg-teal-400 hover:text-black'>Demo</button></a>
                                <a href="https://github.com/leasabus/dashboard-nextjs" target="_blank"> <button className='bg-[#8900f2] p-1 w-24 rounded-xl font-bold hover:bg-teal-400 hover:text-black'>Repository</button></a>
                            </div>

                        </div>



                        <div className='w-[350px] md:w-[400px] h-[460px] text-white bg-slate-900 rounded shadow-teal-400 shadow-md flex flex-col items-center text-center justify-center '>
                            <img className='w-[400px] h-[200px] rounded ' src="../assets/proyects/giftexpert.png" alt="#" />
                            <h2 className='text-xl font-bold mt-2 p-2'>Gif App</h2>
                            <button className=' w-10 h-[5px] p-1 cursor-auto bg-gradient-to-r from-teal-400  via-teal-500 to-teal-700   flex rounded'></button>
                            <div className='flex items-center text-center justify-center px-4 mt-2  '>
                                <p>Using the API of Giphy , this app searches and show random GIFS about the topic you search. Fetching by axios
                                </p>


                            </div>
                            <p className='text-xl font-bold'>Stack</p>
                            <div className='flex flex-row gap-8 mt-2 font-bold text-[#8900f2] '>
                                <p>React</p>
                                <p>Axios</p>
                                <p>Vite</p>
                                <p>CSS</p>
                            </div>

                            <div className='flex flex-row m-4 gap-4 '>
                                <a href="https://giftexpertapp-leasabus.netlify.app/" target="_blank"><button className='bg-[#8900f2] p-1 w-24 rounded-xl font-bold hover:bg-teal-400 hover:text-black'>Demo</button></a>
                                <a href="https://github.com/leasabus/GifExpertApp-React" target="_blank"><button className='bg-[#8900f2] p-1 w-24 rounded-xl font-bold hover:bg-teal-400 hover:text-black'>Repository</button></a>
                            </div>

                        </div>

                        <div className='w-[350px] md:w-[400px] h-[460px] text-white bg-slate-900 rounded shadow-teal-400 shadow-md flex flex-col items-center text-center justify-center '>
                            <img className='w-[400px] h-[200px] rounded' src="../assets/proyects/weatherapp.jpg" alt="#" />
                            <h2 className='text-xl font-bold mt-2 p-2'>Weather App</h2>
                            <button className=' w-10 h-[5px] p-1 cursor-auto bg-gradient-to-r from-teal-400  via-teal-500 to-teal-700   flex rounded'></button>
                            <div className='flex items-center text-center justify-center mt-2 px-4  '>
                                <p>Using React, Axios, TailwindCss. Fetching the API of Acuweather to show the weather of the diferents countries and cites.
                                </p>


                            </div>
                            <p className='text-xl font-bold'>Stack</p>
                            <div className='flex flex-row gap-8 mt-2 font-bold text-[#8900f2] '>
                                <p>React</p>
                                <p>TailwindCss</p>
                                <p>Axios</p>
                                <p>Vite</p>
                            </div>

                            <div className='flex flex-row m-4 gap-4'>
                                <a href="https://weather-app-leasabus.netlify.app/" target="_blank"> <button className='bg-[#8900f2] p-1 w-24 rounded-xl font-bold hover:bg-teal-400 hover:text-black'>Demo</button></a>
                                <a href="https://github.com/leasabus/Weather-app-react" target="_blank"><button className='bg-[#8900f2] p-1 w-24 rounded-xl font-bold hover:bg-teal-400 hover:text-black'>Repository</button></a>
                            </div>

                        </div>


                        <div className='w-[350px] md:w-[400px] h-[460px] text-white bg-slate-900 rounded shadow-teal-400 shadow-md flex flex-col items-center text-center justify-center '>
                            <img className='w-[400px] h-[200px] rounded' src="../assets/proyects/e-shop-app.jpg" alt="#" />
                            <h2 className='text-xl font-bold mt-2 p-2'>E-Shop</h2>
                            <button className=' w-10 h-[5px] p-1 cursor-auto bg-gradient-to-r from-teal-400  via-teal-500 to-teal-700   flex rounded'></button>
                            <div className='flex items-center text-center justify-center mt-2 px-4  '>
                                <p>Fetching the API of Fakestore and show the different products and filters.
                                    Using Redux to add products to the Cart
                                </p>


                            </div>
                            <p className='text-xl font-bold'>Stack</p>
                            <div className='flex flex-row gap-4 md:gap-6 mt-2 font-bold  text-[#8900f2] '>
                                <p>React</p>
                                <p>TailwindCss</p>
                                <p>Axios</p>
                                <p>Vite</p>
                                <p>Redux</p>
                            </div>

                            <div className='flex flex-row m-4 gap-4 '>
                                <a href="https://e-shop-app.netlify.app/" target="_blank">  <button className='bg-[#8900f2] p-1 w-24 rounded-xl font-bold hover:bg-teal-400 hover:text-black'>Demo</button> </a>
                                <a href="https://github.com/leasabus/e-commerce-app" target="_blank">  <button className='bg-[#8900f2] p-1 w-24 rounded-xl font-bold hover:bg-teal-400 hover:text-black'>Repository</button> </a>
                            </div>

                        </div>


                    </div>



                </div>


            </section>
            <button className=' w-14 h-1 p-1 cursor-auto bg-gradient-to-r from-teal-400  via-teal-500 to-teal-700   flex rounded'></button>

        </>
    )
}
