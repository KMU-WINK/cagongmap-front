import styled from "styled-components";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css'
import { Carousel } from 'react-responsive-carousel';
import img_slide from '../../img/img_slide.svg';
import './Carousel.css'
export const ImageCarousel = (props) => {

    return <Center mode={props.mode}>
        <Carousel dynamicHeight={false} showThumbs={false}>
            <div>
                <SlideImg mode={props.mode} src={img_slide}/>
            </div>
            <div>
                <SlideImg mode={props.mode} src={img_slide}/>
            </div>
            <div>
                <SlideImg mode={props.mode} src={img_slide}/>
            </div>
        </Carousel>
    </Center>
}


const Center = styled.div`
  width : ${props=>props.mode==="m"? "100%":"70%"};
  margin : auto;
`

const SlideImg = styled.img`
  height : ${props=>props.mode==="m"? "160px":"260px"};
  object-fit: cover;
`