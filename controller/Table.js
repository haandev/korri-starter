const Table = require("./../model/Table");
const Company = require("./../model/Company");

const getAll = async (request, response) => {
  try {
    response.send(
      await Table.findAll({
        include: [
          {
            model: Company,
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
      await Table.findOne({
        include: [
          {
            model: Company,
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
    const {
      body:{
        tableName
      },
      authUser : {
        companyId
      }
    } = request
    const result = await Table.create({ tableName,companyId });
    response.send(result);
  } catch (error) {
    response.status(500).send("Server error");
  }
};

const update = async (request, response) => {
  try {
    const { id } = request.params;
    response.send(
      await Table.update({ ...request.body }, { where: { id: parseInt(id) } })
    );
    response.sendStatus(200);
  } catch (error) {
    response.status(500).send("Server error");
  }
};

const destroy = async (request, response) => {
  try {
    const { id } = request.params;
    await Table.destroy({ where: { id: parseInt(id) } });
    response.sendStatus(200);
  } catch (error) {
    response.status(500).send("Server error");
  }
};

module.exports = { getAll, getById, create, update, destroy };
