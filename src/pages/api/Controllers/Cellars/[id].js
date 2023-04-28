import { connectdb } from "../../configs/mongo";
import Cellars from "../../models/Cellars";
import Clients from "../../models/Clients"

connectdb();

export default async function handler(req, res) {
    const { method, body, query: { id } } = req;
    switch (method) {
        case "GET":
            try {
                const cellars = await Cellars.findById(id);
                if (!cellars) return res.status(404).send({ message: 'Cellar not found' });
                return res.status(200).json({ msg: cellars, success: true });
            } catch (err) {
                return res.status(500).json({ error: err.message })
            }

        case "PUT":
            try {
                const updateCellar = await Cellars.findByIdAndUpdate(id, body, {
                    new: true,
                    runValidators: true,
                });
                if (!updateCellar) {
                    return res.status(404).json({ error: "Update operation failed" });
                }
                return res.status(204).send();
            } catch (err) {
                return res.status(500).json({ error: err.message });
            }

        case "DELETE":
            try {
                const clients = await Clients.find({ cellars: id });
                if (clients.length > 0) {
                    return res.status(400).json({ error: "La bodega no se puede eliminar porque está asignada a un usuario." });
                }
                const deleteCellar = await Cellars.findByIdAndDelete(id);
                if (!deleteCellar) {
                    return res.status(404).json({ error: "Cellar not found" });
                }
                return res.status(204).send();
            } catch (err) {
                return res.status(500).json({ error: err.message });
            }
        default:
            return res.status(400).json({ msg: "This method is not supported" })
    }
}
//Sin validaciones