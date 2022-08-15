const { Router } = require("express");
const router = Router();
// const rankedsController = require("../controllers/ranked.controller");

/**
 * @swagger
 * components:
 *      schemas:
 *          Ranked:
 *              type: object
 *              properties:
 *                  queueType:
 *                      type: string
 *                      description: tipo de la cola de la ranked
 *                  tier:
 *                      type: integer
 *                      description: tier da la liga del summoner
 *                  tierName:
 *                      type: string
 *                      description: nombre del tier de la liga del summoner
 *                  rank:
 *                      type: string
 *                      description: rango de la liga en la que está el summoner
 *                  wins:
 *                      type: integer
 *                      description: cantidad de partidas ganadas
 *                  losses:
 *                      type: integer
 *                      description: cantidad de partidas perdidas
 *                  leaguePoints:
 *                      type: integer
 *                      description: puntos de ranked que tiene el summoner
 *                  summoner:
 *                      type: object
 *                      description: summoner
 *              required:
 *                  - queueType
 *                  - tier
 *                  - tierName
 *                  - rank
 *                  - wins
 *                  - losses
 *                  - leaguePoints
 *              example:
 *                  name: CHALLENGER
 *                  tier: 1
 * 
 */

module.exports = router;