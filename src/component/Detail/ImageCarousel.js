import styled from "styled-components";
import './Carousel.css'
import { Carousel } from 'react-responsive-carousel';
import img_slide from '../../img/img_slide.svg';
import './Carousel.css'
import {useLocation} from "react-router-dom";
export const ImageCarousel = (props) => {
    const location = useLocation();
    console.log(location.state.images)
    return <Center mode={props.mode}>
        <Carousel dynamicHeight={false} showThumbs={false}>
            {location.state.img.map(slideImg =>
                <div>
                    <SlideImg mode={props.mode} src={slideImg}/>
                </div>
            )}
        </Carousel>
    </Center>
}


const Center = styled.div`
  width : ${props=>props.mode==="m"? "100%":"80%"};
  margin : auto;
`

const SlideImg = styled.img`
  height : ${props=>props.mode==="m"? "160px":"260px"};
  object-fit: cover;
`