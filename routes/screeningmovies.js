import express from 'express';
// import { fetchScreenings } from '../utils/screeningUtils.js';
import { getAllScreenings, mapScreenings } from '../utils/screeningUtils.js';
import { frontpageScreening } from '../utils/screeningUtils.js';
import cmsAdapter from '../src/cmsAdapt.js';
// import { fetchScreenings } from '../utils/screeningUtils.js';
const screeningRouter = express.Router();



screeningRouter.get('/coming-screenings', async (req, res) => {
    try {
        const maxScreenings = await frontpageScreening(cmsAdapter)
        if ((maxScreenings.length === 0))
            res.status(404).send('ingen data hittades');
        else
            res.status(200).json(maxScreenings);

    } catch (error) {
        console.log('Error fetching screenings', error)
        res.status(500).send('Databasen verkar inte kunna hämta data.')

    }

})



export default screeningRouter;