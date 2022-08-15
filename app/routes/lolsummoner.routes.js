const { Router } = require("express");
const router = Router();

const summonerController = require("../controllers/summoner.controller");

/**
 * @swagger
 * components:
 *      schemas:
 *          Summoner:
 *              type: object
 *              properties:
 *                  summonerId:
 *                      type: string
 *                      description: id del summoner dado por la api oficial
 *                      example: 654456
 *                  summonerName:
 *                      type: string
 *                      description: nombre del summoner (usuario del lol)
 *                  summonerLevel:
 *                      type: integer
 *                      description: nivel del summoner 
 *                  rankedSolo:
 *                      $ref: '#components/schemas/Ranked'
 *                  rankedFlex:
 *                      $ref: '#components/schemas/Ranked'
 *              required:
 *                  - summonerId
 *                  - summonerName
 *              example:
 *                  summonerId: 56qffyVFejPOygqMmRg2EYvRenumoRfDOpgDreT3od0SYQ
 *                  summonerName: carlitos114
 *                  summonerLevel: 347
 *                  rankedFlex: 
 *                      name: CHALLENGER
 *                      tier: 1
 * 
 */

/**
 * @swagger
 * /summoner/{summonerName}:
 *      get:
 *         summary: return a summoner by name
 *         tags: [summoner]
 *         parameters:
 *              - in: path
 *                name: summonerName
 *                schema:
 *                  type: string
 *                required: true
 *                description: summoner name
 *         responses:
 *             200:
 *                 description: a summoner 
 *                 content: 
 *                     application/json:
 *                         schema:
 *                             type: object
 *                             items:
 *                                 $ref: '#components/schemas/Summoner'
 * 
 */
router.get("/:summonerName", summonerController.summoner);

module.exports = router;