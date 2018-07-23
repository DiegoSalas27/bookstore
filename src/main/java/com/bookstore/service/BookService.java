package com.bookstore.service;

import com.bookstore.domain.model.Book;

import java.util.List;

public interface BookService {

    List<Book> findAll();
    Book findOne(Long id);
    Book save(Book book);
    List<Book> blurrySearch(String keyword);
    void removeOne(Long id);
}
