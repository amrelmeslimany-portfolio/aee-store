import { Box, Button, List, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../../common/Hooks/UseFetch";
import ImgTextItem from "../ImgTextItem";

const Favorites = React.forwardRef((props, ref) => {
  const {
    data: favLinks,
    isError,
    isLoading,
    errorMessage,
  } = useFetch("http://localhost:4000/courses?list=favorite", []);

  return (
    <div ref={ref}>
      <List
        component={"div"}
        sx={{ pb: 0, width: 280, maxHeight: 500, overflowY: "auto" }}
      >
        {isLoading ? (
          <ImgTextItem loading />
        ) : isError ? (
          <Box textAlign="center" p={1}>
            <Typography variant="caption">{errorMessage}</Typography>
          </Box>
        ) : (
          favLinks.map((item) => (
            <ImgTextItem key={item.id} data={item} inCart />
          ))
        )}
      </List>

      <Box padding={1}>
        <Button
          color="dark"
          sx={{
            color: "white",
            backgroundColor: "dark.main",
            width: "100%",
            ":hover": {
              color: "dark.main",
            },
          }}
          component={Link}
          to="/my-coursese/wishlist"
        >
          Go To Wishlist
        </Button>
      </Box>
    </div>
  );
});

export default Favorites;
