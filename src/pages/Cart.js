import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Typography,
  Button,
  Grid,
  Paper,
  Box,
  IconButton,
  Divider,
  Container,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  removeFromCart,
  incrementCart,
  decrementCart,
} from "../redux/reducer/products";

const Cart = () => {
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleDecrementCart = (item) => {
    if (item.quantity > 1) {
      dispatch(decrementCart(item));
    } else {
      dispatch(removeFromCart(item));
    }
  };

  const handleRemoveAll = () => {
    cart.forEach((item) => dispatch(removeFromCart(item)));
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Shopping Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <>
          <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
            {cart.map((item) => (
              <React.Fragment key={item.id}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} sm={3}>
                    <Box
                      component="img"
                      sx={{
                        width: "100%",
                        height: 100,
                        objectFit: "contain",
                      }}
                      alt={item.title}
                      src={item.thumbnail}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography variant="subtitle1">{item.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${item.price}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Box display="flex" alignItems="center">
                      <IconButton
                        size="small"
                        onClick={() => handleDecrementCart(item)}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
                      <IconButton
                        size="small"
                        onClick={() => dispatch(incrementCart(item))}
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Typography variant="subtitle1">
                      ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" justifyContent="flex-end">
                      <IconButton
                        color="error"
                        onClick={() => handleRemoveFromCart(item)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 2 }} />
              </React.Fragment>
            ))}
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
              <Typography variant="h6">
                Total: ${totalPrice.toFixed(2)}
              </Typography>
            </Box>
          </Paper>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button variant="contained" color="primary" sx={{ mr: 2 }}>
              Checkout
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleRemoveAll}
            >
              Remove All
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};

export default Cart;
