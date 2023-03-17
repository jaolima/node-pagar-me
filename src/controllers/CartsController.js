class CartsController {
    async index(req, res) {
        return res.status(200).json({ foo: 'fuba' });
    }
}

export default new CartsController();