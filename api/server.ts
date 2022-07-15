import express from 'express';

import { Request, Response } from 'express';

const app = express();

app.get('/api', (req: Request, res: Response) => {
	res.send('Application works!');
});

app.listen(3000, () => {
	console.log('Application started on port 3000!');
});

module.exports = app;
