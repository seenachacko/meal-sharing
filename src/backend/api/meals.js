const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    if ('maxPrice' in request.query) {
      const maxPrice = parseInt(request.query.maxPrice);
      if (isNaN(maxPrice)) {
        response.status(400).send({ error: "maxPrice should be an integer" });
        return;
      }
      const MaxPriceMeals = await knex('meal')
        .where("price", "<=", maxPrice)
      response.json(MaxPriceMeals);
      return

    } else if ("availableReservations" in request.query) {
      const availableReservations = request.query.availableReservations;
      if (availableReservations === "true") {
        const filteredMeals = await knex.raw(`select meal.id, meal.title, meal.max_reservations, coalesce(SUM(reservation.number_of_guests), 0) AS total_reservations
    from meal
    left join reservation on meal.id = reservation.meal_id
    group by meal.id
    having meal.max_reservations > total_reservations`).then(result => result[0]);

        response.send(filteredMeals);
      }
    } else if ('title' in request.query) {
      const title = request.query.title.toLowerCase();
      const mealByTitle = await knex("meal")
        .where("meal.title", "like", "%" + title + "%");
      response.json(mealByTitle);
    } else if ('createdAfter' in request.query) {
      const createdAfter = new Date(request.query.createdAfter);
      if (!createdAfter.getDate()) {
        response.status(404).send('must be a valid date.');
        return;
      }
      const mealByDate = await knex("meal")
        .where("created_date", ">=", createdAfter)
      response.json(mealByDate);
    } else if ('limit' in request.query) {
      const limit = parseInt(request.query.limit);
      if (isNaN(limit)) {
        res.status(400).send({ error: "limit should be an integer" });
        return;
      }
      const limitedMeals = await knex("meal").limit(limit);
      response.json(limitedMeals);
    } else {
      const titles = await knex("meal").select("title");
      response.json(titles);
    }

  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  console.log(request.body);
  const insertingMeals = await knex("meal").insert(request.body);
  response.json(insertingMeals);
});

router.get("/:id", async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    if (isNaN(id)) {
      response.status(404).send('User IDs should be integers.');
      return;
    } else {
      const mealById = await knex("meal")
        .where("id", id);
      response.json(mealById);
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
      const meals = await knex("meal").where({ id: id })
        .update(request.body);
      response.json(meals);

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
      const mealDeleting = await knex("meal")
        .delete()
        .where({ id: id })
      response.json("meal has been updated");

    }

  } catch (error) {
    throw error;
  }
});
module.exports = router;
