const { Router } = require("express");
const router = Router();
const userController = require("../controllers/user.controller");

/**
 * @swagger
 * components:
 *      schemas:
 *          User:
 *              type: object
 *              properties:
 *                  username:
 *                      type: integer
 *                      description: tier de la liga
 *                  password:
 *                      type: string
 *                      description: nombre de la liga
 *              required:
 *                  - username
 *                  - password
 *              example:
 *                  username: carlos
 * 
 */

/**
 * @swagger
 * /user:
 *      get:
 *         summary: return all users 
 *         tags: [users]
 *         responses:
 *             200:
 *                 description: all users 
 *                 content: 
 *                     application/json:
 *                         schema:
 *                             type: array
 *                             items:
 *                                 $ref: '#components/schemas/User'
 */
router.get("/", userController.findAll )

/**
 * @swagger
 * /user:
 *      post:
 *         summary: create a new user 
 *         tags: [users]
 *         requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#components/schemas/User'
 *         responses:
 *             200:
 *                 description: Success 
 *                 content: 
 *                     application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                                 token: 
 *                                      type: string
 *                                      description: credencial de acceso del usuario
 *                         example:
 *                              token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjFhOTgwNGMwNDdiNDU1MmY4YmFkZSIsImlhdCI6MTY2MDAwNDczNiwiZXhwIjoxNjYwMDkxMTM2fQ.el3ZH-QvawICu7tr2QL-JQxyy5ezHFMJ0ac0InFAQOY
 */
router.post("/", userController.create );

/**
 * @swagger
 * /user/{id}:
 *      put:
 *         summary: update user by id
 *         tags: [users]
 *         parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                  type: string
 *                required: true
 *                description: user id
 *         requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#components/schemas/User'
 *         responses:
 *             200:
 *                 description: Success 
 *                 content: 
 *                     application/json:
 *                         schema:
 *                               $ref: '#components/schemas/User'
 */
router.put("/:id", userController.update );

/**
 * @swagger
 * /user/{id}:
 *      get:
 *         summary: return a user by id
 *         tags: [users]
 *         parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                  type: string
 *                required: true
 *                description: user id
 *         responses:
 *             200:
 *                 description: Success 
 *                 content: 
 *                     application/json:
 *                         schema:
 *                               $ref: '#components/schemas/User'
 */
router.get("/:id", userController.findOne );

/**
 * @swagger
 * /user/{id}:
 *      delete:
 *         summary: delete a user by id
 *         tags: [users]
 *         parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                  type: string
 *                required: true
 *                description: user id
 *         responses:
 *             200:
 *                 description: Success 
 */
router.delete("/:id", userController.delete );

/**
 * @swagger
 * /user/signin:
 *      post:
 *         summary: login 
 *         tags: [users]
 *         requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              username: 
 *                                  type: string
 *                                  description: nombre de usuario
 *                              password: 
 *                                  type: string
 *                                  description: password del usuario
 *                      example:
 *                          username: carlos
 *                          password: carlos123
 *         responses:
 *             200:
 *                 description: Success 
 *                 content: 
 *                     application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                                 token: 
 *                                      type: string
 *                                      description: credencial de acceso del usuario
 *                         example:
 *                              token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjFhOTgwNGMwNDdiNDU1MmY4YmFkZSIsImlhdCI6MTY2MDAwNDczNiwiZXhwIjoxNjYwMDkxMTM2fQ.el3ZH-QvawICu7tr2QL-JQxyy5ezHFMJ0ac0InFAQOY
 */
router.post("/signin", userController.signin );


module.exports = router;