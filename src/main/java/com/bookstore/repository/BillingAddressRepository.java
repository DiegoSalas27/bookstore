package com.bookstore.repository;

import com.bookstore.domain.model.BillingAddress;
import org.springframework.data.repository.CrudRepository;

public interface BillingAddressRepository extends CrudRepository<BillingAddress, Long> {


}
