
function Banner() {
  return (
    <section className='mx-48 my-12 banner'>
        <div className="">
            <img className="w-[360px] h-[452px] object-cover rounded-xl" src="banner-car.jpg" alt="img" />
            <div className="absolute top-[40%] left-[10.5%] bg-gray p-2 rounded-xl max-w-[339px] max-h-[117px] flex flex-col items-center">
                <h3>How to Drive a Car Safely</h3>
                <p className="pt-4">Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may feel a little nervous about getting behind the wheel. Don’t worry. While it’s true that accidents can happen to anybody, there are things you can do to drive safely and do your best to avoid them. </p>
            </div>
        </div>

        <div className="image-container">
            <img src="banner-car.jpg" alt="Your Image" />
            <div className="text-overlay">
                <h2>Your Text</h2>
                <p>Additional description</p>
            </div>
        </div>
        


    </section>
  )
}

export default Banner