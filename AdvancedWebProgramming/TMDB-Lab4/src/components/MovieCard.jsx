import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import ErrorPicture from '../assets/Meme.gif'

export default function MovieCard({film}) {
  let imageRoute = `https://image.tmdb.org/t/p/w500${film.poster_path}`
  if(film.poster_path == null) {
     imageRoute = ErrorPicture;
  }
    return (
    <div className="column">

        
    <Card sx={{ maxWidth: 420}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image={imageRoute}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            {film.title}
          </Typography>
          <Typography variant="body2" style={{ color: 'text.secondary' ,maxHeight: '150px', overflow: "scroll" }}>
            {film.overview}
          </Typography>
          <Typography variant="body2">
            {film.rating}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}