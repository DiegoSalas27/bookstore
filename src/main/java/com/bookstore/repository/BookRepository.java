package com.bookstore.repository;

import com.bookstore.domain.model.Book;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BookRepository extends CrudRepository<Book, Long> {

    List<Book> findByTitleContaining(String keyword); // spring recognizes this method will look for a keyword
}
