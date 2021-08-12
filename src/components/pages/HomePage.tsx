import React, { FC } from "react";
import GenericTemplate from "../templates/GenericTemplate";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const HomePage: FC = () => {
  return (
    <GenericTemplate title="トップページ">
      <Link to="/products">
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="商品ページへ" />
        </ListItem>
      </Link>
    </GenericTemplate>
  );
};
  
  export default HomePage;
