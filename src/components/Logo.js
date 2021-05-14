// material
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

export default function Logo({ ...other }) {
  return (
    <Box
      component="img"
      alt="logo"
      src="https://fotos.subefotos.com/85c989d6aae307a774df9675b80f611bo.png"
      height={80}
      {...other}
    />
  );
}
