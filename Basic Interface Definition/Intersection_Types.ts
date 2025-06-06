// Combine multiple types into one
type Timestamped = {
  createdAt: Date;
  updatedAt: Date;
};

type WithID = {
  id: number;
};

type Record = Timestamped & WithID & {
  data: string;
};

const rec: Record = {
  id: 5,
  createdAt: new Date(),
  updatedAt: new Date(),
  data: "Important note",
};

console.log(rec);

