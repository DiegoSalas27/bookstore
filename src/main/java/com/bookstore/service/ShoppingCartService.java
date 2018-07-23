package com.bookstore.service;

import com.bookstore.domain.model.ShoppingCart;

public interface ShoppingCartService {

    ShoppingCart updateShoppingCart(ShoppingCart shoppingCart);
    void clearShoppingCart(ShoppingCart shoppingCart);
}
