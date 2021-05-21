let db = require("../models")

app.get('/api/FullName/:id', async function (req, res) {
    try {
        let data = await db.Customers.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(data)
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
})
app.get('/api/shippingstreetaddress/:id', function (req, res) {
    try {
        let data = await db.ShippingAddress.findAll({
            where: {
                customerId: req.params.id
            }
        });
        res.json(data)
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
})
app.get('/api/billingstreetaddress/:id', function (req, res) {
    try {
        let data = await db.BillingAddress.findAll({
            where: {
                cardId: req.params.id
            }
        });
        res.json(data)
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }

})
app.get('/api/billingpostalcode/:id', function (req, res) {
    try {
        let data = await db.BillingAddress.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(data)
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
})
app.get('/api/shippingstate/:id', function (req, res) {
    try {
        let data = await db.ShippingAddress.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(data)
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
})
app.get('/api/billingstate/:id', function (req, res) {
    try {
        let data = await db.BillingAddress.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(data)
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }

})
app.get('/api/fulladdress/:id', function (req, res) {
    try {
        let data = await db.Customers.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(data)
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }

})
app.get('/api/firstname/:id', function (req, res) {
    try {
        let data = await db.Customers.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(data)
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }

})
app.get('/api/lastname/:id', function (req, res) {
    try {
        let data = await db.Customers.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(data)
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }

})
app.get('/api/recentorders/:id', function (req, res) {
    try {
        let data = await db.Orders.findAll({
            where: {
                created_date: {
                    [Op.gte]: moment().subtract(7, 'days').toDate()
                  }
            }
        });
        res.json(data)
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }

})
app.get('/api/lastorder/:id', function (req, res) {
    try {
        let data = await db.Orders.findAll({
            where: {
                created_date: {
                    [Op.gte]: moment().subtract(2, 'days').toDate()
                  }
            }
        });
        res.json(data)
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }

})
app.get('/api/order/:id', function (req, res) {
    try {
        let data = await db.Orders.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(data)
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }

})
app.post('/api/orders', function (req, res) {
    try {
        let data = await db.Orders.findAll({});
        res.json(data)
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }

})
app.put('/api/billingaddress/:id', function (req, res) {
    try {
        let data = await db.Orders.update( req.body ,
        { where: { id: 1 } });
        res.json(data)
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }

})
app.post('/api/newsletter', function (req, res) {
    try {
        let data = await db.NewsLetter.create(req.body)
        res.json(data)
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }

})
app.post('/api/customerfeedback', function (req, res) {
    try {
        let data = await db.CustomerFeedback.create(req.body)
        res.json(data)
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
})