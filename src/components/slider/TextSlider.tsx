import Marquee from "react-fast-marquee"
import Image from "next/image"

const TextSlider = () => {
  return (
    <div className="bg-[linear-gradient(90deg,_#708BFD_0%,_#FE71B9_100%)]">
      <Marquee>
        <h2 className="uppercase text-[61px] py-[19px] font-bold opacity-80 text-white [-webkit-text-stroke:_2px_white] [text-stroke:_2px_white] [-webkit-text-fill-color:transparent]">
          Creative
          <span className="inline-flex items-center mx-[25px]"> <Image src="/assets/imgs/icon/spark-1.png" alt="icon" width={47} height={47} /></span>
          Solutions
          <span className="inline-flex items-center mx-[25px]"><Image src="/assets/imgs/icon/spark-2.png" alt="icon" width={47} height={47} /></span>
          Expert Guidance
          <span className="inline-flex items-center mx-[25px]"><Image src="/assets/imgs/icon/spark-1.png" alt="icon" width={47} height={47} /></span>
          Consulting
          <span className="inline-flex items-center mx-[25px]"><Image src="/assets/imgs/icon/spark-2.png" alt="icon" width={47} height={47} /></span>
        </h2>
      </Marquee>
    </div>
  )
}

export default TextSlider