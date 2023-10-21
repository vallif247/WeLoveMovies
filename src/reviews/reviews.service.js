const knex = require("../db/connection");

const read = (review_id) => {
  return knex("reviews")
  .where({ review_id: review_id })
  .select("*")
  .first()
}

const destroy = (review_id) => {
    return knex("reviews")
     .where({ review_id: review_id })
     .del()
  }

  const update = (updated) => {
      return knex("reviews")
      .where({ review_id: updated.review_id })
      .update(updated, ["*"])
      .then((data) => data[0]);
  }

  function getCriticById(criticId) {
    return knex("critics").select("*").where({ critic_id: criticId }).first();
}

module.exports = {
    destroy,
    update,
    read,
    getCriticById
}