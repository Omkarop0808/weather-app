import Card from '@mui/material/Card';
import "./InfoBox.css";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://plus.unsplash.com/premium_photo-1667076649924-d784d205cbba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VubnklMjAlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const COLD_URL = "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1603304851397-2ba2ea6eabdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW55JTIwJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    return(
    <div className="InfoBox">
    <div className="cardContainer">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={info.humidity > 80 ? RAIN_URL :info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} {info.humidity > 80 ? <ThunderstormIcon/> :info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature = <b>{info.temp}&deg;C</b></p>
          <p>Humidity = <b>{info.humidity}&deg;C</b></p>
          <p>High-Temperature =  <b>{info.tempMax}&deg;C</b></p>
          <p>Low-Temperature = <b>{info.tempMin}&deg;C</b></p>
          <p>The weather can be described as <b><i>{info.weather}</i></b>  and feels Like = <b>{info.feelsLike}&deg;C</b></p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    )
}