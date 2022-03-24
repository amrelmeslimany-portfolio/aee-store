import React from "react";
import {
  Skeleton,
  Avatar,
  Box,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Stack,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { linkRouterCss } from "../../common/global-styles";
import { discountPrice, handlePrice } from "../../common/helpers";

const ImgTextItem = (props) => {
  const { loading = false, inCart, data = null } = props;

  if (loading && !data) {
    return (
      <Box pb={1}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar sx={{ mr: 1 }}>
            <Skeleton variant="rectangular" width={64} height={64}></Skeleton>
          </ListItemAvatar>
          <ListItemText>
            <Skeleton variant="text" />
            <Skeleton variant="text" width="40%" />
            <Stack flexDirection={"row"} gap={0.2}>
              <Skeleton variant="text" height={12} width="70%" sx={{ mt: 1 }} />
              <Skeleton variant="text" height={12} width="30%" sx={{ mt: 1 }} />
            </Stack>
          </ListItemText>
        </ListItem>
      </Box>
    );
  }

  return (
    <Box pb={1}>
      <ListItem
        style={{ ...linkRouterCss, paddingBottom: 0 }}
        alignItems="flex-start"
        component={Link}
        to={`/courses/${data["id"]}`}
      >
        <ListItemAvatar sx={{ mr: 1 }}>
          <Avatar
            sx={{ width: 64, height: 64, borderRadius: 0 }}
            src={data["course_img"]}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography
              variant="button"
              component={"h6"}
              sx={{ lineHeight: 1.29 }}
            >
              {data["course_title"]}
            </Typography>
          }
          secondary={
            <>
              <Typography
                variant="caption"
                component="small"
                color={grey[400]}
                sx={{ display: "block", textOverflow: "ellipsis" }}
                noWrap
              >
                {data["course_tags"]}
              </Typography>

              <Typography
                fontSize={"17px"}
                sx={{ mr: 0.5 }}
                variant="subtitle2"
                component="strong"
                color={"black"}
              >
                E£{discountPrice(handlePrice(data["course_price"]))}
              </Typography>
              <Typography
                variant="body2"
                component="span"
                color={grey[600]}
                sx={{ textDecorationLine: "line-through" }}
              >
                {data["course_price"]}
              </Typography>
            </>
          }
        ></ListItemText>
      </ListItem>
      {inCart && (
        <Box padding="0 16px">
          <Button color="dark" variant="outlined" sx={{ width: "100%" }}>
            Add to cart
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default React.memo(ImgTextItem);
