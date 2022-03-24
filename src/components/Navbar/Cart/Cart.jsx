import { Box, Button, Divider, List, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";
import { calcTotalPrice } from "../../../common/helpers";
import { useFetch } from "../../../common/Hooks/UseFetch";
import ImgTextItem from "../ImgTextItem";

const Cart = React.forwardRef((props, ref) => {
  const {
    data: cartsItems,
    isError,
    isLoading,
    errorMessage,
  } = useFetch("http://localhost:4000/courses?list=cart", []);

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
          cartsItems.map((item) => <ImgTextItem key={item.id} data={item} />)
        )}
      </List>

      <Box px={1} pb={1}>
        <Divider variant="fullWidth" sx={{ mb: 1 }} />
        <Box mb={0.5}>
          <Typography
            fontSize={"19px"}
            sx={{ mr: 0.5 }}
            variant="subtitle2"
            component="strong"
            color={"black"}
          >
            Total: E£
            {!isLoading && !isError && calcTotalPrice(cartsItems).afterDiscount}
          </Typography>
          <Typography
            variant="body2"
            component="span"
            color={grey[600]}
            sx={{ textDecorationLine: "line-through" }}
          >
            E£
            {!isLoading &&
              !isError &&
              calcTotalPrice(cartsItems).beforeDiscount}
          </Typography>
        </Box>
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
          to="/cart"
        >
          Go To Cart
        </Button>
      </Box>
    </div>
  );
});

export default Cart;
