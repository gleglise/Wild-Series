import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

import programActions from "./modules/program/programActions";
import sayActions from "./modules/say/sayActions";
router.get("/", sayActions.sayWelcome);

router.get("/api/programs", programActions.browse);
router.get("/api/programs/:id", programActions.read);

// GET /api/categories qui renvoie la liste des catégories.
// GET /api/categories/:id qui renvoie une catégorie en particulier.
import categoryActions from "./modules/category/categoryActions";
router.get("/api/categories", categoryActions.browse);
router.get("/api/categories/:id", categoryActions.read);

/* ************************************************************************* */

export default router;
