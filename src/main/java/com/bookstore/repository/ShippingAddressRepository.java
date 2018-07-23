package com.bookstore.repository;

import com.bookstore.domain.model.ShippingAddress;
import org.springframework.data.repository.CrudRepository;

public interface ShippingAddressRepository extends CrudRepository<ShippingAddress, Long> {

}
