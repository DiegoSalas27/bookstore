package com.bookstore.repository;

import com.bookstore.domain.model.BookToCartItem;
import com.bookstore.domain.model.CartItem;
import org.springframework.data.repository.CrudRepository;

public interface BookToCartItemRepository extends CrudRepository<BookToCartItem, Long> {

    void deleteByCartItem(CartItem cartItem);
}
