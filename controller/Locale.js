const Company = require("./../model/Company");
const Locale = require("./../model/Locale");

const getAll = async (request, response) => {
    try {
        const {
            authUser : {
                companyId
            }
        } = request
        response.send(
            await Locale.findAll({
                include: [
                    {
                        model: Company,
                    },
                ],
                where: {companyId},
                order: ["o"]
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
            await Locale.findOne({
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
                title
            },
            authUser : {
                companyId
            }
        } = request
        const result = await Locale.create({ title,companyId  });
        response.send(result);
    } catch (error) {
        response.status(500).send("Server error");
    }
};

const update = async (request, response) => {
    try {
        const { id } = request.params;
        response.send(
            await Locale.update(
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
        await Locale.destroy({ where: { id: parseInt(id) } });
        response.sendStatus(200);
    } catch (error) {
        response.status(500).send("Server error");
    }
};

module.exports = { getAll, getById, create, update, destroy };
