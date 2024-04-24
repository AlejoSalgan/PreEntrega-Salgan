import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, price, category, img }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h6">
            ${price}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/ItemDetail/${id}`}>
            <Button size="small">Ver detalles</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};
export default ProductCard;
