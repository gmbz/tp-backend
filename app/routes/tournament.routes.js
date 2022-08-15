const { Router } = require("express");
const router = Router();
const tournamentController = require("../controllers/tournament.controller");
const { verifyToken } = require("../middlewares/verifyToken");

/**
 * @swagger
 * components:
 *      schemas:
 *          Tournament:
 *              type: object
 *              properties:
 *                  nombre:
 *                      type: string
 *                      description: nombre del torneo
 *                  privado:
 *                      type: boolean
 *                      description: especifica si el torneo es privado o publico
 *                  premio:
 *                      type: string
 *                      description: premio para el primer puesto (de momento)
 *                  cupo:
 *                      type: integer
 *                      description: cantidad maxima de participantes
 *                  fechaInicio:
 *                      type: date
 *                      description: fecha de inicio del torneo
 *                  fechaFin:
 *                      type: date
 *                      description: fecha de fin del torneo
 *                  clasificacionMinima:
 *                      $ref: '#components/schemas/League'
 *                  autor:
 *                      $ref: '#components/schemas/User'
 *                  participantes:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schemas/User'
 *              required:
 *                  - nombre
 *                  - privado
 *                  - premio
 *                  - cupo
 *                  - fechaInicio
 *                  - fechaFin
 *                  - clasificacionMinima
 *              example:
 *                  username: carlos
 * 
 */

/**
 * @swagger
 * /tournament:
 *      get:
 *         summary: return all tournaments 
 *         tags: [tournaments]
 *         responses:
 *             200:
 *                 description: all tournaments 
 *                 content: 
 *                     application/json:
 *                         schema:
 *                             type: array
 *                             items:
 *                                 $ref: '#components/schemas/Tournament'
 */
router.get("/", tournamentController.findAll);

router.post("/", verifyToken, tournamentController.create);

router.put("/:id", verifyToken, tournamentController.update);

/**
 * @swagger
 * /tournament/{id}:
 *      get:
 *         summary: return a tournament by id
 *         tags: [tournaments]
 *         parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                  type: string
 *                required: true
 *                description: tournament id
 *         responses:
 *             200:
 *                 description: Success 
 *                 content: 
 *                     application/json:
 *                         schema:
 *                               $ref: '#components/schemas/Tournament'
 */
router.get("/:id", tournamentController.findOne);

router.delete("/:id", verifyToken, tournamentController.delete);

router.get("/:id/add/:name", tournamentController.addParticipant);

router.get("/tier/:tier_name", tournamentController.findAllByRank);

module.exports = router;