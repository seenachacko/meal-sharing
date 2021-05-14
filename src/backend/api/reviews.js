const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    const reviews = await knex("review");
    response.json(reviews);

  } catch (error) {
    throw error;
  }
});
//inserting values
router.post("/", async (request, response) => {
  console.log(request.body);
  const insertingRewiews = await knex("review").insert(request.body);
  response.json(`your reviews added `);
});

router.get("/:id", async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    // knex syntax for selecting things. Look up the documentation for knex for further info
    if (isNaN(id)) {
      response.status(404).send('User IDs should be integers.');
      return;
    } else {
      const reviewById = await knex("review").where("id", id);
      if (reviewById.length === 0) {
        response.json(`there is no reviews with this id ${id}`)
      } else {
        response.json(reviewById);

      }

    }

  } catch (error) {
    throw error;
  }
});
//updation
router.put("/:id", async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    if (isNaN(id)) {
      response.status(404).send('User IDs should be integers.');
      return;
    } else {
      const reviews = await knex("review").where({ id: id })
        .update(request.body);
      response.json(`updated your review with id ${id}`);

    }

  } catch (error) {
    throw error;
  }
});
//delete
router.delete("/:id", async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    if (isNaN(id)) {
      response.status(404).send('User IDs should be integers.');
      return;
    } else {
      const deletedreviews = await knex("review")
        .delete()
        .where({ id: id })
      response.json(`your reservation has been deleted with id ${id}`);

    }

  } catch (error) {
    throw error;
  }
});



module.exports = router;