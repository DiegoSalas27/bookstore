package com.bookstore.repository;

import com.bookstore.domain.model.Order;
import com.bookstore.domain.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface OrderRepository extends CrudRepository<Order, Long> {

    List<Order> findByUser(User user);
}
