
function TrendyPosts() {
    return (
      <section className="mx-48 mt-12">
          <div className="flex justify-between py-6">
              <div className="flex gap-2 justify-between items-center">
                  <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="0.5" width="4" height="10" rx="2" fill="#F81539"/>
                  </svg>
                  <h4>Trendy Posts</h4>
              </div>
              <div className="flex justify-between gap-4">
                  <div className="w-[3vh] h-[3vh] bg-gray rounded-xl flex items-center justify-center red-hover">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#3E3232" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 18C13.7188 18 13.4688 17.9062 13.2812 17.7188L8.28125 12.7188C7.875 12.3438 7.875 11.6875 8.28125 11.3125L13.2812 6.3125C13.6562 5.90625 14.3125 5.90625 14.6875 6.3125C15.0938 6.6875 15.0938 7.34375 14.6875 7.71875L10.4062 12L14.6875 16.3125C15.0938 16.6875 15.0938 17.3438 14.6875 17.7188C14.5 17.9062 14.25 18 14 18Z" fillOpacity="0.5"/>
                      </svg>
                  </div>
                  <div className="w-[3vh] h-[3vh] bg-gray rounded-xl flex items-center justify-center red-hover">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#3E3232" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 18C9.71875 18 9.46875 17.9062 9.28125 17.7188C8.875 17.3438 8.875 16.6875 9.28125 16.3125L13.5625 12L9.28125 7.71875C8.875 7.34375 8.875 6.6875 9.28125 6.3125C9.65625 5.90625 10.3125 5.90625 10.6875 6.3125L15.6875 11.3125C16.0938 11.6875 16.0938 12.3438 15.6875 12.7188L10.6875 17.7188C10.5 17.9062 10.25 18 10 18Z"/>
                      </svg>
                  </div>
              </div>
          </div>
          <div className="flex justify-between">
              <div className="flex flex-col gap-[.5vh] shadow rounded-xl items-center w-[25vh] h-[27vh]">
                  <img className="min-w-full max-h-[14vh] p-2 object-cover rounded-[20px]" src="popular-sport.jpg" alt="popular" />
                  <h5 className="line-clamp-1 self-start px-3">Opening Day of Boating Season, Seattle WA</h5>
                  <p className="line-clamp-2 px-3">Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge</p>
                  <div className="flex items-center gap-4 bg-gray rounded-xl px-4 mt-4 w-[23.5vh] h-[5vh] ">
                      <img src="avatar1.png" alt="avatar" className="max-w-[44px] max-h-[44px] object-cover rounded-xl" />
                      <div className="flex flex-col gap-1 min-w-[14.5vh]">
                          <h6>James</h6>
                          <p>August 18, 2022</p>
                      </div>
                      <div className="red-hover">
                          <svg width="16" height="21" viewBox="0 0 16 21" fill="#3E3232" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.625 0C14.6406 0 15.5 0.859375 15.5 1.875V18.75C15.5 19.7266 14.4453 20.3125 13.5859 19.8438L8 16.5625L2.375 19.8438C1.51562 20.3125 0.5 19.7266 0.5 18.75V1.875C0.5 0.859375 1.32031 0 2.375 0H13.625ZM13.625 17.6562V2.10938C13.625 1.99219 13.5078 1.875 13.3516 1.875H2.57031C2.45312 1.875 2.375 1.99219 2.375 2.10938V17.6562L8 14.375L13.625 17.6562Z" fillOpacity={0.75}/>
                          </svg>
                      </div>
                  </div>
              </div>
              <div className="flex flex-col gap-[.5vh] shadow rounded-xl items-center w-[25vh] h-[27vh]">
                  <img className="min-w-full max-h-[14vh] p-2 object-cover rounded-[20px]" src="popular-tech.jpg" alt="popular" />
                  <h5 className="line-clamp-1 self-start px-3">Opening Day of Boating Season, Seattle WA</h5>
                  <p className="line-clamp-2 px-3">Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge</p>
                  <div className="flex items-center gap-4 bg-gray rounded-xl px-4 mt-4 w-[23.5vh] h-[5vh] ">
                      <img src="avatar1.png" alt="avatar" className="max-w-[44px] max-h-[44px] object-cover rounded-xl" />
                      <div className="flex flex-col gap-1 min-w-[14.5vh]">
                          <h6>James</h6>
                          <p>August 18, 2022</p>
                      </div>
                      <div className="red-hover">
                          <svg width="16" height="21" viewBox="0 0 16 21" fill="#3E3232" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.625 0C14.6406 0 15.5 0.859375 15.5 1.875V18.75C15.5 19.7266 14.4453 20.3125 13.5859 19.8438L8 16.5625L2.375 19.8438C1.51562 20.3125 0.5 19.7266 0.5 18.75V1.875C0.5 0.859375 1.32031 0 2.375 0H13.625ZM13.625 17.6562V2.10938C13.625 1.99219 13.5078 1.875 13.3516 1.875H2.57031C2.45312 1.875 2.375 1.99219 2.375 2.10938V17.6562L8 14.375L13.625 17.6562Z" fillOpacity={0.75}/>
                          </svg>
                      </div>
                  </div>
              </div>
              <div className="flex flex-col gap-[.5vh] shadow rounded-xl items-center w-[25vh] h-[27vh]">
                  <img className="min-w-full max-h-[14vh] p-2 object-cover rounded-[20px]" src="popular-car.jpg" alt="popular" />
                  <h5 className="line-clamp-1 self-start px-3">Opening Day of Boating Season, Seattle WA</h5>
                  <p className="line-clamp-2 px-3">Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge</p>
                  <div className="flex items-center gap-4 bg-gray rounded-xl px-4 mt-4 w-[23.5vh] h-[5vh] ">
                      <img src="avatar1.png" alt="avatar" className="max-w-[44px] max-h-[44px] object-cover rounded-xl" />
                      <div className="flex flex-col gap-1 min-w-[14.5vh]">
                          <h6>James</h6>
                          <p>August 18, 2022</p>
                      </div>
                      <div className="red-hover">
                          <svg width="16" height="21" viewBox="0 0 16 21" fill="#3E3232" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.625 0C14.6406 0 15.5 0.859375 15.5 1.875V18.75C15.5 19.7266 14.4453 20.3125 13.5859 19.8438L8 16.5625L2.375 19.8438C1.51562 20.3125 0.5 19.7266 0.5 18.75V1.875C0.5 0.859375 1.32031 0 2.375 0H13.625ZM13.625 17.6562V2.10938C13.625 1.99219 13.5078 1.875 13.3516 1.875H2.57031C2.45312 1.875 2.375 1.99219 2.375 2.10938V17.6562L8 14.375L13.625 17.6562Z" fillOpacity={0.75}/>
                          </svg>
                      </div>
                  </div>
              </div>            
              <div className="flex flex-col gap-[.5vh] shadow rounded-xl items-center w-[25vh] h-[27vh]">
                  <img className="min-w-full max-h-[14vh] p-2 object-cover rounded-[20px]" src="popular-food.jpg" alt="popular" />
                  <h5 className="line-clamp-1 self-start px-3">Opening Day of Boating Season, Seattle WA</h5>
                  <p className="line-clamp-2 px-3">Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge</p>
                  <div className="flex items-center gap-4 bg-gray rounded-xl px-4 mt-4 w-[23.5vh] h-[5vh] ">
                      <img src="avatar1.png" alt="avatar" className="max-w-[44px] max-h-[44px] object-cover rounded-xl" />
                      <div className="flex flex-col gap-1 min-w-[14.5vh]">
                          <h6>James</h6>
                          <p>August 18, 2022</p>
                      </div>
                      <div className="red-hover">
                          <svg width="16" height="21" viewBox="0 0 16 21" fill="#3E3232" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.625 0C14.6406 0 15.5 0.859375 15.5 1.875V18.75C15.5 19.7266 14.4453 20.3125 13.5859 19.8438L8 16.5625L2.375 19.8438C1.51562 20.3125 0.5 19.7266 0.5 18.75V1.875C0.5 0.859375 1.32031 0 2.375 0H13.625ZM13.625 17.6562V2.10938C13.625 1.99219 13.5078 1.875 13.3516 1.875H2.57031C2.45312 1.875 2.375 1.99219 2.375 2.10938V17.6562L8 14.375L13.625 17.6562Z" fillOpacity={0.75}/>
                          </svg>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
  
  export default TrendyPosts