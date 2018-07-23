package com.bookstore.service;

import com.bookstore.domain.model.Book;
import com.bookstore.domain.model.CartItem;
import com.bookstore.domain.model.ShoppingCart;
import com.bookstore.domain.model.User;

import java.util.List;

public interface CartItemService {

    CartItem addBookToCartItem(Book book, User user, int qty);
    List<CartItem> findByShoppingCart(ShoppingCart shoppingCart);
//    List<CartItem> findByOrder(Order order);
    CartItem updateCartItem(CartItem cartItem);
    void removeCartItem(CartItem cartItem);
    CartItem findById(Long id);
    CartItem save(CartItem cartItem);

}
