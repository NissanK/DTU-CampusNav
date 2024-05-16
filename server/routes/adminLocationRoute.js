const {Router} = require('express');
const Location = require('../schema/locationSchema');
const adminMiddleware = require('../middleware/adminMiddleware');

const router = Router();

const { z } = require('zod');

const locationSchema = z.object({
  id: z.number().int(),
  parent: z.number().int().nullable(),
  superParent: z.number().int(),
  name: z.string(),
  location: z.object({
    latitude: z.number(),
    longitude: z.number()
  }).nullable(),
  description: z.array(z.string()).nullable(),
  nestedList: z.array(
    z.object({
      nestedItemId: z.number().int().nullable(),
      nestedItemName: z.string().nullable(),
    })
  ).nullable(),
  clickCount: z.number().int(),
});

const addLocation = async (req) => {
    try {
        const validatedData = locationSchema.parse(req.body);
        const location = new Location(validatedData);
        await location.save();
        return null;
    } catch (e) {
        if (e.code === 11000 || e.code === 11001) {
            throw new Error(`A location with this ID : ${req.body.id} already exists.`);
            } else {
            throw new Error(e.errors);
        }
    }
}
  

router.post('/addLocation', adminMiddleware, async (req, res) => {
    try {
        await addLocation(req);
        res.json({
        "message" : "Location added successfully",
        });
    } catch (e) {
        res.status(400).json({
        "error" : e.message
        });
    }
});

const multipleLocationSchema = z.array(locationSchema); // schema for multiple locations input

router.post('/addMultiple', adminMiddleware, async (req, res) => {
    try {
      const validatedData = multipleLocationSchema.parse(req.body);
      const promises = validatedData.map(location => addLocation({ body: location }));
  
      const results = await Promise.allSettled(promises);

      const errors = results
        .filter(result => result.status === 'rejected')
        .map(result => result.reason.message);
  
      res.json({
        "message": "Locations added successfully",
        "errors": errors
      });
    } catch (e) {
      res.status(400).json({
        "error" : e.errors
      });
    }
});

module.exports = router;