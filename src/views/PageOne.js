// material
import { Container, Typography, } from '@material-ui/core';
// components
import Page from '../components/Page';
import PhotoContainer from "../components/photocontainer"


// ----------------------------------------------------------------------

export default function PageOne() {
  const fotos = [
"https://fotos.subefotos.com/0932dbaf2658c672d18cb70a976b9b26o.png",
"https://fotos.subefotos.com/8fdd33fcd62ee726ccb8c9bc7950991co.png",
"https://fotos.subefotos.com/644906e25d9fae63d55191a906996346o.png",
"https://fotos.subefotos.com/c66a9d97de0a1c7d89240ee41de0df9bo.png",
"https://fotos.subefotos.com/252b60d97d3f0c4117501a90ad12d867o.png",
"https://fotos.subefotos.com/c41971d1728dda991653e00180eac077o.png",
"https://fotos.subefotos.com/aaac4e754f7b5b5ee47bb004004b86abo.png",
"https://fotos.subefotos.com/e179aa5a1358c3bb2f68af4514de1732o.png",
"https://fotos.subefotos.com/cfa73ad59b8010559949ec30b55f92f3o.png",
      ]
  return (
    <Page title="BRANDING | Graphic Design">
      <Container maxWidth="xl">
        <Typography variant="h3" component="h1" paragraph>
          Brand Concept Design 
        </Typography>
        <Typography gutterBottom>
          Curabitur turpis. Vestibulum facilisis, purus nec pulvinar iaculis,
          ligula mi congue nunc, vitae euismod ligula urna in dolor. Nam quam
          nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Phasellus
          blandit leo ut odio. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia Curae; Fusce id purus. Aliquam
          lorem ante, dapibus in, viverra quis, feugiat a, tellus. In
          consectetuer turpis ut velit. Aenean posuere, tortor sed cursus
          feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
          lacus. Vestibulum suscipit nulla quis orci. Nam commodo suscipit quam.
          Sed a libero.
        </Typography>
        <Typography>
          Praesent ac sem eget est egestas volutpat. Phasellus viverra nulla ut
          metus varius laoreet. Curabitur ullamcorper ultricies nisi. Ut non
          enim eleifend felis pretium feugiat. Donec mi odio, faucibus at,
          scelerisque quis, convallis in, nisi. Fusce vel dui. Quisque libero
          metus, condimentum nec, tempor a, commodo mollis, magna. In enim
          justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Cras dapibus.
        </Typography>
      <PhotoContainer photos={fotos}/>

      </Container>
    </Page>
  );
}
