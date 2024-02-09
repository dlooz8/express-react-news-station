
function Banner() {
  return (
    <section className='flex gap-6 justify-between mx-32 2xl:mx-48 my-12 banner'>
        <div className="banner-1 relative">
            <img className="w-[360px] h-[452px] object-cover rounded-xl" src="banner-car.jpg" alt="img" />
            <div className="glass absolute top-[320px] bg-gray m-2.5 p-2.5 rounded-xl max-w-[339px] max-h-[117px]">
                <h3 className="line-clamp-1">How to Drive a Car Safely</h3>
                <p className="pt-3 line-clamp-2">Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may feel a little nervous about getting behind the wheel. Don’t worry. While it’s true that accidents can happen to anybody, there are things you can do to drive safely and do your best to avoid them. </p>
            </div>
        </div>
        <div className="banner-2 relative">
            <img className="w-[360px] h-[452px] object-cover rounded-xl" src="banner-music.jpg" alt="img" />
            <div className="glass absolute top-[320px] bg-gray m-2.5 p-2.5 rounded-xl max-w-[339px] max-h-[117px]">
                <h3 className="line-clamp-1">How to Drive a Car Safely</h3>
                <p className="pt-3 line-clamp-2">Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may feel a little nervous about getting behind the wheel. Don’t worry. While it’s true that accidents can happen to anybody, there are things you can do to drive safely and do your best to avoid them. </p>
            </div>
        </div>
        <div className="banner-3 relative">
            <img className="w-[744px] h-[452px] object-cover rounded-xl" src="banner-tech.jpg" alt="img" />
            <div className="glass absolute top-[320px] bg-gray m-2.5 p-2.5 rounded-xl max-w-[724px] max-h-[117px]">
                <h3 className="line-clamp-1">How to Drive a Car Safely</h3>
                <p className="pt-3 line-clamp-2">Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may feel a little nervous about getting behind the wheel. Don’t worry. While it’s true that accidents can happen to anybody, there are things you can do to drive safely and do your best to avoid them. </p>
            </div>
        </div>

        


    </section>
  )
}

export default Banner