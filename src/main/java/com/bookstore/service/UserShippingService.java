package com.bookstore.service;

import com.bookstore.domain.model.UserShipping;

public interface UserShippingService {

    UserShipping findById(Long id);
    void removeById(Long id);
}
