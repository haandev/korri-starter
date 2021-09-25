const Company = require("./../model/Company");

const getAll = async (request, response) => {
  try {
    response.send(await Company.findAll());
  } catch (error) {
    response.status(500).send("Server error");
  }
};

const getById = async (request, response) => {
  try {
    const { id } = request.params;
    response.send(
      await Company.findOne({
        where: { id: parseInt(id) },
      })
    );
  } catch (error) {
    response.status(500).send("Server error");
  }
};

const create = async (request, response) => {
  try {
    const result = await Company.create({ ...request.body });
    response.send(result);
  } catch (error) {
    response.status(500).send("Server error");
  }
};

const update = async (request, response) => {
  try {
    const { id } = request.params;
    response.send(
      await Company.update({ ...request.body }, { where: { id: parseInt(id) } })
    );
    response.sendStatus(200);
  } catch (error) {
    response.status(500).send("Server error");
  }
};

const destroy = async (request, response) => {
  try {
    const { id } = request.params;
    await Company.destroy({ where: { id: parseInt(id) } });
    response.sendStatus(200);
  } catch (error) {
    response.status(500).send("Server error");
  }
};

module.exports = { getAll, getById, create, update, destroy };
