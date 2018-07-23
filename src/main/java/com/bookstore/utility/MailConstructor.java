package com.bookstore.utility;

import com.bookstore.domain.model.Order;
import com.bookstore.domain.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Component;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Locale;

@Component
public class MailConstructor {

    @Autowired
    private Environment env;

    @Autowired
    private TemplateEngine templateEngine;

    public SimpleMailMessage constructNewUserEmail(User user, String password){
        String message="\nPlease use the following credentials to log in and edit your personal information, including your own password"
                + "\nUsername: " +user.getUsername()+ "\nPassword: " +password;

        SimpleMailMessage email = new SimpleMailMessage();
        email.setTo(user.getEmail());
        email.setSubject("Dom's Bookstore - new User");
        email.setText(message);
        email.setFrom(env.getProperty("support.email"));

        return email;
    }

    //MimeMessagePreparator allows us to have rich text information. for instance a template engine to include html tags

    public MimeMessagePreparator constructOrderConfirmationEmail (User user, Order order, Locale locale) {
        Context context = new Context();
        context.setVariable("order", order);
        context.setVariable("user", user);
        context.setVariable("cartItemList", order.getCartItemList());
        String text = templateEngine.process("orderConfirmationEmailTemplate", context);

        MimeMessagePreparator messagePreparator = new MimeMessagePreparator() {
            @Override
            public void prepare(MimeMessage mimeMessage) throws Exception {
                MimeMessageHelper email = new MimeMessageHelper(mimeMessage);
                email.setTo(user.getEmail());
                email.setSubject("Order Confirmation - "+order.getId());
                email.setText(text,true);
                email.setFrom(new InternetAddress("dominicsc2hs@gmail.com"));
            }
        };

        return messagePreparator;
    }
}
