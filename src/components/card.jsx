
export default function Card ({ image, cardTitle, text, flex }) {
  return (
    <>
      <div className="w-full h-fit flex flex-col justify-around items-center p-2 lg:p-4 border border-white rounded-3xl lg:rounded-[48px] ">
        <div className={`w-full h-fit flex ${flex} justify-around items-center gap-5 p-2 pb-5 lg:p-4 lg:pb-6 border border-white rounded-2xl lg:rounded-[32px] `}>
          <img className="w-full rounded-lg lg:rounded-2xl " src={image} alt="" />
          <div className="w-full h-fit flex flex-col justify-center items-center lg:items-end gap-2 px-2 lg:px-6 ">
            <div className="h3 ">
              {cardTitle}
            </div>  
            <div className="base lg:text-right ">
              {text}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}