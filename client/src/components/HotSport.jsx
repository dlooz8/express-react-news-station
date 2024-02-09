
function HotSport() {
    return (
        <section className="mt-16 pt-4 pb-16 px-32 2xl:px-48 bg-gray">
            <div className="flex justify-between py-6">
                <div className="flex gap-2 justify-between items-center">
                    <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.5" width="4" height="10" rx="2" fill="#F81539"/>
                    </svg>
                    <h4>Hot Sport</h4>
                </div>
                <div className="flex justify-between gap-4">
                    <div className="w-[3vh] h-[3vh] bg-[#e2e2e2] rounded-xl flex items-center justify-center red-hover">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#3E3232" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 18C13.7188 18 13.4688 17.9062 13.2812 17.7188L8.28125 12.7188C7.875 12.3438 7.875 11.6875 8.28125 11.3125L13.2812 6.3125C13.6562 5.90625 14.3125 5.90625 14.6875 6.3125C15.0938 6.6875 15.0938 7.34375 14.6875 7.71875L10.4062 12L14.6875 16.3125C15.0938 16.6875 15.0938 17.3438 14.6875 17.7188C14.5 17.9062 14.25 18 14 18Z" fillOpacity="0.5"/>
                        </svg>
                    </div>
                    <div className="w-[3vh] h-[3vh] bg-[#e2e2e2] rounded-xl flex items-center justify-center red-hover">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#3E3232" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 18C9.71875 18 9.46875 17.9062 9.28125 17.7188C8.875 17.3438 8.875 16.6875 9.28125 16.3125L13.5625 12L9.28125 7.71875C8.875 7.34375 8.875 6.6875 9.28125 6.3125C9.65625 5.90625 10.3125 5.90625 10.6875 6.3125L15.6875 11.3125C16.0938 11.6875 16.0938 12.3438 15.6875 12.7188L10.6875 17.7188C10.5 17.9062 10.25 18 10 18Z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="sport-tri gap-6">
                <div className="sport-tri1 relative shadow rounded-xl">
                    <img className="w-full h-full object-cover rounded-xl" src="dance.png" alt="img" />
                    <div className="absolute top-[70%] m-3 glass rounded-xl">
                        <h4 className="line-clamp-1 mx-3 my-4">Opening Day of Boating Season, Seattle WA</h4>
                        <p className="line-clamp-2 mx-3 my-4">Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge</p>
                    </div>
                </div>

                <div className="flex justify-between sport-tri2 shadow rounded-xl">
                    <img className="m-4 object-cover rounded-2xl" src="popular-tech.jpg" alt="img" />
                    <div className="">
                        <h5 className="line-clamp-1 self-start mx-3 my-5">Opening Day of Boating Season, Seattle WA</h5>
                        <p className="xl:line-clamp-6 mx-3">Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge f wlkefwkej we iwejfioj weoij fiejfoi jwoefj wejf ioewjf iojweiofj iwjefi jweif j wekf wejf iowejf iojweio jwjifwejioewoifj wji ojweoifjweioj fosdufujsdoifjoe8wh 3ojf8od jso ijsdoi jfjfiojslejliejsfj se8j fesi j</p>
                    </div>
                </div>
                <div className="flex justify-between sport-tri3 shadow rounded-xl">
                    <img className="m-4 object-cover rounded-2xl" src="popular-car.jpg" alt="img" />
                    <div className="">
                        <h5 className="line-clamp-1 self-start mx-3 my-5">Opening Day of Boating Season, Seattle WA</h5>
                        <p className="xl:line-clamp-6 mx-3">Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge oidsfdsfkjo sidfsdfkiods sdoiofkjoisdkjfio sdfjoijdsifj dsjfjkkdjskf sdfjjijweoijfwiowe iwej ijewi ofjweioj iewjf iwoejf iewj iewfj iewjf iewj fjwei fjjiewjfijewiofj iewj fiewj iewjf ioewj fij ijweifji ej</p>
                    </div>
                </div>            
            </div>
        </section>
    )
}

export default HotSport