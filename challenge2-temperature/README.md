Patrick Rodriguez Challenge 2 - temperatures

#### Inititalization
- npm start
- Test elments: getTemperatureSummary('18/02/2021', 'Grand Island');
- File main: src/app.ts


#### Data test


	{
		"id": 1,
		"city": "Denver",a
		"temperature": "1.14",
		"time": "18/02/2021",
		"units": "°C",
		"region": "CO",
		"postal": "21638"
	},
	{
		"id": 2,
		"city": "Laramie",
		"temperature": "1.83",
		"time": "16/02/2021",
		"units": "°C",
		"region": "WY",
		"postal": "35900"
	},
	{
		"id": 3,
		"city": "Davenport",
		"temperature": "9.64",
		"time": "14/02/2021",
		"units": "°C",
		"region": "IA",
		"postal": "45828"
	},
	{
		"id": 4,
		"city": "Reading",
		"temperature": "7.96",
		"time": "20/02/2021",
		"units": "°C",
		"region": "Pennsylvania",
		"postal": "10787"
	},
	{
		"id": 5,
		"city": "Oklahoma City",
		"temperature": "8.88",
		"time": "16/02/2021",
		"units": "°C",
		"region": "OK",
		"postal": "94099"
	},
	{
		"id": 6,
		"city": "Great Falls",
		"temperature": "0.32",
		"time": "20/02/2021",
		"units": "°C",
		"region": "MT",
		"postal": "59543"
	},
	...
	.....
	........

```html
<!-- JSON result: '18/02/2021', 'Grand Island' -->

{
  first: '0.44',
  last: '0.44',
  high: '4.79',
  low: '0.44',
  average: 2.615
}

<!-- Second result, non-existent city -->
>> npm start

null
```
