package com.bookstore.resource;

import com.bookstore.config.SecurityConfig;
import com.bookstore.config.SecurityUtility;
import com.bookstore.domain.model.Role;
import com.bookstore.domain.model.User;
import com.bookstore.domain.model.UserRole;
import com.bookstore.service.UserService;
import com.bookstore.utility.MailConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.security.Principal;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

@RestController
@RequestMapping("/user")
public class userResource {

    @Autowired
    private UserService userService;

    @Autowired
    private MailConstructor mailConstructor;

    @Autowired
    private JavaMailSender mailSender;

//    @RequestMapping(value="/add", method=RequestMethod.POST)
//    public User addUserImagePost(@RequestBody User user){
//        return userService.save(user);
//    }

    @RequestMapping(value="/newUser", method=RequestMethod.POST)
    public ResponseEntity newUserPost(HttpServletRequest request, @RequestBody HashMap<String, String> mapper) throws  Exception{
        String username = mapper.get("username");
        String userEmail = mapper.get("email");

        if(userService.findByUsername(username) != null){
            return new ResponseEntity("usernameExists", HttpStatus.BAD_REQUEST);
        }

        if(userService.findByEmail(userEmail) != null){
            return new ResponseEntity("emailExists", HttpStatus.BAD_REQUEST);
        }

        User user = new User();
        user.setUsername(username);
        user.setEmail(userEmail);

        String password = SecurityUtility.randomPassword();
        String encryptedPassword = SecurityUtility.passwordEncoder().encode(password);
        user.setPassword(encryptedPassword);

        Role role = new Role();
        role.setRoleId(1); // 1 is for a customer
        role.setName("ROLE_USER");
        Set<UserRole> userRoles = new HashSet<>();
        userRoles.add(new UserRole(user, role));
        userService.createUser(user, userRoles);

        SimpleMailMessage email = mailConstructor.constructNewUserEmail(user, password);
        mailSender.send(email);

        return new ResponseEntity("User added successfully!", HttpStatus.OK);
    }

    @RequestMapping(value="/add/image", method=RequestMethod.POST)
    public ResponseEntity upload(@RequestParam("id") Long id, HttpServletResponse response, HttpServletRequest request) {
        try {
            MultipartHttpServletRequest multipartHttpServletRequest = (MultipartHttpServletRequest) request;
            Iterator<String> it = multipartHttpServletRequest.getFileNames();
            MultipartFile multipartFile = multipartHttpServletRequest.getFile(it.next());
            String fileName = id+".png";

            byte[] bytes = multipartFile.getBytes();
            BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(new File(
                    "src/main/resources/static/image/user/"+fileName)));
            stream.write(bytes);
            stream.close();

            return new ResponseEntity("Upload Success!", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity("Upload failed!", HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/update/image", method=RequestMethod.POST)
    public ResponseEntity updateImagePost(@RequestParam("id") Long id, HttpServletResponse response, HttpServletRequest request) {
        try {
            MultipartHttpServletRequest multipartHttpServletRequest = (MultipartHttpServletRequest) request;
            Iterator<String> it = multipartHttpServletRequest.getFileNames();
            MultipartFile multipartFile = multipartHttpServletRequest.getFile(it.next());
            String fileName = id+".png";

            Files.delete(Paths.get("src/main/resources/static/image/user/" + fileName));

            byte[] bytes = multipartFile.getBytes();
            BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(new File(
                    "src/main/resources/static/image/user/"+fileName)));
            stream.write(bytes);
            stream.close();

            return new ResponseEntity("Upload Success!", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity("Upload failed!", HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(value="/forgetPassword", method=RequestMethod.POST)
    public ResponseEntity forgetPassword(HttpServletRequest request, @RequestBody HashMap<String, String> mapper) throws  Exception{

        User user = userService.findByEmail(mapper.get("email"));

        if(user == null){
            return new ResponseEntity("Email not found", HttpStatus.BAD_REQUEST);
        }

        String password = SecurityUtility.randomPassword();

        String encryptedPassword = SecurityUtility.passwordEncoder().encode(password);
        user.setPassword(encryptedPassword);
        userService.save(user);

        SimpleMailMessage newEmail = mailConstructor.constructNewUserEmail(user, password);
        mailSender.send(newEmail);

        return new ResponseEntity("Email sent!", HttpStatus.OK);
    }

    @RequestMapping(value="/updateUserInfo", method=RequestMethod.POST)
    public ResponseEntity profileInfo(@RequestBody HashMap<String, Object>mapper) throws  Exception{

        int id = (Integer) mapper.get("id");

        String email = (String) mapper.get("email");
        String username = (String) mapper.get("username");
        String firstName = (String) mapper.get("firstName");
        String lastName = (String) mapper.get("lastName");
        String newPassword = (String) mapper.get("newPassword");
        String currentPassword = (String) mapper.get("currentPassword");

        User currentUser = userService.findById(Long.valueOf(id));

        if(currentUser == null){
            throw new Exception("User not found");
        }

        if(userService.findByEmail(email) != null){
            if(userService.findByEmail(email).getId() != currentUser.getId()){
                return new ResponseEntity("Email not found!", HttpStatus.BAD_REQUEST);
            }
        }

        if(userService.findByUsername(username) != null){
            if(userService.findByUsername(username).getId() != currentUser.getId()){
                return new ResponseEntity("Username not found!", HttpStatus.BAD_REQUEST);
            }
        }

        SecurityConfig securityConfig = new SecurityConfig();


            BCryptPasswordEncoder passwordEncoder = SecurityUtility.passwordEncoder();
            String dbPassword = currentUser.getPassword();

        if(currentPassword != null){
            if(passwordEncoder.matches(currentPassword, dbPassword)){
                if(newPassword != null && !newPassword.isEmpty() && !newPassword.equals("")) {
                    currentUser.setPassword(passwordEncoder.encode(newPassword));
                }
                currentUser.setEmail(email);
            } else{
                return new ResponseEntity("Incorrect current password!", HttpStatus.BAD_REQUEST);
            }
        }


        currentUser.setFirstName(firstName);
        currentUser.setLastName(lastName);
        currentUser.setUsername(username);

        userService.save(currentUser);

        return new ResponseEntity("Update success!", HttpStatus.OK);
    }

    @RequestMapping("/getCurrentUser")
    public  User getCurrentUser(Principal principal){ //principal class returns the current user loggedIn
        User user = null;
        if(principal != null){
            user = userService.findByUsername(principal.getName());
        }
        return user;
    }
}
