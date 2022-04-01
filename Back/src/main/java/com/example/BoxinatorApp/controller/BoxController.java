package com.example.BoxinatorApp.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.example.BoxinatorApp.model.Box;
import com.example.BoxinatorApp.repository.BoxRepository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@Transactional
public class BoxController {

    @Autowired
    BoxRepository boxRepository;

    /*------------------List all boxes ---------------*/
    @PersistenceContext
    EntityManager em;

    @GetMapping(path = "/listboxes")
    public List<Box> getAllItems() {
        // orm find all
        // SELECT * FROM `box_table`;
        javax.persistence.Query q = em.createNativeQuery("SELECT * FROM `box_table`");
        /* List<Box> boxes = q.getResultList(); */
        System.out.println(q);
        List<Box> boxes = q.getResultList();
        System.out.println(boxes);

        return boxes;
    }

    /*--------------------Add box --------------------*/
    @PersistenceContext
    EntityManager entityManager;

    @PostMapping("/addbox")
    public Box addBox(@RequestBody Box box) {
        // INSERT INTO `box_table` (`id`, `color`, `country`, `name`, `weight`) VALUES
        // ('', NULL, NULL, NULL, NULL);
        // orm find all
        List<Box> test = getAllItems();
        System.out.println(box.getId());
        System.out.println(box.getColor());
        System.out.println(box.getCountry());
        System.out.println(box.getName());
        System.out.println(box.getWeight());
        javax.persistence.Query q = entityManager.createNativeQuery(
                "INSERT INTO box_table (id, color, country, name, weight) VALUES(?,  ?, ?, ?, ?)")
                .setParameter(1, test.size() + 1).setParameter(2, box.getColor())
                .setParameter(3, box.getCountry())
                .setParameter(4, box.getName()).setParameter(5, box.getWeight());
        q.executeUpdate();

        /*
         * em.getTransaction().begin();
         * em.
         * createNativeQuery("INSERT INTO userinfo ( login, upassword, email, mobile, fax, dob)"
         * + " VALUES ( :a, :b, :c, :d, :e, :f)")
         * .setParameter("a", objUser.getLogin())
         * .setParameter("b", objUser.getUpassword())
         * .setParameter("c", objUser.getEmail())
         * .setParameter("d", objUser.getMobile())
         * .setParameter("e", objUser.getFax())
         * .setParameter("f", objUser.getDob()).executeUpdate();
         * em.getTransaction().commit();
         * em.close();
         */
        return box;
    }

}