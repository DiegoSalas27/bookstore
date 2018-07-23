package com.bookstore.resource;

import com.bookstore.domain.model.Order;
import com.bookstore.domain.model.User;
import com.bookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderResource {

    @Autowired
    private UserService userService;

    @RequestMapping("/getOrderList")
    public List<Order> getOrderList(Principal principal){
        User user = userService.findByUsername(principal.getName());
        List<Order> orderList = user.getOrderList();

        return orderList;
    }
}
