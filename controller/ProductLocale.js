const ProductLocale = require("./../model/ProductLocale");

const getAll = async (request, response) => {
  try {
    response.send(await ProductLocale.findAll());
  } catch (error) {
    response.status(500).send("Server error");
  }
};

const getAllByProduct = async (request, response) => {
  const { productId } = request.params;
  try {
    response.send(await ProductLocale.findAll({
      where : {
        productId
      }
    }));
  } catch (error) {
    response.status(500).send("Server error");
  }
};

const getById = async (request, response) => {
  try {
    const { id } = request.params;
    response.send(
      await ProductLocale.findOne({
        where: { id: parseInt(id) },
      })
    );
  } catch (error) {
    response.status(500).send("Server error");
  }
};

const create = async (request, response) => {
  try {
    const result = await ProductLocale.create({ ...request.body });
    response.send(result);
  } catch (error) {
    response.status(500).send("Server error");
  }
};

const update = async (request, response) => {
  try {
    const { id } = request.params;
    response.send(
      await ProductLocale.update(
        { ...request.body },
        { where: { id: parseInt(id) } }
      )
    );
    response.sendStatus(200);
  } catch (error) {
    response.status(500).send("Server error");
  }
};

const destroy = async (request, response) => {
  try {
    const { id } = request.params;
    await ProductLocale.destroy({ where: { id: parseInt(id) } });
    response.sendStatus(200);
  } catch (error) {
    response.status(500).send("Server error");
  }
};

module.exports = { getAll, getById, create, update, destroy, getAllByProduct };
