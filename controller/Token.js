const Token = require("./../model/Token");
const Table = require("./../model/Table");

const getAll = async (request, response) => {
  try {
    response.send(
      await Token.findAll({
        include: [
          {
            model: Table,
          },
        ],
      })
    );
  } catch (error) {
    response.status(500).send("Server error");
  }
};

const getById = async (request, response) => {
  try {
    const { id } = request.params;
    response.send(
      await Token.findOne({
        include: [
          {
            model: Table,
          },
        ],
        where: { id: parseInt(id) },
      })
    );
  } catch (error) {
    response.status(500).send("Server error");
  }
};

const create = async (request, response) => {
  try {
    const result = await Token.create({ ...request.body });
    response.send(result);
  } catch (error) {
    response.status(500).send("Server error");
  }
};

const update = async (request, response) => {
  try {
    const { id } = request.params;
    response.send(
      await Token.update({ ...request.body }, { where: { id: parseInt(id) } })
    );
    response.sendStatus(200);
  } catch (error) {
    response.status(500).send("Server error");
  }
};

const destroy = async (request, response) => {
  try {
    const { id } = request.params;
    console.log(id);
    await Token.destroy({ where: { id: parseInt(id) } });
    response.sendStatus(200);
  } catch (error) {
    response.status(500).send("Server error");
  }
};

module.exports = { getAll, getById, create, update, destroy };
