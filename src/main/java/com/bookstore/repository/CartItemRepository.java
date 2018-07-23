package com.bookstore.repository;

import com.bookstore.domain.model.CartItem;
import com.bookstore.domain.model.ShoppingCart;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface CartItemRepository extends CrudRepository<CartItem, Long> {

    List<CartItem> findByShoppingCart(ShoppingCart shoppingCart);
//    List<CartItem> findByOrder(Order order);
}
