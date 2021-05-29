const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
    try {
      /*const titles = await knex("meals").select("title");*/
      const reservations = await knex("reservation"); 
      response.json(reservations );
  
    } catch (error) {
      throw error;
    }
  });
  //inserting values
  router.post("/", async (request, response) => {
    console.log(request.body);
    const insertingreservations = await knex("reservation").insert(request.body);
    response.json(insertingreservations);
  });
  
  router.get("/:id", async (request, response) => {
    try {
      const id = parseInt(request.params.id);
      // knex syntax for selecting things. Look up the documentation for knex for further info
      if (isNaN(id)) {
        response.status(404).send('User IDs should be integers.');
        return;
      } else {
        const reservationById = await knex("reservation")
        .where("id", id);
      response.json(reservationById);
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
        const reservations = await knex("reservation").where({ id: id })
          .update(request.body);
        response.json(`updated your Reservation with id ${id}`);
  
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
        const ReservationDeleting = await knex("reservation")
          .delete()
          .where({ id: id })
        response.json(`your reservation has been deleted with id ${id}`);
  
      }
  
    } catch (error) {
      throw error;
    }
  });



module.exports = router;