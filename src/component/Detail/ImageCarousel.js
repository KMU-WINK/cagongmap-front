import styled from "styled-components";
import './Carousel.css'
import { Carousel } from 'react-responsive-carousel';
import no_pictures from '../../img/no-pictures.png'
import './Carousel.css'
import {useLocation} from "react-router-dom";
export const ImageCarousel = (props) => {
    const location = useLocation();
    return <Center mode={props.mode}>
        {location.state.img ?
            <Carousel dynamicHeight={false} showThumbs={false}>
                {location.state.img.map(slideImg =>
                    <div>
                        <SlideImg mode={props.mode} src={slideImg}/>
                    </div>
                )}
            </Carousel>
            :
            // <No><NoImage src={no_pictures}/></No>
            // <No><NoImage src={no_pictures}/>제공된 이미지가 없습니다</No>
            <No>
                <SlideImg mode={props.mode} src={no_pictures}/>
            </No>
        }
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
const No = styled.div`
  display : flex;
  justify-content: center;
`

const NoImage = styled.img`
  width : 30%;
  height : 30%;
`