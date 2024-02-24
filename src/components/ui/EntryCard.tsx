import { FC, DragEvent, useContext } from "react";
import {
  Card,
  Typography,
  CardActionArea,
  CardContent,
  CardActions,
} from "@mui/material";
import { Entry } from "@/interfaces";
import { UIContext } from "@/context/ui";
import { useRouter } from "next/router";
import { dateFunctions } from "@/utils";

interface Props {
  entry: Entry;
}

const EntryCard: FC<Props> = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UIContext);

  const router = useRouter();

  const onDragStart = (event: DragEvent) => {
    event.dataTransfer?.setData("text", entry._id);
    startDragging();
  };

  const onDragEnd = (event: DragEvent) => {
    endDragging();
  };

  const onClick = () => {
    router.push(`/entries/${entry._id}`);
  };

  return (
    <Card
      onClick={onClick}
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
        >
          <Typography variant="body2">
            {dateFunctions.getFormatDistanceToNow(entry.createdAt)}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default EntryCard;
