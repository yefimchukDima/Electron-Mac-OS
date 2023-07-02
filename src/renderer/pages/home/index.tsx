import { Grid } from '@mui/material';
import wallpaper from '../../../../assets/wallpaper.jpg';
import Dock from '../../components/dock';
import Terminal from '../../components/terminal/inxex';

export default function Home() {
  return (
    <Grid
      container
      sx={{
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
      <Grid item>
        <Terminal />
      </Grid>
      <Grid item m={0.8} sx={{ width: '70%' }}>
        <Dock />
      </Grid>
    </Grid>
  );
}
