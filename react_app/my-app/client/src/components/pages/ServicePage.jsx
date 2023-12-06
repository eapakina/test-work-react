import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { getItemThunk } from "../../redux/slices/serviceThunks";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function ServicePage() {
  const { id } = useParams();
  const [retry, setRetry] = useState(false);
  const info = useAppSelector((store) => store.service.data);
  const loading = useAppSelector((store) => store.service.loading);
  const error = useAppSelector((store) => store.service.error);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (retry) {
      setRetry(false);
      dispatch(getItemThunk(id));
    }
    dispatch(getItemThunk(id));
  }, [dispatch, id, retry]);
  console.log(loading);
  console.log({ info });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        Произошла ошибка! {error}{" "}
        <button onClick={() => setRetry(true)}>Повторить запрос</button>
      </div>
    );
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {info.content}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Цена: {info.price}
        </Typography>
      </CardContent>
    </Card>
  );
}
