const { Router } = require("express");
const router = Router();
const leaguesController = require("../controllers/league.controller");

/**
 * @swagger
 * components:
 *      schemas:
 *          League:
 *              type: object
 *              properties:
 *                  tier:
 *                      type: integer
 *                      description: tier de la liga
 *                  name:
 *                      type: string
 *                      description: nombre de la liga
 *              required:
 *                  - tier
 *                  - name
 *              example:
 *                  name: CHALLENGER
 *                  tier: 1
 * 
 */

/**
 * @swagger
 * /league:
 *      get:
 *         summary: return all leagues 
 *         tags: [leagues]
 *         responses:
 *             200:
 *                 description: all leagues 
 *                 content: 
 *                     application/json:
 *                         schema:
 *                             type: array
 *                             items:
 *                                 $ref: '#components/schemas/League'
 */
router.get("/", leaguesController.findAll);

module.exports = router;