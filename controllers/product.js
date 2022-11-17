const { products } = require("../data");

const getAllProducts = (req, res) => {
    const { search, limit } = req.query;

    if (search && limit) {
        const newProducts = products.filter(product => product.name.startsWith(search)).slice(0, Number(limit));
        return res.status(200).json(newProducts);
    }

    if (search) {
        const newProducts = products.filter(product => product.name.startsWith(search));
        return res.status(200).json(newProducts);
    }

    if (limit) {
        const newProducts = products.slice(0, Number(limit));
        return res.status(200).json(newProducts);
    }

    res.status(200).json(products);
}

const getSingleProduct = (req, res) => {
    const { id } = req.params;
    const product = products.find(product => product.id === Number(id));

    if (!product) {
        return res
            .status(404)
            .json({ message: "Product not found" });
    }
    return res.status(200).json(product);
}

const createProduct = (req, res) => {
    const product = req.body;

    if (!product) {
        return res
            .status(400)
            .json({ message: "Please provide credentials" });
    }
    return res.status(201).json({ product: product });
}

const updateProduct = (req, res) => {
    const { id } = req.params;
    const values = req.body;
    const product = products.find(product => product.id === Number(id));

    const newProduct = { ...product, ...values };
    return res.status(200).json({ product: newProduct });
}

const deleteProduct = (req, res) => {
    const { id } = req.params;
    const newProducts = products.filter(product => product.id !== Number(id));
    return res.status(200).json({ products: newProducts });
}

module.exports = {
    getAllProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct,
}