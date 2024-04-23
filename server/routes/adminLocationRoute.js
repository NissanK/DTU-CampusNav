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


const addLocation = async (req, res) => {
    try {
        const validatedData = locationSchema.parse(req.body);
        const location = new Location(validatedData);
        await location.save();
    } catch (e) {
        if (e.code === 11000 || e.code === 11001) {
            res.status(400).json({
                "error" : `A location with this ID : ${req.body.id} already exists.`
            });
        } else {
            res.status(400).json({
                "error" : e.errors
            });
        }
    }
}

router.post('/addLocation',adminMiddleware, async (req, res) => {
    addLocation(req, res);
    res.json({
        "message" : "Location added successfully",
    });
});


const multipleLocationSchema = z.array(locationSchema); // schema for multiple locations input

router.post('/addMultiple',adminMiddleware, async (req, res) => {
    try{
        const validatedData = multipleLocationSchema.parse(req.body);
        const locationSize = validatedData.length;
        for(var i = 0;i<locationSize;i++){
            addLocation({body: validatedData[i]}, res);
        }
        res.json({
            "message" : "Locations added successfully",
        });
    }
    catch(e){
        res.status(400).json({
            "error" : e.errors
        });
    }
});

module.exports = router;