import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function MovieCard({film}) {
  const imageRoute = `https://image.tmdb.org/t/p/w500${film.poster_path}`
    return (
        <div className="column">

        
    <Card sx={{ maxWidth: 345}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image={imageRoute}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            {film.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' ,maxHeight: "200px", overflow: "scroll" }}>
            {film.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}